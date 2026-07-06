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
      {% assign preview_image = "" %}
      {% if item.image and item.image != "" %}
        {% assign preview_image = item.image %}
      {% elsif item.thumbnail and item.thumbnail != "" %}
        {% assign preview_image = item.thumbnail %}
      {% elsif item.featured_image and item.featured_image != "" %}
        {% assign preview_image = item.featured_image %}
      {% elsif item.cover and item.cover != "" %}
        {% assign preview_image = item.cover %}
      {% endif %}
      <article class="news-list-item{% if preview_image and preview_image != "" %} has-image{% endif %}">
        <div class="news-list-content">
          <p class="news-date">{{ item.date | date: "%B %-d, %Y" }}</p>
          <h2 class="news-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
          <p class="news-excerpt">{{ item.excerpt | strip_html | truncate: 180 }}</p>
          <a class="read-more" href="{{ item.url | relative_url }}">Read more</a>
        </div>
        {% if preview_image and preview_image != "" %}
          <a class="news-preview-image" href="{{ item.url | relative_url }}" aria-label="{{ item.title }}">
            <img src="{{ preview_image | relative_url }}" alt="{{ item.title }}">
          </a>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
