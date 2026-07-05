#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_INPUT = "_data/publications.bib";
const DEFAULT_OUTPUT = "_data/publications.yml";

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(`Usage: node scripts/bibtex-to-publications.js [input.bib] [output.yml|-]

Defaults:
  input:  ${DEFAULT_INPUT}
  output: ${DEFAULT_OUTPUT}

Optional BibTeX fields:
  corresponding = {Namhoon Kim}
  corresponding = {2}

The corresponding field may contain author names separated by "and", or
1-based author numbers separated by commas or spaces.`);
  process.exit(0);
}

const inputPath = path.resolve(process.cwd(), process.argv[2] || DEFAULT_INPUT);
const outputArg = process.argv[3] || DEFAULT_OUTPUT;
const writeToStdout = outputArg === "-";
const outputPath = writeToStdout ? null : path.resolve(process.cwd(), outputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`BibTeX file not found: ${inputPath}`);
  process.exit(1);
}

const bibtex = fs.readFileSync(inputPath, "utf8");
const entries = parseBibtex(bibtex);
const publications = entries
  .map(entryToPublication)
  .sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));
const yaml = serializePublications(publications);

if (writeToStdout) {
  process.stdout.write(yaml);
} else {
  fs.writeFileSync(outputPath, yaml, "utf8");
  console.log(`Wrote ${publications.length} publication(s) to ${path.relative(process.cwd(), outputPath)}`);
}

function parseBibtex(source) {
  const entries = [];
  let index = 0;

  while (index < source.length) {
    const atIndex = source.indexOf("@", index);
    if (atIndex === -1) break;

    index = atIndex + 1;
    index = skipWhitespace(source, index);

    const typeStart = index;
    while (index < source.length && /[A-Za-z]/.test(source[index])) index += 1;
    const type = source.slice(typeStart, index).toLowerCase();

    index = skipWhitespace(source, index);
    const opener = source[index];
    if (opener !== "{" && opener !== "(") {
      index += 1;
      continue;
    }

    const match = readBalanced(source, index, opener);
    index = match.end + 1;

    if (["comment", "preamble", "string"].includes(type)) continue;

    const commaIndex = findTopLevelComma(match.value);
    if (commaIndex === -1) continue;

    const key = match.value.slice(0, commaIndex).trim();
    const body = match.value.slice(commaIndex + 1);
    entries.push({ type, key, fields: parseFields(body) });
  }

  return entries;
}

function parseFields(body) {
  const fields = {};
  let index = 0;

  while (index < body.length) {
    index = skipDelimiters(body, index);
    if (index >= body.length) break;

    const nameStart = index;
    while (index < body.length && /[A-Za-z0-9_:-]/.test(body[index])) index += 1;
    const name = body.slice(nameStart, index).trim().toLowerCase();

    index = skipWhitespace(body, index);
    if (body[index] !== "=") {
      index += 1;
      continue;
    }

    index = skipWhitespace(body, index + 1);
    const parsed = readValue(body, index);
    fields[name] = cleanText(parsed.value);
    index = parsed.end;
  }

  return fields;
}

function readValue(source, index) {
  const char = source[index];

  if (char === "{" || char === "(") {
    const match = readBalanced(source, index, char);
    return { value: match.value, end: match.end + 1 };
  }

  if (char === "\"") {
    let cursor = index + 1;
    let value = "";
    let escaped = false;
    let braceDepth = 0;

    while (cursor < source.length) {
      const current = source[cursor];

      if (escaped) {
        value += current;
        escaped = false;
      } else if (current === "\\") {
        value += current;
        escaped = true;
      } else if (current === "{") {
        braceDepth += 1;
        value += current;
      } else if (current === "}") {
        braceDepth = Math.max(0, braceDepth - 1);
        value += current;
      } else if (current === "\"" && braceDepth === 0) {
        cursor += 1;
        break;
      } else {
        value += current;
      }

      cursor += 1;
    }

    return { value, end: cursor };
  }

  const start = index;
  while (index < source.length && source[index] !== ",") index += 1;
  return { value: source.slice(start, index), end: index };
}

function readBalanced(source, index, opener) {
  const closer = opener === "{" ? "}" : ")";
  let cursor = index + 1;
  let depth = 1;
  let quoteOpen = false;
  let escaped = false;
  let braceDepth = 0;

  while (cursor < source.length && depth > 0) {
    const char = source[cursor];

    if (escaped) {
      escaped = false;
    } else if (char === "\\") {
      escaped = true;
    } else if (char === "\"") {
      quoteOpen = !quoteOpen;
    } else if (!quoteOpen && opener === "{") {
      if (char === "{") depth += 1;
      if (char === "}") depth -= 1;
    } else if (!quoteOpen && opener === "(") {
      if (char === "{") braceDepth += 1;
      if (char === "}") braceDepth = Math.max(0, braceDepth - 1);
      if (braceDepth === 0 && char === "(") depth += 1;
      if (braceDepth === 0 && char === ")") depth -= 1;
    }

    cursor += 1;
  }

  return {
    value: source.slice(index + 1, Math.max(index + 1, cursor - 1)),
    end: cursor - 1,
  };
}

