# PRSG Lab GitHub Pages 사이트

이 저장소는 전북대학교 Photogrammetry, Remote Sensing and Geoinformatics Lab(PRSG Lab)의 GitHub Pages/Jekyll 기반 정적 홈페이지입니다.

## 로컬 실행

1. Ruby와 Bundler를 설치합니다.
2. 사이트 루트에서 `bundle install`을 실행합니다.
3. `bundle exec jekyll serve`를 실행합니다.
4. 브라우저에서 `http://127.0.0.1:4000/`을 엽니다.

Windows의 최신 Ruby 환경에서 Jekyll 호환 문제가 발생하면 다음 방식으로 빌드를 확인할 수 있습니다.

```powershell
bundle exec ruby -e "class Object; def tainted?; false; end; def untaint; self; end; end; ARGV.replace(['build']); load Gem.bin_path('jekyll','jekyll')"
```

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소에 업로드합니다.
2. 저장소 Settings에서 GitHub Pages를 활성화합니다.
3. `_config.yml`이 있는 브랜치와 루트 폴더를 Pages source로 지정합니다.
4. 사용자 또는 조직 사이트라면 `_config.yml`의 `baseurl`은 빈 값으로 둡니다.
5. 프로젝트 사이트라면 `baseurl`을 저장소 경로로 설정합니다. 예: `/repository-name`

## 페이지 편집

영문 페이지는 사이트 루트에 있습니다.

- `index.md`
- `director.md`
- `people.md`
- `research.md`
- `projects.md`
- `publications.md`
- `news.md`
- `office-hours.md`
- `opportunities.md`

한글 페이지는 `ko/` 폴더 아래에 같은 구조로 있습니다.

각 페이지의 front matter에는 언어 전환을 위한 `lang`, `title`, `permalink`, `alternate_url` 값이 들어갑니다.

## 데이터 파일 편집

반복적으로 표시되는 콘텐츠는 주로 `_data/` 폴더에서 관리합니다.

- 연구실 구성원: `_data/people.yml`
- Director 프로필: `_data/director_en.yml`, `_data/director_ko.yml`
- 연구 분야: `_data/research_en.yml`, `_data/research_ko.yml`
- 프로젝트: `_data/projects_en.yml`, `_data/projects_ko.yml`
- Publications BibTeX 원본: `_data/publications.bib`
- Publications 표시 데이터: `_data/publications.yml`
- Office Hours 예약: `_data/office_hours_en.yml`, `_data/office_hours_ko.yml`
- Opportunities: `_data/opportunities_en.yml`, `_data/opportunities_ko.yml`
- 사이트 공통 정보: `_data/site.yml`
- Home 콘텐츠: `_data/home_en.yml`, `_data/home_ko.yml`

YAML 데이터와 Markdown 컬렉션 문서를 수정하면 Jekyll 빌드 시 페이지에 반영됩니다.

## 자주 수정하는 항목

- Google Calendar 예약 URL: `_data/office_hours_en.yml`, `_data/office_hours_ko.yml`의 `booking.url`을 수정합니다.
- Director 사진: 이미지를 `assets/images/director.jpg` 등에 업로드한 뒤 `_data/director_en.yml`, `_data/director_ko.yml`의 `photo` 값을 수정합니다.
- Director 소셜 링크: `_data/director_en.yml`, `_data/director_ko.yml`의 `links` 목록을 수정합니다. URL이 비어 있으면 페이지에 표시되지 않습니다.
- Lab Members: `_data/people.yml`을 수정합니다.
- Projects: `_data/projects_en.yml`, `_data/projects_ko.yml`을 수정합니다. `ongoing`과 `completed` 아래에 프로젝트를 추가합니다.
- Home 대표 이미지: `index.md`, `ko/index.md` front matter의 `hero_image` 값을 수정합니다.
- Home Research Keywords: `_data/home_en.yml`, `_data/home_ko.yml`의 `keywords` 목록을 수정합니다.
- Home 위치 정보: `_data/home_en.yml`, `_data/home_ko.yml`의 `location.address`, `location.map_embed_src`를 수정합니다.
- Home 모집 이미지: `assets/images/we-want-you.png` 파일을 교체합니다.
- 상단 헤더 이미지: `assets/images/header.png` 파일을 교체합니다.

## Lab Members

구성원 정보는 `_data/people.yml`에서 관리합니다.

페이지에는 다음 순서로 섹션이 표시됩니다.

`Research Staff | Graduate Students | Undergraduate Researchers | Alumni`

빈 배열인 섹션은 페이지에 표시되지 않습니다.

예시:

```yml
undergraduate_researchers:
  - name: "Seungho Kim"
    name_ko: "김승호"
    role: "Undergraduate Researcher"
    role_ko: "학부연구생"
    program: "B.S. Student"
    email: ""
    research_interests:
      - "Photogrammetry"
      - "Remote sensing"
    photo: "/assets/images/people/seungho-kim.jpg"
    homepage: ""
    period: "2026 - present"
    status: "current"
    group: "undergraduate"
```

구성원 사진은 `assets/images/people/` 아래에 업로드하고, 각 구성원의 `photo` 값에 경로를 입력합니다.

권장 사진 비율은 `가로:세로 = 1:1.33`입니다. 예: `600 x 800 px`, `900 x 1200 px`

## Research 이미지

Research 페이지의 이미지는 `assets/images/research/` 아래에 업로드합니다.

각 연구 주제의 이미지 경로는 다음 파일에서 관리합니다.

