---
layout: page
title: Masterworks
description: <u><b>Unity Engineer & Tech Artist</b></u><br/>Advanced Games Project<br/>May 2025 - May 2026
img: assets/img/moh/titleshort.gif
importance: 2
category: Game Projects
---

I currently work as a technical artist and engineer on <b>Masterworks of Horror</b>, one of the Advanced Game Projects sponsored by USC Games. I collaborate very closely with the engineering and art teams to create impactful visual effects to enhance the player's experience.

While I have no formal background in tech art or VFX, I'm very interested in designing shaders and learning more about the VFX pipeline, which led me here :)

Key Skills Learned:

- Self-taught Unity's ShaderGraph and VFXGraph systems
- Converting complex HLSL code to ShaderGraphs
- Designing highly customizable parallax and holographic shaders for our card display system
- Optimizing VFX for mobile viewing
- Kitbashing VFX to lighten the workload of our artists

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/parallax.gif" title="moh" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Parallax Effect</b><br/>
       </center>
        - Implemented a dynamic three-layer parallax effect<br/>
        - Used in both an unlit and lit shader depending on card rarity<br/>
        - Made sure every card will automatically adjust depending on layer count<br/>
        - Added easy customization between parallax strength, asset scale/offset, etc<br/>
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Parallax Effect - Development</b><br/>
       </center>
        - Started with a simple two layer effect<br/>
        - Worked to fix side runoff for a cleaner look<br/>
        - Experimented with a stencil mask for 3D objects (item cards)
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/parallaxdev.gif" title="moh" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/holo.gif" title="moh" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Holographic Effect</b><br/>
       </center>
        - Designed a simple lit holographic shader<br/>
        - Currently uses a basic voronoi pattern but easily can be customized<br/>
        - Implemented a simple mask to make any necessary text more readable<br/>
        - Dynamically changes colors depending on card's author
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Holo Effect - First Tries</b><br/>
       </center>
        - Started with learning different types of holographic effects<br/>
        - Used a simple wave pattern at first before discovering voronoi<br/>
        - Experimented with readability vs aesthetics<br/>
        - Tested out a masked spiral background
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/holodev.gif" title="moh" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/crosshatch.gif" title="moh" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Crosshatch Shader</b><br/>
       </center>
        - Recreated <a href="https://kylehalladay.com/blog/tutorial/2017/02/21/Pencil-Sketch-Effect.html">this</a> sketch effect from Kyle Halladay's hlsl shader as a customizable shadergraph<br/>
        - Added a 7th partition for a full white section to allow for more detail
        - Allows designers to pick colors & theming as they wish
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Burn Effect</b><br/>
       </center>
        - Kitbashed a simple dissolve shader into the default holographic/parallax shader<br/>
        - Added custom smoke and ember particles through VFXGraph<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/vfxburn.gif" title="moh" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/vfxchain.gif" title="moh" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Chain Effect</b><br/>
       </center>
        - Custom-generated circles of chains in different lengths and sizes as usable meshes<br/>
        - Designed custom glow shader that could easily be manipulated with VFXGraph<br/>
        - Added a fade-in effect to the shader's emission<br/>
        - Implemented particles and a simple animation to the meshes
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Bubbling Ink Effect</b><br/>
       </center>
        - Followed <a href="https://www.youtube.com/watch?v=RnG8zez9wZg">this</a> tutorial to create a generic bubble/ink effect<br/>
        - Kitbashed the various smoke and bubble particles used<br/>
        - Shortened and optimized the effect for mobile use
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/moh/vfxbubble.gif" title="moh" %}
    </div>
</div>
