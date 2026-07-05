---
layout: default
lang: ko
title: Publications
permalink: /ko/publications/
alternate_url: /publications/
---

<section class="page wrap">
  <h2>Publications</h2>
  <p>논문 목록은 유형별로 정리되어 있습니다. Google Scholar와 ORCID 링크는 <code>_data/site.yml</code>에서 추가할 수 있습니다.</p>
  <p class="publication-note"><sup>*</sup> 교신저자</p>
  {% assign types = "journal:학술지 논문,conference:학술대회 논문,report:특허 / 보고서" | split: "," %}
  {% for type in types %}
    {% assign parts = type | split: ":" %}
    <div class="section">
      <h3>{{ parts[1] }}</h3>
      {% assign pubs = site.data.publications | where: "type", parts[0] %}
      {% for pub in pubs %}
        <article class="publication">
          <p>
            <strong class="publication-authors">
              {% for author in pub.authors %}
                {{ author.name }}{% if author.corresponding %}<sup>*</sup>{% endif %}{% unless forloop.last %}, {% endunless %}
              {% endfor %}
            </strong>
            ({{ pub.year }}). {{ pub.title }}. <em>{{ pub.venue }}</em>{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}.
          </p>
          {% if pub.doi %}<p><a href="https://doi.org/{{ pub.doi }}">DOI: {{ pub.doi }}</a></p>{% endif %}
          {% if pub.url %}<p><a href="{{ pub.url }}">Publication link</a></p>{% endif %}
        </article>
      {% endfor %}
    </div>
  {% endfor %}
  <p class="publication-note"><sup>*</sup> 교신저자</p>
</section>
