---
layout: default
lang: ko
title: Opportunities
permalink: /ko/opportunities/
alternate_url: /opportunities/
---

{% assign data = site.data.opportunities_ko %}

<section class="page wrap">
  <h1 class="page-title">{{ data.title }}</h1>
  {% for paragraph in data.intro %}
    <p>{{ paragraph }}</p>
  {% endfor %}

  {% for section in data.sections %}
    <section class="opportunity-section">
      <h3>{{ section.heading }}</h3>
      <ul>
        {% for item in section.items %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</section>
