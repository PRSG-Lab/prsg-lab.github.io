---
layout: default
lang: en
title: News
permalink: /news/
alternate_url: /ko/news/
---

<section class="page wrap">
  <h2>News</h2>
  {% assign sorted_news = site.data.news_en | sort: "date" | reverse %}
  {% for item in sorted_news %}
    <article class="news-item">
      <p class="meta">{{ item.date | date: "%B %-d, %Y" }}</p>
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
      {% if item.link %}<p><a href="{{ item.link }}">Read more</a></p>{% endif %}
    </article>
  {% endfor %}
</section>

