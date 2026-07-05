---
layout: default
lang: en
title: Projects
permalink: /projects/
alternate_url: /ko/projects/
---

<section class="page wrap">
  <h2>Projects</h2>
  <div class="section">
    <h3>Ongoing</h3>
    <div class="project-list">
      {% for project in site.data.projects_en.ongoing %}
        <article class="project-item">
          <p class="project-period">{{ project.period }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-agency"><strong>Agency:</strong> {{ project.agency }}</p>
          <div class="project-tags">
            {% for keyword in project.keywords %}
              <span class="project-tag">{{ keyword }}</span>
            {% endfor %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
  <div class="section">
    <h3>Completed</h3>
    <div class="project-list">
      {% for project in site.data.projects_en.completed %}
        <article class="project-item">
          <p class="project-period">{{ project.period }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-agency"><strong>Agency:</strong> {{ project.agency }}</p>
          <div class="project-tags">
            {% for keyword in project.keywords %}
              <span class="project-tag">{{ keyword }}</span>
            {% endfor %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
