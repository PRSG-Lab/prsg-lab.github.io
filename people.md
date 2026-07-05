---
layout: default
lang: en
title: People
permalink: /people/
alternate_url: /ko/people/
---

<section class="page wrap">
  <h2>Lab Members</h2>
  <p class="muted">Director information is available on the <a href="{{ '/director/' | relative_url }}">Director</a> page.</p>
  {% assign groups = "graduate_students:Graduate Students,undergraduate_researchers:Undergraduate Researchers,alumni:Alumni" | split: "," %}
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
              <h3>{{ person.name }}</h3>
              <p class="meta">{{ person.role }}{% if person.program %} · {{ person.program }}{% endif %}{% if person.period %} · {{ person.period }}{% endif %}</p>
              {% if person.email %}<p><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>{% endif %}
              <p class="muted">{{ person.research_interests | join: ", " }}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</section>
