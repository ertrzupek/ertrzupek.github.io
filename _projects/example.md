---
layout: page
title: example
description: with background image
img: assets/img/prof_pic.jpg
importance: 1
category: example
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" title="example image"%}
        <div class="caption">caption one</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">caption two</div>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/prof_pic.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">caption three</div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/prof_pic.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">caption four</div>
    </div>
</div>
