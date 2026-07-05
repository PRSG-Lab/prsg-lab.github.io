---
layout: default
lang: en
title: Publications
permalink: /publications/
alternate_url: /ko/publications/
---

<section class="page wrap">
  <h2>Publications</h2>
  <p>Selected publications are organized by publication type. Google Scholar and ORCID links can be added in <code>_data/site.yml</code>.</p>
  {% assign types = "journal:Journal Articles,conference:Conference Papers,report:Patents / Reports" | split: "," %}
  {% for type in types %}
    {% assign parts = type | split: ":" %}
    <div class="section">
      <h3>{{ parts[1] }}</h3>
      {% assign pubs = site.data.publications | where: "type", parts[0] %}
      {% for pub in pubs %}
        <article class="publication">
          <p><strong>{{ pub.authors }}</strong> ({{ pub.year }}). {{ pub.title }}. <em>{{ pub.venue }}</em>{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}.</p>
          {% if pub.doi %}<p><a href="https://doi.org/{{ pub.doi }}">DOI: {{ pub.doi }}</a></p>{% endif %}
          {% if pub.url %}<p><a href="{{ pub.url }}">Publication link</a></p>{% endif %}
        </article>
      {% endfor %}
    </div>
  {% endfor %}
</section>

