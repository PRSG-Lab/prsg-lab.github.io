---
layout: default
lang: en
title: Projects
permalink: /projects/
alternate_url: /ko/projects/
---

<section class="page wrap">
  <h2>Projects</h2>
  <div class="grid section">
    {% for project in site.data.projects_en %}
      <article class="project">
        <span class="label">{{ project.status }}</span>
        <h3>{{ project.title }}</h3>
        <p class="meta">{{ project.period }} · {{ project.funding_agency }}</p>
        <p><strong>Role:</strong> {{ project.role }}</p>
        <p>{{ project.description }}</p>
      </article>
    {% endfor %}
  </div>
</section>

