// GermEscape2 

/*

// GAME OBJECTIVES

Desription: This game is called "Germ Escape 2". It is a top down 2d game. The point of the game 
is to avoid the germs which are coming from off screen and flying towards you, while you are in 
a "car" trying to dodge them. It is a COVID becomes a videogame parody concept. 

This is the first game I am making on the Microsoft MakeCode Platform.

Approach: The approach to making this game I am taking is building the core dynamic, and then adding 
other assets: enhanced graphics, animations, cut scenes, music, etc. 

Core Game Dynamic: 

It is basically a watered down version of an "Asteroids" game
https://www.youtube.com/watch?v=WYSupJ5r2zo

With the following differences:

- You can shoot "Purell" at the germs, when they "die", they dissapear leaving behind a bottle of 
purell you can pick up for an "extra life"
- If you collect 10 "bottles of purell" then you beat the game 
- If you get "hit" by a germ then you "die" (not a pretty picture)

So here are a few of the tasks I will have to program to get the core mechanic this game to work:

__ Non-programming tasks __
- Develop a music theme (On piano and then carry it over into the 8 bit format)

Etc. 

__ Programming Tasks __ 
- Get the car able to float around on the screen (directed by individual arrow keys)
- Get a score working at the top lefthand side of the screen with "Purell icons" 

Etc. 

When the game starts show the splash screen 

*/ 


/* 

// Make the car appear 


*/ 

/*

// Code the car to move when the arrow keys are pressed

*/ 





// Challenges: see if you can get the car to move around on 
// the screen 

// Start game 
forever(function() {
    scene.setBackgroundColor(1)
    let carSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f f 9 9 9 f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . . f d d d f . . . . . . 
. . . . . f d d d f . . . . . . 
. . . . . f d d d f . . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f 9 9 9 f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player);


let x = 1;
let y = 1; 

/*
controller.player1.onButtonEvent(ControllerButton., ControllerButtonEvent.Pressed, function() {
   
}) */ 

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
     carSprite.setPosition(x + 1, y + 1)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    carSprite.setPosition(x + 1, y + 1)
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    carSprite.setPosition(x + 1, y + 1)
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function() {
    carSprite.setPosition(x + 1, y + 1)
})
})








