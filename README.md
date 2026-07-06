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
- Page titles: Director, Lab Members, Research, Projects, Publications, News, Office Hours, and Opportunities use `.page-title` in `assets/css/style.css`. The page title font is Oswald Medium.
- Home Research Keywords: edit the `keywords` list in `_data/home_en.yml` and `_data/home_ko.yml`.
- Home recruitment image: replace `assets/images/we-want-you.png` to update the image shown below Research Keywords. The image links to `/opportunities/` on English Home and `/ko/opportunities/` on Korean Home.

## Page Titles

Top page titles for Director, Lab Members, Research, Projects, Publications, News, Office Hours, and Opportunities use:

```css
.page-title
```

The class is defined in `assets/css/style.css` and uses Oswald Medium with `font-weight: 500`. Home uses separate classes, `.home-main-title` and `.home-lab-fullname`, so the page title style does not change the Home title.

## Home Recruitment Image

The Home page displays a recruitment image directly below Research Keywords:

`assets/images/we-want-you.png`

Recommended format: PNG. Recommended image width: 800 px or larger. Transparent and solid backgrounds are both acceptable.

On desktop, the image link is displayed at about 50% of the content width with a max width. On mobile, it becomes wider for readability. The image keeps its original ratio and is not cropped.

The image is linked in:

- `index.md`: `/opportunities/`
- `ko/index.md`: `/ko/opportunities/`

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

Set each member photo path in `_data/people.yml`:

```yml
photo: "/assets/images/people/member-name.jpg"
```

Recommended member photo ratio:

`width:height = 1:1.33`

Recommended upload sizes are `600 x 800 px` or `900 x 1200 px`. The displayed card image size is controlled by CSS, so larger originals are scaled into the member photo area. If the original ratio is different, `object-fit: cover` may crop the image slightly. For the most natural result, crop member photos to the 1:1.33 ratio before uploading.

The Lab Members card layout is controlled by `.member-section`, `.member-grid`, `.member-card`, `.member-photo`, `.member-photo-placeholder`, and `.member-info` in `assets/css/style.css`. On desktop, `.member-grid` displays two cards per row. On mobile, it displays one card per row. The member photo area uses a 1:1.33 ratio for both real photos and placeholders.

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
image: /assets/images/news/example/main.jpg
image_alt: "Example news representative image"
image_caption: "Optional caption for the representative image."
gallery:
  - /assets/images/news/example/01.jpg
  - /assets/images/news/example/02.jpg
  - /assets/images/news/example/03.jpg
  - /assets/images/news/example/04.jpg
alternate_url: /ko/news/2026-04-01-example-news/
---

Write the news body here.
```

Add the matching Korean page in `_news_ko/` with the same slug and reversed `alternate_url`. Use `image` for the standard news image field:

```yaml
image: /assets/images/news/example/main.jpg
```

The `image` field is the representative image. It appears in Home Recent News and the News list preview. If no gallery is provided, the detail page uses this image as a single-image gallery.

To add multiple images to a news detail page, use the standard `gallery` array:

```yaml
gallery:
  - /assets/images/news/example/01.jpg
  - /assets/images/news/example/02.jpg
  - /assets/images/news/example/03.jpg
  - /assets/images/news/example/04.jpg
```

Object entries are also supported when per-image alt text or captions are needed:

```yaml
gallery:
  - url: /assets/images/news/example/01.jpg
    alt: "First image"
    caption: "Optional caption"
  - url: /assets/images/news/example/02.jpg
    alt: "Second image"
    caption: "Optional caption"
```

Gallery field fallbacks are supported for older entries: `images` and `photos`. Image field fallbacks are also supported in list previews and single-image detail pages for older entries: `thumbnail`, `featured_image`, and `cover`.

News images should be uploaded to:

`assets/images/news/`

Recommended representative image size: 800 px wide or larger. Recommended gallery image size: 1200 px wide or larger. A 4:3 or 16:9 ratio works best for list previews. The actual preview size is controlled by CSS, so large originals are scaled down. If the original ratio is different, `object-fit: cover` may crop the list preview slightly.

Home Recent News and the News list preview image is controlled by `.news-preview-image`, `.home-news-item`, and `.news-list-item` in `assets/css/style.css`. The preview is displayed at about 360 px wide on desktop, roughly twice the earlier 180 px preview size.

The News detail gallery displays one large image at a time. The large image is centered at 70% of the content width on desktop and 100% on mobile. Thumbnails appear below the large image; about four thumbnails are visible on desktop, and the `<` / `>` buttons scroll the thumbnail strip. Thumbnail click and arrow behavior is implemented in `assets/js/main.js`.

The collection URLs are configured in `_config.yml`:

- English: `/news/:name/`
- Korean: `/ko/news/:name/`

Home Recent News and the News list both read from these collections. Home shows the latest three items as a vertical list, not a grid. The News tab shows the full collection as a vertical list. Each item links to its detail page with the title and `Read more`.

If a news entry has `image`, the preview image appears on the right side of the item in both Home Recent News and the News tab. If no image is provided, the item renders as a text-only list item without an empty image column.

Relevant CSS classes in `assets/css/style.css`:

- `.home-news-list`
- `.home-news-item`
- `.home-news-content`
- `.news-list`
- `.news-list-item`
- `.news-list-content`
- `.news-title`
- `.news-excerpt`
- `.news-preview-image`
- `.news-gallery`
- `.news-gallery-main`
- `.news-gallery-main-image`
- `.news-gallery-thumbnails-wrap`
- `.news-gallery-thumbnails`
- `.news-gallery-thumb`
- `.gallery-arrow`

News gallery thumbnail interactions are implemented in:

`assets/js/main.js`

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
