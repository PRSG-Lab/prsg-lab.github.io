---
layout: default
lang: ko
title: Director
permalink: /ko/director/
alternate_url: /director/
---

{% assign director = site.data.director_ko %}

<section class="page wrap">
  <h1 class="page-title">Director</h1>
  <div class="director-profile">
    <div class="director-profile-text">
      <h3 class="director-name">{{ director.name }}</h3>
      <p class="meta">{{ director.title }}, {{ director.affiliation }}</p>
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
    <div class="director-profile-photo">
      {% if director.photo %}
        <img class="director-photo" src="{{ director.photo | relative_url }}" alt="{{ director.name }}">
      {% else %}
        <div class="director-photo-placeholder" role="img" aria-label="Director photo placeholder">Director photo</div>
      {% endif %}
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
    <ul class="education-list">
      {% for item in director.education %}
        <li>
          <strong>{{ item.degree }}</strong>, {{ item.institution }}, {{ item.period }}
          {% if item.detail %}<br><span>{{ item.detail }}</span>{% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
