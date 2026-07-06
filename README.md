# PRSG Lab GitHub Pages Site

This is a static Jekyll site for the Photogrammetry, Remote Sensing and Geoinformatics Lab at Jeonbuk National University.

## Run Locally

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.
4. Open `http://127.0.0.1:4000/`.

## Deploy To GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository settings, enable GitHub Pages.
3. Select the branch and root folder that contain `_config.yml`.
4. Keep `baseurl` in `_config.yml` empty for a user or organization site. For a project site, set it to the repository path, for example `/repository-name`.

## Edit Pages

English pages are at the site root: `index.md`, `people.md`, `research.md`, `projects.md`, `publications.md`, `news.md`, `office-hours.md`, and `opportunities.md`.

The Director page is `director.md`. Korean pages are under `ko/` with matching filenames. Each page has `lang`, `title`, `permalink`, and `alternate_url` front matter for language switching.

## Edit Data

Most repeated content is in `_data/`:

- People: `_data/people.yml`
- Director profile: `_data/director_en.yml`, `_data/director_ko.yml`
- Research: `_data/research_en.yml`, `_data/research_ko.yml`
- Projects: `_data/projects_en.yml`, `_data/projects_ko.yml`
- Publications source: `_data/publications.bib`
- Publications generated data: `_data/publications.yml`
- News detail pages: `_news_en/`, `_news_ko/`
- Office Hours booking: `_data/office_hours_en.yml`, `_data/office_hours_ko.yml`
- Opportunities: `_data/opportunities_en.yml`, `_data/opportunities_ko.yml`
- Site-wide lab information: `_data/site.yml`

Add or edit YAML entries and Markdown collection documents and Jekyll will rebuild the affected pages.

## Common Updates

- Google Calendar booking URL: edit `booking.url` in `_data/office_hours_en.yml` and `_data/office_hours_ko.yml`.
- Director photo: add an image such as `assets/images/director.jpg`, then set `photo: "/assets/images/director.jpg"` in `_data/director_en.yml` and `_data/director_ko.yml`.
- Director social links: edit the `links` list in `_data/director_en.yml` and `_data/director_ko.yml`. Empty URLs are hidden on the page.
- Lab members: edit `_data/people.yml`. The `people.md` pages show Research Staff, Graduate Students, Undergraduate Researchers, and Alumni. Empty sections are hidden.
- Projects: edit `_data/projects_en.yml` and `_data/projects_ko.yml`. Projects are grouped under `ongoing` and `completed`, and each `keywords` list renders as tags. The section distinction is styled with `.project-status-section` and `.project-status-heading`.
- Home image: add `hero_image: /assets/images/your-image.jpg` to the front matter of `index.md` and `ko/index.md`, or leave it blank to keep the placeholder.
- Home location: edit `location.address` and `location.map_embed_src` in `_data/home_en.yml` and `_data/home_ko.yml`. The Location section appears below Recent News on the Home page. The address is shown without an icon.
- Home title and subtitle: edit the markup in `index.md` and `ko/index.md`. The Oswald Medium font, size, weight, and color are controlled by `.home-main-title`, `.home-lab-fullname`, and `.initial-highlight` in `assets/css/style.css`.

## Lab Members

Lab Members data is managed in:

`_data/people.yml`

The page sections render in this order:

`Research Staff | Graduate Students | Undergraduate Researchers | Alumni`

If a section has an empty array, such as `research_staff: []`, that section is hidden on the page. Add entries under the relevant array and the section appears automatically.

Research Staff entries can use roles such as `Postdoctoral Researcher`, `Research Professor`, `Research Fellow`, `Researcher`, `M.S.-level Researcher`, or `Visiting Researcher`.

Example Research Staff entry:

```yml
research_staff:
  - name: "Example Name"
    name_ko: "예시 이름"
    role: "Postdoctoral Researcher"
    role_ko: "박사후연구원"
    program: ""
    email: "example@jbnu.ac.kr"
    research_interests:
      - "LiDAR point cloud processing"
      - "3D reconstruction"
    photo: "/assets/images/people/example.jpg"
    homepage: ""
    period: "2026 - present"
    status: "current"
    group: "research_staff"
```

Graduate Students, Undergraduate Researchers, and Alumni use the same field structure. Profile photos should be placed under:

`assets/images/people/`

The Lab Members card layout is controlled by `.member-section`, `.member-grid`, `.member-card`, `.member-photo`, and `.member-info` in `assets/css/style.css`. On desktop, `.member-grid` displays two cards per row. On mobile, it displays one card per row.

## Header Image

The top header is rendered as one responsive image. Replace the header by uploading the desired image to:

`assets/images/header.png`

Recommended format: PNG. Recommended width: 1100 px or larger.

The image is displayed at `width: 100%; height: auto;` inside the same site container used by the navigation and page content. Clicking the header image links to the current language home page:

- English pages: `/`
- Korean pages: `/ko/`

The header markup is in `_includes/header.html`; styling is managed with `.header-image-container`, `.header-image-link`, and `.header-image` in `assets/css/style.css`.

## Research Images

Research images should be placed under:

`assets/images/research/`

Each image path is managed in:

- `_data/research_en.yml`
- `_data/research_ko.yml`

If an image path is missing or an image fails to load, the Research page keeps a fixed image area and shows a simple placeholder.

Research image display size is controlled in `assets/css/style.css`:

- Desktop: `.research-list-item` uses a 220 px left column, and `.research-image` is 220 px wide.
- Image ratio: `.research-image img` and `.research-image-placeholder` use `aspect-ratio: 4 / 3`, so the displayed size is approximately 220 px x 165 px on desktop.
- Mobile: `.research-list-item` becomes one column and `.research-image` becomes `width: 100%`, so the image scales responsively inside the content container.
- Original image size does not change the displayed box size; large images are scaled/cropped by CSS with `object-fit: cover`.
- Recommended upload size: at least 800 x 600 px, preferably 4:3.

