---
layout: page
title: Engine Design
description: <u><b>C++, HLSL, DirectX</b></u><br/>Building a game engine from scratch<br/>January - May 2025
img: assets/img/engines/animation.gif
importance: 1
category: Game Projects
---

Key Skills Learned:

- Advanced graphics debugging though Visual Studio
- Writing complex HLSL shaders
- Profiling multithreaded jobs to analyze & improve performance
- Designing rigorous unit tests
- Applying high-level vector math
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/ik.gif" title="ik gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Basic Inverse Kinematics</b><br/>
       </center>
        - Implemented one iteration of FABRIK (unconstrained)<br/>
        - Added a debug line to verify the position calculations before adding rotations<br/>
        - Utilized debug axes to visualize joint positions/rotations<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Post Processing (Bloom)</b><br/>
        </center>
        - Created an off screen <b>render target</b> to save the scene as a texture<br/>
        - Made a <b>bloom shader</b> to isolate the bright parts of the image<br/>
        - Added down-sampled targets, half and quarter, to apply a <b>two-pass gaussian blur</b> with linear sampling<br/>
        - Implemented two different <b>blend states</b> (opaque and additive) to add the bloom filter onto the original rendering<br/>
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
            <b>Normal Maps</b><br/>
       </center>
        - Added a new <b>texture slot</b> for the normal map in the graphics class and added that texture to the HLSL constants<br/>
        - Created a new input layout to be able to take in the <b>tangent</b> variable<br/>
        - Implemented the normal map shader<br/>
        - Created a simple <b>rotation</b> component that can be added to any object to verify the normal map works properly<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Jobs</b><br/>
        </center>
        - Added a <b>profiler</b> and <b>timer</b> to track how long different functions take to run<br/>
        - Wrote this data to both a <b>txt</b> and <b>json</b> file to save the timing of the various functions being tracked<br/>
        - Implemented a job manager and <b>multithreaded</b> workers to handle various jobs<br/>
        - Learned to use <b>Chrome Tracing</b> to visualize that data &darr;<br/>
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
            <b>Collision</b><br/>
       </center>
        - Implemented a Physics class, with AABBs and LineSegments<br/>
        - Designed a <b>unit test system</b> for the AABB-AABB and AABB-LineSegment intersection<br/>
        - Added a collision component to the player character so that it can stand on platforms and fall if not on the ground<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Toon Shading</b><br/>
        </center>
        - Implemented a <b>toon shader</b> in HLSL with a four color threshold, based on a single colored directional light
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
            <b>Lambert / Rim / Half Lambert Shaders</b><br/>
        </center>
        - Implemented a Lambert shader, only the diffuse part of <b>phong lighting</b> (Left)<br/>
        - Modified the Lambert shader to follow Half-Life's shading model, Half-Lambert - let the light wrap around the object, only hit black at 180&deg; (Right)<br/>
        - Added a <b>rim shader</b> to the Half-Lambert (Center)<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Animation</b><br/>
        </center>
        - Implemented Skeleton and BoneTransform classes to handle information about bones/relations their parent through transform matrices<br/>
        - Created an Animation class to dictate how those bones will move over the course of an animation<br/>
        - Added a <b>skinned shader</b> to handle the the matrix vector and all the bones of the model<br/>
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
            <b>Models</b><br/>
        </center>
        - Created an asset manager to cache various important assets for reuse.<br/>
        - Implemented <b>json level loading</b> for scene objects<br/>
        - Added <b>components</b> to scene objects to allow for different behavior, demonstrated with a point light component<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Lighting</b><br/>
        </center>
        - Added a Material class to keep track of different properties of objects such as specular power, etc.<br/>
        - Implemented the lighting system to keep track of point lights in the scene<br/>
        - Created a <b>phong shader</b> to consider point light colors, material constants, and color/texture of the cube<br/>
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
            <b>Texture</b><br/>
        </center>
        - Implemented a <b>z-buffer</b> so that shapes could be drawn with depth and inside one another<br/>
        - Loaded a texture and created a new mesh to handle its <b>uv coordinates</b><br/>
        - Added that texture information to the cube shader<br/>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Cube</b><br/>
        </center>
        - Added a matrix to move objects around, and a Camera class to fix warping<br/>
        - Implemented the vertex and index arrays for the cube, taking into account proper draw order<br/>
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
            <b>Triangle</b><br/>
        </center>
        - Created a vertex buffer to take in the vertices of the triangle<br/>
        - Implemented a simple shader to render the triangle on screen<br/>
        - Created helper classes (VertexBuffer, RenderObj) to encapsulate rendering of simple objects<br/>
    </div>
</div>
