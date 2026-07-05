---
layout: default
lang: en
title: Research
permalink: /research/
alternate_url: /ko/research/
---

<section class="page wrap">
  <h2>Research</h2>
  <p>PRSG Lab studies measurement, mapping, and interpretation methods for geospatial information from images, sensors, and spatial datasets.</p>
  <div class="grid section">
    {% for area in site.data.research_en %}
      <article class="card">
        <h3>{{ area.title }}</h3>
        <p>{{ area.description }}</p>
        <p class="muted">{{ area.keywords | join: " · " }}</p>
      </article>
    {% endfor %}
  </div>
</section>

