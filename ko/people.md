---
layout: default
lang: ko
title: People
permalink: /ko/people/
alternate_url: /people/
---

<section class="page wrap">
  <h2>People</h2>
  {% assign groups = "pi:지도교수,graduate_students:대학원생,undergraduate_researchers:학부연구생,alumni:졸업생" | split: "," %}
  {% for group in groups %}
    {% assign parts = group | split: ":" %}
    {% assign key = parts[0] %}
    <div class="section">
      <h3>{{ parts[1] }}</h3>
      <div class="grid">
        {% for person in site.data.people[key] %}
          <article class="person">
            <div class="avatar" aria-hidden="true"></div>
            <div>
              <h3>{{ person.name_ko }}</h3>
              <p class="meta">{{ person.role_ko }}{% if person.period %} · {{ person.period }}{% endif %}</p>
              {% if person.email %}<p><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>{% endif %}
              <p class="muted">{{ person.research_interests | join: ", " }}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</section>

