---
layout: default
lang: en
title: Office Hours
permalink: /office-hours/
alternate_url: /ko/office-hours/
---

{% assign office = site.data.office_hours_en %}

<section class="page wrap">
  <h2>{{ office.title }}</h2>
  {% for line in office.description %}
    <p>{{ line }}</p>
  {% endfor %}
  <a class="booking-button" href="{{ office.booking.url }}" target="_blank" rel="noopener noreferrer">{{ office.booking.label }}</a>
  <p class="muted">{{ office.booking.note }}</p>
  <div class="section">
    <h3>{{ office.guidelines_title }}</h3>
    <ol>
      {% for item in office.guidelines %}
        <li>{{ item }}</li>
      {% endfor %}
    </ol>
  </div>
</section>
