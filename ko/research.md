---
layout: default
lang: ko
title: Research
permalink: /ko/research/
alternate_url: /research/
---

<section class="page wrap">
  <h2>Research</h2>
  <p>PRSG Lab은 영상, 센서, 공간자료로부터 지리공간정보를 계측하고 해석하는 방법을 연구합니다.</p>
  <div class="grid section">
    {% for area in site.data.research_ko %}
      <article class="card">
        <h3>{{ area.title }}</h3>
        <p>{{ area.description }}</p>
        <p class="muted">{{ area.keywords | join: " · " }}</p>
      </article>
    {% endfor %}
  </div>
</section>

