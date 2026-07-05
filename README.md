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
- Publications: `_data/publications.yml`
- News detail pages: `_news_en/`, `_news_ko/`
- Office Hours booking: `_data/office_hours_en.yml`, `_data/office_hours_ko.yml`
- Opportunities: `_data/opportunities_en.yml`, `_data/opportunities_ko.yml`
- Site-wide lab information: `_data/site.yml`

Add or edit YAML entries and Markdown collection documents and Jekyll will rebuild the affected pages.

## Common Updates

- Google Calendar booking URL: edit `booking.url` in `_data/office_hours_en.yml` and `_data/office_hours_ko.yml`.
- Director photo: add an image such as `assets/images/director.jpg`, then set `photo: "/assets/images/director.jpg"` in `_data/director_en.yml` and `_data/director_ko.yml`.
- Director social links: edit the `links` list in `_data/director_en.yml` and `_data/director_ko.yml`. Empty URLs are hidden on the page.
- Lab members: edit `_data/people.yml`. The `people.md` pages show Graduate Students, Undergraduate Researchers, and Alumni.
- Projects: edit `_data/projects_en.yml` and `_data/projects_ko.yml`. Projects are grouped under `ongoing` and `completed`, and each `keywords` list renders as tags.
- Home image: add `hero_image: /assets/images/your-image.jpg` to the front matter of `index.md` and `ko/index.md`, or leave it blank to keep the placeholder.
- Home location: edit `location.address` and `location.map_embed_src` in `_data/home_en.yml` and `_data/home_ko.yml`. The Location section appears below Recent News on the Home page. The address is shown without an icon.

## Header Logo

The header expects the Jeonbuk National University logo at:

`assets/images/jbnu-logo.png`

If you want to use another filename, update `_config.yml`:

```yml
logo: /assets/images/jbnu-logo.png
```

PNG or SVG is recommended. A transparent background works best, and either a horizontal or square logo can be used. After replacing the file and pushing to GitHub, GitHub Pages will rebuild the site and the new logo will appear in the header. If the image is missing, the header shows a simple JBNU fallback so the layout does not collapse.

The header university and lab names are rendered in `_includes/header.html`. The current header tagline is intentionally disabled; only the logo, `JEONBUK NATIONAL UNIVERSITY`, and `PHOTOGRAMMETRY, REMOTE SENSING AND GEOINFORMATICS LAB` are shown.

## Research Images

Research images should be placed under:

`assets/images/research/`

Each image path is managed in:

- `_data/research_en.yml`
- `_data/research_ko.yml`

If an image path is missing or an image fails to load, the Research page keeps a fixed image area and shows a simple placeholder.

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

Publication authors are structured as a list so corresponding authors can be marked:

```yml
authors:
  - name: "Author A"
  - name: "Namhoon Kim"
    corresponding: true
  - name: "Author C"
```

Any author with `corresponding: true` receives a superscript `*` on the Publications page. Multiple corresponding authors are supported by adding `corresponding: true` to more than one author. Publication entries are edited in `_data/publications.yml`.

## Office Hours Booking

The Google Calendar booking URL is stored in:

- `_data/office_hours_en.yml`
- `_data/office_hours_ko.yml`

Current URL:

`https://calendar.app.google/jVieuepEdrj5YuUo9`

The Office Hours pages open the booking link in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

## Fonts

Pretendard is imported at the top of `assets/css/style.css` and used as the default font for body content, cards, news, publications, research, projects, office hours, opportunities, and forms. Header and navigation text intentionally use `"Times New Roman", Times, serif`. Mobile navigation font size is normalized in the `@media (max-width: 720px)` block.

## Add EN/KO Pages

Create an English page and a Korean page with matching `alternate_url` values. Use `relative_url` for links in layouts and includes so the site works with GitHub Pages `baseurl` settings.
