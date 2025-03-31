---
layout: page
title: Game Engines
description: <u><b>c++, hlsl, directx</b></u><br/>building a game engine from scratch<br/>itp 485 (in progress)
img: assets/img/itp485/animation.gif
importance: 1
category: class projects
---

key skills learned:
- advanced graphics debugging though Visual Studio
- applying high-level vector math
- writing complex shaders
- multithreading work to improve performance
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>bloom (post processing)</b><br/>
            - to do...<br/>
       </center>
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>normal maps</b><br/>
            - to do...<br/>
       </center>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>jobs</b><br/>
            - <br/>
            - <br/>
            - <br/>
       </center>
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/collision.gif" title="part 7 gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>collision</b><br/>
            - <br/>
            - <br/>
            - <br/>
       </center>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>animation</b><br/>
            - <br/>
            - <br/>
            - <br/>
       </center>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/animation.gif" title="part 6 gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/models.png" title="part 5 img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>models</b><br/>
            - <br/>
            - <br/>
            - <br/>
       </center>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>lighting</b><br/>
            - <br/>
            - <br/>
            - <br/>
       </center>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/lighting.gif" title="part 4 gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/texture.gif" title="part 3 gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
       <center>
            <b>texture</b><br/>
            - <br/>
            - <br/>
            - <br/>
       </center>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>cube</b><br/>
            - <br/>
            - <br/>
            - <br/>
        </center>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/cube.gif" title="part 2 gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/triangle.png" title="part 1 img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>triangle</b><br/>
            - created a vertex buffer to take in the vertices of the triangle<br/>
            - implemented a simple shader to render the triangle on screen<br/>
            - created helper classes (VertexBuffer, RenderObj) to encapsulate rendering of simple objects<br/>
       </center>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>lambert / rim / half lambert shaders</b><br/>
            - implemented a lambert shader, the diffuse part of phong lighting<br/>
            - modified lambert to follow half-life's model, half-lambert<br/>
            - let the light wrap around the object, only hit black at 180&deg;<br/>
            - finally, added a rim shader to the half-lambert<br/>
       </center>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/itp485/shader1.png" title="extra 1 img" %}
    </div>
</div>