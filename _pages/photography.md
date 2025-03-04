---
layout: page
title: photography
permalink: /photography/
description: my collection of professional work, class projects, and personal photos
nav: true
nav_order: 2
display_categories: [professional work, class projects, just for funsies]
horizontal: false
---

<!-- pages/photography.md -->
<div class="projects">
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.photography | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/strobe-practice.jpg" title="strobe-practice" %}
        <div class="caption">strobe practice</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moon-1.jpg" title="moon 1" %}
        <div class="caption">lunar electrics</div>
        {% include figure.liquid loading="eager" path="assets/img/emergency.jpg" title="emergency" %}
        <div class="caption">emergency</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/police.jpg" title="lighting" %}
        <div class="caption">nypd</div>
        {% include figure.liquid loading="eager" path="assets/img/moon-2.jpg" title="moon 2" %}
        <div class="caption">the moon</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rainbow.jpg" title="rainbow" %}
        <div class="caption">perfectly placed rainbow</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/usc-1.jpg" title="usc globe" %}
        <div class="caption">usc globe</div>
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hollywood.jpg" title="hollywood" %}
        <div class="caption">the art of living & the hollywood sign</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/track-1.jpg" title="track 1" %}
        <div class="caption">sunoco in rain</div>
        {% include figure.liquid loading="eager" path="assets/img/track-2.jpg" title="track 2" %}
        <div class="caption">close race</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/track-3.jpg" title="track 3" %}
        <div class="caption">at the track</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dance-1.jpg" title="dance-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dance-2.jpg" title="dance-2" %}
        <div class="caption">Vienna (for AD)</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dance-3.jpg" title="dance-3" %}
    </div>
  </div>
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/coast.jpg" title="coast" %}
        <div class="caption">the coast</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lombard.jpg" title="lombard" %}
        <div class="caption">lombard</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bwla-1.jpg" title="bwla-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bwla-2.jpg" title="bwla-2" %}
        <div class="caption">LA on film</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bwla-3.jpg" title="bwla-3" %}
    </div>
  </div>
</div>
