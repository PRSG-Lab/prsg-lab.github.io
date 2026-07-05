---
layout: default
lang: ko
title: 홈
permalink: /ko/
alternate_url: /
---

{% assign home = site.data.home_ko %}

<section class="hero">
  <div>
    <h2>{{ site.data.site.lab_short_name }}</h2>
    <p>{{ home.intro }}</p>
    <div class="section">
      <h3>{{ home.pi_heading }}</h3>
      <p>{{ home.pi_text }}</p>
    </div>
    <div class="section">
      <h3>Research Keywords</h3>
      <ul class="plain-list">
        {% for keyword in home.keywords %}
          <li>{{ keyword }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="placeholder-image" role="img" aria-label="연구실, 캠퍼스 또는 지도교수 사진 자리">
    연구실 이미지 자리
  </div>
</section>

<section class="section wrap">
  <h2>Recent News</h2>
  <div class="grid">
    {% for item in site.data.news_ko limit:3 %}
      <article class="news-item">
        <p class="meta">{{ item.date | date: "%Y.%m.%d" }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </article>
    {% endfor %}
  </div>
</section>

