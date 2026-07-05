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
  <div class="research-list section">
    {% for area in site.data.research_ko %}
      <section class="research-list-item">
        <div class="research-image">
          {% if area.image %}
            <div class="research-image-placeholder" hidden>Image</div>
            <img src="{{ area.image | relative_url }}" alt="{{ area.title }}" onerror="this.hidden=true;this.previousElementSibling.hidden=false">
          {% else %}
            <div class="research-image-placeholder">Image</div>
          {% endif %}
        </div>
        <div class="research-text">
          <h3>{{ area.title }}</h3>
          <p>{{ area.description }}</p>
          {% if area.keywords %}
            <div class="research-tags">
              {% for keyword in area.keywords %}
                <span class="research-tag">{{ keyword }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </section>
    {% endfor %}
  </div>
</section>
