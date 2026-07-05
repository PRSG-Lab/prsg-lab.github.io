---
layout: default
lang: en
title: Director
permalink: /director/
alternate_url: /ko/director/
---

{% assign director = site.data.director_en %}

<section class="page wrap">
  <h2>Director</h2>
  <div class="director-profile">
    <div>
      {% if director.photo %}
        <img class="director-photo" src="{{ director.photo | relative_url }}" alt="{{ director.name }}">
      {% else %}
        <div class="director-photo-placeholder" role="img" aria-label="Director photo placeholder">Director photo</div>
      {% endif %}
    </div>
    <div>
      <h3>{{ director.name }}</h3>
      <p class="meta">{{ director.title }}<br>{{ director.affiliation }}</p>
      {% for paragraph in director.bio %}
        <p>{{ paragraph }}</p>
      {% endfor %}
      <p><strong>Tel:</strong> {{ director.tel }}</p>
      <p><strong>E-mail:</strong> <a href="mailto:{{ director.email }}">{{ director.email }}</a></p>
      <div class="profile-links">
        {% for link in director.links %}
          {% if link.url %}
            <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>

  <div class="section">
    <h3>Academic Position</h3>
    <ul class="plain-list">
      {% for item in director.academic_positions %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>

  <div class="section">
    <h3>Professional Service</h3>
    <ul class="plain-list">
      {% for item in director.professional_service %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>

  <div class="section">
    <h3>Education</h3>
    {% for item in director.education %}
      <article class="publication">
        <p><strong>{{ item.degree }}</strong>, {{ item.institution }} ({{ item.period }})</p>
        {% if item.detail %}<p class="muted">{{ item.detail }}</p>{% endif %}
      </article>
    {% endfor %}
  </div>
</section>

