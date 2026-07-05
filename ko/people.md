---
layout: default
lang: ko
title: People
permalink: /ko/people/
alternate_url: /people/
---

<section class="page wrap">
  <h2>Lab Members</h2>
  <p class="muted">Director 정보는 <a href="{{ '/ko/director/' | relative_url }}">Director</a> 페이지에서 확인할 수 있습니다.</p>
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
              <h3>{{ person.name_ko }}</h3>
              <p class="meta">{{ person.role_ko }}{% if person.program %} · {{ person.program }}{% endif %}{% if person.period %} · {{ person.period }}{% endif %}</p>
              {% if person.email %}<p><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>{% endif %}
              <p class="muted">{{ person.research_interests | join: ", " }}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</section>
