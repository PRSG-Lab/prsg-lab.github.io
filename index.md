---
layout: default
lang: en
title: Home
permalink: /
alternate_url: /ko/
---

{% assign home = site.data.home_en %}

<section class="hero wrap">
  <section class="home-hero-image">
    {% if page.hero_image %}
      <img src="{{ page.hero_image | relative_url }}" alt="PRSG Lab image">
    {% else %}
      <div class="image-placeholder" role="img" aria-label="Placeholder for lab, campus, or principal investigator image">Lab image placeholder</div>
    {% endif %}
  </section>

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
</section>

<section class="section wrap">
  <h2>Recent News</h2>
  <div class="grid">
    {% for item in site.data.news_en limit:3 %}
      <article class="news-item">
        <p class="meta">{{ item.date | date: "%B %-d, %Y" }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </article>
    {% endfor %}
  </div>
</section>