function findTopLevelComma(text) {
  let braceDepth = 0;
  let quoteOpen = false;
  let escaped = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];

    if (escaped) {
      escaped = false;
    } else if (char === "\\") {
      escaped = true;
    } else if (char === "\"") {
      quoteOpen = !quoteOpen;
    } else if (!quoteOpen && char === "{") {
      braceDepth += 1;
    } else if (!quoteOpen && char === "}") {
      braceDepth = Math.max(0, braceDepth - 1);
    } else if (!quoteOpen && braceDepth === 0 && char === ",") {
      return index;
    }
  }

  return -1;
}

function entryToPublication(entry) {
  const fields = entry.fields;
  const authors = splitAuthors(fields.author || fields.authors || "");
  const corresponding = parseCorresponding(fields.corresponding || fields.corresponding_author || fields.corresponding_authors || "");

  return {
    authors: authors.map((name, index) => {
      const author = { name };
      if (isCorrespondingAuthor(name, index, corresponding)) author.corresponding = true;
      return author;
    }),
    year: parseYear(fields.year || fields.date || ""),
    title: cleanText(fields.title || ""),
    journal: publicationVenue(entry.type, fields),
    volume: cleanText(fields.volume || ""),
    issue: cleanText(fields.issue || fields.number || ""),
    pages: normalizePages(fields.pages || fields["article-number"] || fields.articleno || fields.eid || ""),
    doi: normalizeDoi(fields.doi || ""),
    link: cleanText(fields.url || fields.link || ""),
    type: publicationType(entry.type),
  };
}

function publicationType(type) {
  if (["article"].includes(type)) return "journal";
  if (["conference", "inproceedings", "proceedings", "incollection"].includes(type)) return "conference";
  return "report";
}

function publicationVenue(type, fields) {
  if (publicationType(type) === "journal") {
    return cleanText(fields.journal || fields.journaltitle || fields.publisher || "");
  }

  if (publicationType(type) === "conference") {
    return cleanText(fields.booktitle || fields.eventtitle || fields.conference || fields.journal || "");
  }

  return cleanText(fields.institution || fields.school || fields.publisher || fields.journal || fields.booktitle || "");
}

function splitAuthors(authorField) {
  return authorField
    .split(/\s+and\s+/i)
    .map(formatAuthorName)
    .filter(Boolean);
}

function formatAuthorName(name) {
  const cleaned = cleanText(name);
  if (!cleaned) return "";

  const parts = cleaned.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length === 2) return `${parts[1]} ${parts[0]}`.trim();
  if (parts.length >= 3) return `${parts[2]} ${parts[0]} ${parts[1]}`.trim();
  return cleaned;
}

function parseCorresponding(value) {
  const cleaned = cleanText(value);
  const names = new Set();
  const indexes = new Set();

  if (!cleaned) return { names, indexes };

  cleaned.split(/[\s,;]+/).forEach((part) => {
    if (/^\d+$/.test(part)) indexes.add(Number(part) - 1);
  });

  splitAuthors(cleaned).forEach((name) => {
    if (!/^\d+$/.test(name)) names.add(normalizeName(name));
  });

  return { names, indexes };
}

function isCorrespondingAuthor(name, index, corresponding) {
  return corresponding.indexes.has(index) || corresponding.names.has(normalizeName(name));
}

function parseYear(value) {
  const match = cleanText(value).match(/\d{4}/);
  return match ? Number(match[0]) : "";
}

function normalizeDoi(value) {
  return cleanText(value)
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .trim();
}

function normalizePages(value) {
  return cleanText(value).replace(/\s*--+\s*/g, "-");
}

function cleanText(value) {
  return String(value || "")
    .replace(/\\&/g, "&")
    .replace(/\\\{/g, "{")
    .replace(/\\\}/g, "}")
    .replace(/\\([A-Za-z])/g, "$1")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeName(value) {
  return formatAuthorName(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function serializePublications(publications) {
  const lines = [
    "# Generated from _data/publications.bib by scripts/bibtex-to-publications.js.",
    "# Edit the BibTeX file, then run: node scripts/bibtex-to-publications.js",
    "",
  ];

  publications.forEach((publication) => {
    if (publication.authors.length === 0) {
      lines.push("- authors: []");
    } else {
      lines.push("- authors:");
      publication.authors.forEach((author) => {
        lines.push(`    - name: ${quoteYaml(author.name)}`);
        if (author.corresponding) lines.push("      corresponding: true");
      });
    }

    lines.push(`  year: ${typeof publication.year === "number" ? publication.year : quoteYaml(publication.year)}`);
    lines.push(`  title: ${quoteYaml(publication.title)}`);
    lines.push(`  journal: ${quoteYaml(publication.journal)}`);
    lines.push(`  volume: ${quoteYaml(publication.volume)}`);
    lines.push(`  issue: ${quoteYaml(publication.issue)}`);
    lines.push(`  pages: ${quoteYaml(publication.pages)}`);
    lines.push(`  doi: ${quoteYaml(publication.doi)}`);
    lines.push(`  link: ${quoteYaml(publication.link)}`);
    lines.push(`  type: ${quoteYaml(publication.type)}`);
  });

  return `${lines.join("\n")}\n`;
}

function quoteYaml(value) {
  return `"${String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, "\\\"")
    .replace(/\r?\n/g, " ")}"`;
}

function skipWhitespace(source, index) {
  while (index < source.length && /\s/.test(source[index])) index += 1;
  return index;
}

function skipDelimiters(source, index) {
  while (index < source.length && (/[\s,]/.test(source[index]))) index += 1;
  return index;
}
