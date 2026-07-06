---
layout: default
lang: ko
title: People
permalink: /ko/people/
alternate_url: /people/
---

<section class="page wrap">
  <h2>Lab Members</h2>
  {% assign groups = "research_staff:Research Staff,graduate_students:Graduate Students,undergraduate_researchers:Undergraduate Researchers,alumni:Alumni" | split: "," %}
  {% for group in groups %}
    {% assign parts = group | split: ":" %}
    {% assign key = parts[0] %}
    {% assign members = site.data.people[key] %}
    {% if members and members.size > 0 %}
      <section class="member-section">
        <h3>{{ parts[1] }}</h3>
        <div class="member-grid">
          {% for person in members %}
            {% include member-card.html person=person lang=page.lang %}
          {% endfor %}
        </div>
      </section>
    {% endif %}
  {% endfor %}
</section>
