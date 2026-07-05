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

Korean pages are under `ko/` with matching filenames. Each page has `lang`, `title`, `permalink`, and `alternate_url` front matter for language switching.

## Edit Data

Most repeated content is in `_data/`:

- People: `_data/people.yml`
- Research: `_data/research_en.yml`, `_data/research_ko.yml`
- Projects: `_data/projects_en.yml`, `_data/projects_ko.yml`
- Publications: `_data/publications.yml`
- News: `_data/news_en.yml`, `_data/news_ko.yml`
- Site-wide lab information: `_data/site.yml`

Add or edit YAML entries and Jekyll will rebuild the affected pages.

## Add EN/KO Pages

Create an English page and a Korean page with matching `alternate_url` values. Use `relative_url` for links in layouts and includes so the site works with GitHub Pages `baseurl` settings.

