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

English pages are at the site root: `index.md`, `people.md`, `research.md`, `projects.md`, `publications.md`, `news.md`, and `office-hours.md`.

The Director page is `director.md`. Korean pages are under `ko/` with matching filenames. Each page has `lang`, `title`, `permalink`, and `alternate_url` front matter for language switching.

## Edit Data

Most repeated content is in `_data/`:

- People: `_data/people.yml`
- Director profile: `_data/director_en.yml`, `_data/director_ko.yml`
- Research: `_data/research_en.yml`, `_data/research_ko.yml`
- Projects: `_data/projects_en.yml`, `_data/projects_ko.yml`
- Publications: `_data/publications.yml`
- News: `_data/news_en.yml`, `_data/news_ko.yml`
- Office Hours booking: `_data/office_hours_en.yml`, `_data/office_hours_ko.yml`
- Site-wide lab information: `_data/site.yml`

Add or edit YAML entries and Jekyll will rebuild the affected pages.

## Common Updates

- Google Calendar booking URL: edit `booking.url` in `_data/office_hours_en.yml` and `_data/office_hours_ko.yml`.
- Director photo: add an image such as `assets/images/director.jpg`, then set `photo: "/assets/images/director.jpg"` in `_data/director_en.yml` and `_data/director_ko.yml`.
- Director social links: edit the `links` list in `_data/director_en.yml` and `_data/director_ko.yml`. Empty URLs are hidden on the page.
- Lab members: edit `_data/people.yml`. The `people.md` pages show Graduate Students, Undergraduate Researchers, and Alumni.
- Projects: edit `_data/projects_en.yml` and `_data/projects_ko.yml`. Projects are grouped under `ongoing` and `completed`, and each `keywords` list renders as tags.
- Home image: add `hero_image: /assets/images/your-image.jpg` to the front matter of `index.md` and `ko/index.md`, or leave it blank to keep the placeholder.

## Add EN/KO Pages

Create an English page and a Korean page with matching `alternate_url` values. Use `relative_url` for links in layouts and includes so the site works with GitHub Pages `baseurl` settings.
