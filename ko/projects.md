---
layout: default
lang: ko
title: Projects
permalink: /ko/projects/
alternate_url: /projects/
---

<section class="page wrap">
  <h2>Projects</h2>
  <div class="grid section">
    {% for project in site.data.projects_ko %}
      <article class="project">
        <span class="label">{{ project.status }}</span>
        <h3>{{ project.title }}</h3>
        <p class="meta">{{ project.period }} · {{ project.funding_agency }}</p>
        <p><strong>역할:</strong> {{ project.role }}</p>
        <p>{{ project.description }}</p>
      </article>
    {% endfor %}
  </div>
</section>

