---
layout: page
title: DISC WARS
description: <u><b>C++, Unreal Multiplayer, GAS</b></u><br/>Epic Online Services<br/>December 2025
img: assets/img/discwars/throwtitle.gif
importance: 2
category: Game Projects
---

DISC WARS is my final project for the Unreal Gameplay class I took in Fall 2025!

Modeled after the "games" scene of Disney's <i>Tron: Legacy</i>, you play as a program of the Grid.

Earn 5 points to win your freedom, or face permanent de-resolution.

<center><b>Playthrough video (with audio and such) coming soon!</b></center><br/>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/discwars/throw.gif" title="discwars" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Throwing</b><br/>
       </center>
        - Press and hold left mouse, flick your mouse, and release!<br/>
        - Makes the throwing feel much more immersive<br/>
        - Projectiles have dynamic velocity based on complete character rotation and time<br/>
        - Hard to aim, added challenge
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Dying</b><br/>
        </center>
        - One hit is enough to kill the player<br/>
        - The player is out of commision for 3 seconds, then they will respawn<br/>
        - Better be fast with your <b>Deflect Ability</b> as your enemy won't let you recover
    </div>
    <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/discwars/death.gif" title="discwars" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/discwars/deflect1.png" title="discwars" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Deflecting</b><br/>
        </center>
        - The player is able to use right mouse to deflect<br/>
        - The top right corner of the UI shows the recharge time<br/>
        - The video below shows a lengthed deflection time for testing/showcase purposes (normally 0.25 seconds)
    </div>
</div>
<div class="row">
    <div class="col-sm mt-1 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/discwars/bounce.gif" %}
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Breaking the Floor</b><br/>
       </center>
        - Players are able to break the floor (given their disc has enough speed)<br/>
        - Discs bounce up to twice then hone back to the thrower<br/>
        - A possible strategy is to try and break the 4 floor tiles your opponent stands on to spawn trap them<br/>
        - Be careful not to lose your discs to the void!
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/discwars/break.gif" title="discwars" %}
    </div>
</div>
<hr>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/discwars/exit.gif" title="discwars" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Game Over</b><br/>
        </center>
        - Once one player reaches 5 kills, the game is over<br/>
        - An initial message appears to notify the winner<br/>
        - A second message and timer counts down to send both players back to the main menu and close the session
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm mt-1 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/discwars/title.gif" %}
        <div class="caption"><b>Main Menu</b></div>
    </div>
</div>
<hr>
Mechanics / Setup:

- Fully networked game system with host and join options in the main menu
- Immersive throw mechanic
- Custom disc bounce
- Networked breakable floors to create a dynamic arena
- Deflect shield with RMB
- Graceful disconnect back to main menu on game end
- Custom game mode & game state
- Custom character, player controller, and player state classes
- Custom projectile, weapon, and UI classes

Polish / Juice:

- Networked colors for player models, disc model, and weapon-in-hand model
- Emissive strength fades on death
- Dynamic main menu
- VFX on projectile hit
- SFX for projectile movement and game announcements
- Default UI bullet indicator redesign for theming
