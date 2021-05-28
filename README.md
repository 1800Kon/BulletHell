# BulletHell
## Introduction
Bullet hell is a genre of video games in which the user must dodge a large amount of bullets while simultaneously utilizing his own weapons to destroy his enemies. Overtime I’ve noticed that most of these games focus their difficulty levels on the amount of bullets on screen, so I decided to change that by adding some extra elements to it.

## Main mechanics and core ideas
* The player must guide a ship through space and destroy its enemies utilizing his laser gun.
* The laser gun is fired by clicking the left and right click mouse button in alternation.
* The ship must be refueled every so often otherwise he won't be able to move and will soon be destroyed by his enemies.
* Different enemies have different shooting patterns, ranging from straight shots to curved and multiple bullets at once.
* If a bullet collides with the player’s ship it will explode and the run is over counting as a loss.
* The player may beat the game by shooting down all of his enemies and beating the final boss, after which the game ends.

## Objective
The main objective of the game is to shoot down all of the enemy ships and defeat the final boss of the game without dying getting hit.

## Technology used
The game will make use of the HTML5 canvas to draw elements to the screen and utilize javascript for all the necessary logic. The p5.js framework will be used as it provides the possibility to implement an efficient collision detection system which is vital for the proper functionality of the game. Jquery will also be utilized for certain functions of the game and .

## Art
Free to use sprites and sound effects which are provided by kenney.nl will be utilized as they are high quality and would complement the main style of the game.

## Class diagram
![Class diagram](https://i.imgur.com/FkIOito.png)

## Test plan

| Test subject | Test situation | Expected result |
| --- | --- | --- |
| Player | Presses WASD | Player's ship moves in the direction which was inputed |
| Player | Presses WASD while out of fuel | Player's ship doesn't move |
| Player | Presses left click | Player's ship shoots once |
| Player | Presses left click after pressing left click once | Player's ship doesn't shoot |
| Player | Presses left click and right click alternatively | Player's ship shoots continuosly |
| Player (5 damage) | Shoots and bullet collides with a 10 hp enemy | Enemy has 5 hp left |
| Player (10 hp) | Enemy with 5 damage shoots and bullet collides with player | Player has 5 hp left |
| Player (5 damage) | Shoots 2 bullets and both bullets collide with a 10 hp enemy | Enemy has 0 hp left, the die() method executes on the enemy followed by the explode() method |
| Enemy (5 damage) | Shoots 2 bullets and both bullets collide with the 10 hp player | Player has 0 hp left, the die() method executes on the Player followed by the explode() method and the game ends|
| Player (50% fuel) | Tries to refuel | Refuel() is executed and the fuel amount increases |
| Player (100% fuel) | Tries to refuel | Refuel() is executed and the fuel amount stays at 100% |
| Bullet | Doesn't hit anything and goes outside the screen | Bullet checks it's position and executes de die() method once off screen |
| Bullet from Player (5 damage) | Collides with enemy | Deals 5 damage to the enemy |
| Player (10 hp) | Enemy deals 10 damage to Player | Player has 0 hp left and the game ends |