## Opportunities

The Opportunities page is available at `/opportunities/` and `/ko/opportunities/`. Edit recruiting text, research areas, applicant guidance, preferred background, and contact instructions in:

- `_data/opportunities_en.yml`
- `_data/opportunities_ko.yml`

## Navigation

Navigation items are managed in `_data/navigation.yml`. The top-level menu order is:

`Home | People | Research | Projects | Publications | News | Office Hours | Opportunities`

The People top-level link now points to Director:

- English: `/director/`
- Korean: `/ko/director/`

The People dropdown keeps two child links:

- Director: `/director/`, `/ko/director/`
- Lab Members: `/people/`, `/ko/people/`

The mobile MENU button and People submenu button are rendered in `_includes/nav.html`. Their open/close behavior is implemented in `assets/js/main.js`. Mobile-only styling is in `assets/css/style.css` under the `@media (max-width: 720px)` block.

## News

News list pages are `news.md` and `ko/news.md`. Individual news detail pages are generated from Jekyll collections:

- English news: `_news_en/`
- Korean news: `_news_ko/`

Add a new English news file such as `_news_en/2026-04-01-example-news.md`:

```markdown
---
layout: news
lang: en
title: "Example news title"
date: 2026-04-01
alternate_url: /ko/news/2026-04-01-example-news/
---

Write the news body here.
```

Add the matching Korean page in `_news_ko/` with the same slug and reversed `alternate_url`. The collection URLs are configured in `_config.yml`:

- English: `/news/:name/`
- Korean: `/ko/news/:name/`

Home Recent News and the News list both read from these collections. Each card links to its detail page with `Read more`.

## Director Page

Director profile data, including the photo path, is managed in:

- `_data/director_en.yml`
- `_data/director_ko.yml`

Set `photo: "/assets/images/director.jpg"` after uploading the image. On desktop, the Director page uses a text-left/photo-right layout. On mobile, CSS changes the order so the photo appears immediately below the `Director` heading and above the name.

## Publications

The Publications pages at `/publications/` and `/ko/publications/` display journal articles only. Entries with `type: "conference"`, `type: "patent"`, or `type: "report"` may remain in the data file for future use, but they are not rendered on the current Publications page.

Publications can be maintained from BibTeX. Edit:

`_data/publications.bib`

Then run this command from the site root:

```bash
node scripts/bibtex-to-publications.js
```

To preview the converted YAML without overwriting `_data/publications.yml`, run:

```bash
node scripts/bibtex-to-publications.js _data/publications.bib -
```

The script regenerates:

`_data/publications.yml`

GitHub Pages reads `_data/publications.yml`, so the site remains compatible with the standard Jekyll build. Treat `_data/publications.bib` as the easier source file and `_data/publications.yml` as generated display data.

A journal article entry in `_data/publications.yml` uses this structure:

```yml
- year: 2026
  type: "journal"
  authors:
    - name: "Author A"
    - name: "Namhoon Kim"
      name_ko: "김남훈"
      highlight: true
      corresponding: true
    - name: "Author C"
  title: "Example paper title"
  journal: "Journal Name"
  volume: "12"
  issue: "3"
  pages: "45-60"
  doi: "10.0000/example"
  link: "https://example.com/paper"
```

The page groups journal articles by year, sorts recent years first, and renders each paper as a bullet item in an APA-like order: authors, year, title, journal, volume(issue), pages, DOI, and Link.

To mark corresponding authors, add a custom BibTeX field:

```bibtex
corresponding = {Namhoon Kim}
```

or use 1-based author numbers:

```bibtex
corresponding = {2}
```

The generated YAML keeps publication authors structured as a list:

```yml
authors:
  - name: "Author A"
  - name: "Namhoon Kim"
    corresponding: true
  - name: "Author C"
```

Any author with `corresponding: true` receives a superscript `*` on the Publications page. Multiple corresponding authors are supported by listing more than one name in the BibTeX `corresponding` field with `and`, for example `corresponding = {Namhoon Kim and Author C}`.

`Namhoon Kim`, `Nam Hoon Kim`, and `김남훈` are automatically bolded on the Publications page. If another spelling should be highlighted, add `highlight: true` to that author in `_data/publications.yml`.

DOI and external links are optional:

- `doi: "10.xxxx/xxxxx"` becomes a `DOI` link using `https://doi.org/`.
- `doi: "https://doi.org/10.xxxx/xxxxx"` is used as-is.
- `link` may point to the publisher page, PDF, or project page and is rendered as `Link`.

## Office Hours Booking

The Google Calendar booking URL is stored in:

- `_data/office_hours_en.yml`
- `_data/office_hours_ko.yml`

Current URL:

`https://calendar.app.google/jVieuepEdrj5YuUo9`

The Office Hours pages open the booking link in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

The booking button is centered by `.booking-button-wrapper` in `assets/css/style.css`; the existing `.booking-button` class controls the button color, padding, and typography.

## Fonts

Pretendard is imported at the top of `assets/css/style.css` and used as the default font for body content, cards, news, publications, research, projects, office hours, opportunities, and forms. Oswald Medium is imported for the Home `PRSG Lab` title and full lab subtitle only through `.home-main-title` and `.home-lab-fullname`. Header and navigation text intentionally use `"Times New Roman", Times, serif`. Mobile navigation font size is normalized in the `@media (max-width: 720px)` block.

## Add EN/KO Pages

Create an English page and a Korean page with matching `alternate_url` values. Use `relative_url` for links in layouts and includes so the site works with GitHub Pages `baseurl` settings.
