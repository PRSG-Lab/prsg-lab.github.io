---
layout: default
lang: en
title: Opportunities
permalink: /opportunities/
alternate_url: /ko/opportunities/
---

{% assign data = site.data.opportunities_en %}

<section class="page wrap">
  <h2>{{ data.title }}</h2>
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

