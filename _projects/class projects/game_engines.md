---
layout: page
title: Engine Design
description: <u><b>c++, hlsl, directx</b></u><br/>building a game engine from scratch<br/>
img: assets/img/engines/animation.gif
importance: 1
category: game projects
---

key skills learned:

- advanced graphics debugging though Visual Studio
- writing complex hlsl shaders
- profiling multithreaded jobs to analyze performance
- designing rigorous unit tests
- applying high-level vector math
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>post processing (bloom)</b><br/>
        </center>
        - created an off screen <b>render target</b> to save the scene as a texture<br/>
        - made a <b>bloom shader</b> to isolate the bright parts of the image<br/>
        - added down-sampled targets, half and quarter, to apply a <b>two-pass gaussian blur</b> with linear sampling<br/>
        - implemented two different <b>blend states</b> (opaque and additive) to add the bloom filter onto the original rendering<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/bloom.gif" title="bloom gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/normals.gif" title="normal maps gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>normal maps</b><br/>
       </center>
        - added a new <b>texture slot</b> for the normal map in the graphics class and added that texture to the hlsl constants<br/>
        - created a new input layout to be able to take in the <b>tangent</b> variable<br/>
        - implemented the normal map shader<br/>
        - created a simple <b>rotation</b> component that can be added to any object to verify the normal map works properly<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>jobs</b><br/>
        </center>
        - added a <b>profiler</b> and <b>timer</b> to track how long different functions take to run<br/>
        - wrote this data to both a <b>txt</b> and <b>json</b> file to save the timing of the various functions being tracked<br/>
        - implemented a job manager and <b>multithreaded</b> workers to handle various jobs<br/>
        - learned to use <b>chrome tracing</b> to visualize that data &darr;<br/>
        {% include figure.liquid loading="eager" path="assets/img/engines/jobs.png" title="jobs png" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/engines/jobs.gif" title="jobs gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/collision.gif" title="collision gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>collision</b><br/>
       </center>
        - implemented a Physics class, with AABBs and LineSegments<br/>
        - designed a <b>unit test system</b> for the AABB-AABB and AABB-LineSegment intersection<br/>
        - added a collision component to the player character so that it can stand on platforms and fall if not on the ground<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>toon shading</b><br/>
        </center>
        - implemented a <b>toon shader</b> with a four color threshold, based on a single colored directional light
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/toon.gif" title="toon gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/lambert.png" title="lambert shader img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>lambert / rim / half lambert shaders</b><br/>
        </center>
       - implemented a lambert shader, only the diffuse part of phong lighting<br/>
        - modified lambert to follow half-life's shading model, half-lambert (let the light wrap around the object, only hit black at 180&deg;)<br/>
        - finally, added a rim shader to the half-lambert<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>animation</b><br/>
        </center>
        - implemented skeleton and bonetransform classes to handle information about bones/relations their parent through transform matrices<br/>
        - created an animation class to dictate how those bones will move over the course of an animation<br/>
        - added a <b>skinned shader</b> to handle the the matrix vector and all the bones of the model<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/animation.gif" title="animation gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/models.png" title="models img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>models</b><br/>
        </center>
        - created an asset manager to cache various important assets for reuse.<br/>
        - implemented <b>json level loading</b> for scene objects<br/>
        - added <b>components</b> to scene objects to allow for different behavior, demonstrated with a point light component<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>lighting</b><br/>
        </center>
        - added a material class to keep track of different properties of objects such as specular power, etc.<br/>
        - implemented the lighting system to keep track of point lights in the scene<br/>
        - created a <b>phong shader</b> to consider point light colors, material constants, and color/texture of the cube<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/lighting.gif" title="lighting gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/texture.gif" title="texture gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>texture</b><br/>
        </center>
        - implemented a <b>z-buffer</b> so that shapes could be drawn with depth and inside one another<br/>
        - loaded a texture and created a new mesh to handle its <b>uv coordinates</b><br/>
        - added that texture information to the cube shader<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>cube</b><br/>
        </center>
        - added a matrix to move objects around, and a camera class to fix warping<br/>
        - added the vertex and index arrays for the cube, taking into account proper draw order<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/cube.gif" title="cube gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/triangle.png" title="triangle img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>triangle</b><br/>
        </center>
        - created a vertex buffer to take in the vertices of the triangle<br/>
        - implemented a simple shader to render the triangle on screen<br/>
        - created helper classes (VertexBuffer, RenderObj) to encapsulate rendering of simple objects<br/>
    </div>
</div>
