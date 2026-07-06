---
layout: default
lang: ko
title: Office Hours
permalink: /ko/office-hours/
alternate_url: /office-hours/
---

{% assign office = site.data.office_hours_ko %}

<section class="page wrap">
  <h1 class="page-title">{{ office.title }}</h1>
  {% for line in office.description %}
    <p>{{ line }}</p>
  {% endfor %}
  <div class="booking-button-wrapper">
    <a class="booking-button" href="{{ office.booking.url }}" target="_blank" rel="noopener noreferrer">{{ office.booking.label }}</a>
  </div>
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
