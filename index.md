---
layout: default
lang: en
title: Home
permalink: /
alternate_url: /ko/
show_hero_image: false
---

{% assign home = site.data.home_en %}

<section class="hero wrap">
  {% if page.show_hero_image and page.hero_image %}
    <section class="home-hero-image">
      <img src="{{ page.hero_image | relative_url }}" alt="PRSG Lab image">
    </section>
  {% endif %}

  <section class="home-section home-intro">
    <h2>{{ site.data.site.lab_short_name }}</h2>
    <p>{{ home.intro }}</p>
    {% if home.pi_heading or home.pi_text %}
      <div class="section">
        {% if home.pi_heading %}<h3>{{ home.pi_heading }}</h3>{% endif %}
        {% if home.pi_text %}<p>{{ home.pi_text }}</p>{% endif %}
      </div>
    {% endif %}
    <div class="section">
      <h3>Research Keywords</h3>
      <ul class="plain-list">
        {% for keyword in home.keywords %}
          <li>{{ keyword }}</li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="home-section home-news">
    <h2>Recent News</h2>
    {% assign recent_news = site.news_en | sort: "date" | reverse %}
    <div class="grid">
      {% for item in recent_news limit:3 %}
        <article class="news-item news-card">
          <p class="news-date">{{ item.date | date: "%B %-d, %Y" }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.excerpt | strip_html | truncate: 130 }}</p>
          <a class="read-more" href="{{ item.url | relative_url }}">Read more</a>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section home-location">
    <h2>{{ home.location.title }}</h2>
    <p class="location-address">{{ home.location.address }}</p>
    <div class="map-embed">
      <iframe src="{{ home.location.map_embed_src }}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </section>
</section>
