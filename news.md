---
layout: default
lang: en
title: News
permalink: /news/
alternate_url: /ko/news/
---

<section class="page wrap">
  <h1 class="page-title">News</h1>
  {% assign sorted_news = site.news_en | sort: "date" | reverse %}
  <div class="news-list">
    {% for item in sorted_news %}
      <article class="news-item news-card">
        <p class="news-date">{{ item.date | date: "%B %-d, %Y" }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.excerpt | strip_html | truncate: 160 }}</p>
        <a class="read-more" href="{{ item.url | relative_url }}">Read more</a>
      </article>
    {% endfor %}
  </div>
</section>
