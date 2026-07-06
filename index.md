---
layout: default
lang: en
title: Home
permalink: /
alternate_url: /ko/
show_hero_image: false
---

{% assign home = site.data.home_en %}
{% assign opportunities_url = "/opportunities/" %}

<section class="hero wrap">
  {% if page.show_hero_image and page.hero_image %}
    <section class="home-hero-image">
      <img src="{{ page.hero_image | relative_url }}" alt="PRSG Lab image">
    </section>
  {% endif %}

  <section class="home-section home-intro">
    <h1 class="home-main-title">{{ site.data.site.lab_short_name }}</h1>
    <div class="home-lab-fullname" aria-label="Photogrammetry, Remote Sensing and Geoinformatics Lab">
      <span class="initial-highlight">P</span>hotogrammetry,
      <span class="initial-highlight">R</span>emote <span class="initial-highlight">S</span>ensing
      and <span class="initial-highlight">G</span>eoinformatics Lab
    </div>
    {% for paragraph in home.intro %}
      <p>{{ paragraph }}</p>
    {% endfor %}
    {% if home.pi_heading or home.pi_text %}
      <div class="section">
        {% if home.pi_heading %}<h3>{{ home.pi_heading }}</h3>{% endif %}
        {% if home.pi_text %}<p>{{ home.pi_text }}</p>{% endif %}
      </div>
    {% endif %}
    <div class="section">
      <p><strong>Research Keywords:</strong> {{ home.keywords | join: ", " }}</p>
      <div class="home-recruitment-image">
        <a href="{{ opportunities_url | relative_url }}" aria-label="View PRSG Lab opportunities">
          <img src="{{ '/assets/images/we-want-you.png' | relative_url }}" alt="PRSG Lab recruitment poster">
        </a>
      </div>
    </div>
  </section>

  <section class="home-section home-news">
    <h2>Recent News</h2>
    {% assign recent_news = site.news_en | sort: "date" | reverse %}
    <div class="home-news-list">
      {% for item in recent_news limit:3 %}
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
        <article class="home-news-item{% if preview_image and preview_image != "" %} has-image{% endif %}">
          <div class="home-news-content">
            <p class="news-date">{{ item.date | date: "%B %-d, %Y" }}</p>
            <h3 class="news-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
            <p class="news-excerpt">{{ item.excerpt | strip_html | truncate: 160 }}</p>
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

  <section class="home-section home-location">
    <h2>{{ home.location.title }}</h2>
    <p class="location-address">{{ home.location.address }}</p>
    <div class="map-embed">
      <iframe src="{{ home.location.map_embed_src }}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </section>
</section>
