---
layout: page
title: photography
permalink: /photography/
description: my collection of both personal photos and class projects
nav: true
nav_order: 2
display_categories: [projects (art 150), funsies]
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
        {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" title="profile pic" class="img-fluid rounded z-depth-1" %}
        <div class="caption">caption</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">caption</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">caption</div>
    </div>
</div>
</div>