- `_data/research_en.yml`
- `_data/research_ko.yml`

투명 배경 PNG도 사용할 수 있습니다. 표시 크기와 비율은 `assets/css/style.css`의 `.research-image` 관련 CSS에서 제어합니다.

## Projects

Projects는 카드형 grid가 아니라 세로 list 형태로 표시됩니다.

영문 프로젝트는 `_data/projects_en.yml`, 한글 프로젝트는 `_data/projects_ko.yml`에서 관리합니다.

기본 구조:

```yml
ongoing:
  - period: "2026.03 - 2029.02"
    title: "Project title"
    agency: "Funding agency"
    keywords:
      - "Photogrammetry"
      - "Remote Sensing"

completed:
  - period: "2024.01 - 2025.12"
    title: "Completed project title"
    agency: "Funding agency"
    keywords:
      - "LiDAR"
      - "Point Cloud"
```

`keywords`는 페이지에서 tag 형태로 표시됩니다.

## News

News 목록 페이지는 `news.md`, `ko/news.md`입니다.

개별 뉴스 상세 페이지는 Jekyll collection으로 관리합니다.

- 영문 뉴스: `_news_en/`
- 한글 뉴스: `_news_ko/`

새 영문 뉴스 예시:

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

한글 뉴스는 `_news_ko/`에 같은 slug로 만들고 `alternate_url`을 영문 뉴스 URL로 지정합니다.

`image`는 Home Recent News와 News 목록의 대표 이미지로 사용됩니다. 상세 페이지에 `gallery`가 없으면 `image`가 단일 갤러리 이미지로 표시됩니다.

여러 이미지를 넣을 때는 `gallery` 배열을 사용합니다.

```yml
gallery:
  - /assets/images/news/example/01.jpg
  - /assets/images/news/example/02.jpg
  - /assets/images/news/example/03.jpg
```

이미지별 alt 또는 caption이 필요하면 객체 형태를 사용할 수 있습니다.

```yml
gallery:
  - url: /assets/images/news/example/01.jpg
    alt: "First image"
    caption: "Optional caption"
```

News 이미지는 `assets/images/news/` 아래에 업로드합니다.

Home Recent News는 최신 뉴스 3개를 세로 목록으로 표시합니다.

## Publications

Publications 페이지는 현재 journal article만 표시합니다.

BibTeX 원본 파일:

```text
_data/publications.bib
```

BibTeX를 수정한 뒤 다음 명령을 실행하면 `_data/publications.yml`이 다시 생성됩니다.

```bash
node scripts/bibtex-to-publications.js
```

YAML 출력만 미리 확인하고 싶으면 다음 명령을 사용합니다.

```bash
node scripts/bibtex-to-publications.js _data/publications.bib -
```

GitHub Pages는 `_data/publications.yml`을 읽어 Publications 페이지를 렌더링합니다. 따라서 `_data/publications.bib`은 관리용 원본, `_data/publications.yml`은 표시용 생성 데이터로 보면 됩니다.

Corresponding author는 BibTeX에 다음처럼 입력할 수 있습니다.

```bibtex
corresponding = {Namhoon Kim}
```

또는 저자 순번으로도 지정할 수 있습니다.

```bibtex
corresponding = {2}
```

`Namhoon Kim`, `Nam Hoon Kim`, `김남훈`은 Publications 페이지에서 자동으로 강조 표시됩니다.

## Office Hours

Google Calendar 예약 URL은 다음 파일에서 관리합니다.

- `_data/office_hours_en.yml`
- `_data/office_hours_ko.yml`

현재 URL:

```text
https://calendar.app.google/jVieuepEdrj5YuUo9
```

예약 버튼은 새 탭에서 열리도록 설정되어 있습니다.

## Navigation

상단 navigation 항목은 `_data/navigation.yml`에서 관리합니다.

현재 메뉴 순서:

`Home | People | Research | Projects | Publications | News | Office Hours | Opportunities`

People 메뉴는 하위 메뉴를 가집니다.

- Director
- Lab Members

모바일 메뉴와 People submenu 동작은 `_includes/nav.html`, `assets/js/main.js`, `assets/css/style.css`에서 제어합니다.

## 디자인과 폰트

주요 CSS는 `assets/css/style.css`에서 관리합니다.

- Home 제목: `.home-main-title`, `.home-lab-fullname`
- Home 제목 앞글자 색상: `.initial-highlight`
- 일반 페이지 제목: `.page-title`
- Director 이름: `.director-name`
- Navigation: `.site-nav`, `.nav-menu`, `.nav-submenu`
- Lab Members 카드: `.member-section`, `.member-grid`, `.member-card`, `.member-photo`
- News 목록과 갤러리: `.news-list`, `.news-preview-image`, `.news-gallery`

본문 기본 폰트는 Pretendard입니다. Home 제목과 주요 페이지 제목에는 Oswald Medium이 사용됩니다. 상단 header와 navigation은 `"Times New Roman", Times, serif` 계열을 사용합니다.

## EN/KO 페이지 추가

영문 페이지와 한글 페이지를 함께 만들고 서로의 `alternate_url`을 지정해야 언어 전환 버튼이 정상 작동합니다.

예시:

```yml
lang: en
title: Director
permalink: /director/
alternate_url: /ko/director/
```

```yml
lang: ko
title: Director
permalink: /ko/director/
alternate_url: /director/
```

레이아웃과 include에서는 `relative_url` 필터를 사용해야 GitHub Pages의 `baseurl` 설정과 함께 정상 작동합니다.
