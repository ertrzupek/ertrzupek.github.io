---
layout: page
title: En's Tale
description: <u><b>Interactive prototype based on film</b></u><br/><span class="engineering">Engineering Intern</span> <span class="techart">Tech Artist</span><br/><span class="unreal">Unreal</span>, <span class="other">AnimGraph</span>, <span class="other">Blueprints</span><br/>June - August 2026
img: assets/img/kaga/title.gif
importance: 2
category: Professional Work
---

Over the course of 8 weeks, I lived in Kawasaki, Kanagawa and worked on two major projects for Kaga Studios in Tokyo, Japan.

<hr>

# Do So Shin Smash (Gameplay Prototype)

- Worked with the studio director to design and prototype a simple beat-em-up level featuring one character from the studio's upcoming animated film.
- Set up and used the Sony Mocopi 6-point mocap set to record animation data performed by a stunt actor, imported into Unreal for prototyping custom ultimate moves.
- Became incredibly familiar with many Unreal-specific features, including AnimationGraph, BehaviorTrees, and GeometryCollections
- Continuing to polish work in preparation for presentation at Tokyo Comic-Con (December 2026).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaga/testlevel.gif" title="test level" %}
        <div class="caption">Test Set Level</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaga/collision.gif" title="collision" %}
        <div class="caption">Playground Level - Collision</div>
    </div>
</div>
<div class="row">
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaga/mocapi.gif" title="mocapi" %}
        <div class="caption">Sony Mocapi Recording</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaga/hoard.gif" title="hoard" %}
        <div class="caption">Playground Level - Hoards</div>
    </div>
</div>
<hr>

# Animation Retargeting / Art Pipeline Development

- Worked with modelers, animators, and riggers to develop a smooth pipeline for characters to go from concept to playable in-engine.
- Debug Blender export / Unreal import issues (rotation problems, bone disfiguration, skeleton matching, etc)
- Implemented foot IK from Unreal's default solver and various YouTube videos
- Utilized Unreal’s Gameplay Animation Sample to retarget animations for the studio’s four major characters, as a demo for future company investments.

<div class="row">
    <center>
        {% include video.liquid path="assets/img/kaga/retargetdemo.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
        <div class="caption">Retargeting Demo</div>
    </center>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaga/raijin.gif" title="raijin" %}
        <div class="caption">Initial AnimGraph Test</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaga/footik.gif" title="foot ik" %}
        <div class="caption">Foot IK</div>
    </div>
</div>
