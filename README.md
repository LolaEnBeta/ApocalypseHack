# APOCALYPSE-HACK

## Description
ApocalypseHack is a game where the player needs to survive to the zombie apocalypse. To do this, she/he needs to drive over the zombies that are in the road to arrive at a safety place. To do this, she/he needs to be careful with the obstacles that are in the road.
Every killed zombie makes your level up, but also the difficulty of the game driving faster. If the player collapse with an obstacle, she/he will lose one life.
Good luck!!


## MVP (DOM - CANVAS)
CANVAS. This is a game where the player can move left to right and collapse with obstacles.

## Backlog
- Score
- Lifes
- Time counter
- Level

## Data structure

### main.js
```
createSplashScreen() {}
removeSlashScreen() {}
createGameScreen() {}
removeGameScreen() {}
createGameOverScreen() {}
removeGameOverScreen() {}
startGame() {}
gameOver() {}
```

### game.js
```
Game() {
  this.canvas;
  this.ctx;
  this player;
  this.zombies;
  this.gameScreen;
  this.gameIsOver;
  this.points;
}
start() {}
startLoop() {}
checkCollisions() {}
updateGameStats() {}
passGameOverCallback() {}
gameOver() {}
```

### player.js
```
Player() {
  this.canvas;
  this.ctx;
  this.lives;
  this.size;
  this.x;
  this.y;
}
setDirection() {}
handleScreenCollision() {}
removeLife() {}
updatePoints()
draw() {}
```

### zombie.js
```
Zombie() {
  this.canvas;
  this.ctx;
  this.size;
  this.x,
  this.y;
  this.speed;
}
draw() {}
updatePosition() {}
isInsideScreen() {}
```

### obstacle.js
```
Obstacle() {
  this.canvas;
  this.ctx;
  this.size;
  this.x,
  this.y;
  this.speed;
}
draw() {}
updatePosition() {}
isInsideScreen() {}
```

## States y States Transitions
```
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 
```

## Task
- Main - buildDom()
- Main - createSplashScreen()
- Main - removeSplashScreen()
- Main - createGameScreen()
- Main - removeGameScreen()
- Main - startGame()
- Game - start()
- Player - draw()
- Zombie - draw()
- Player - setDirection()
- Zombie - updatePosition()
- Player - handleScreenCollision()
- Zombie - isInsideScreen()
- Player - gainPoints()


## Links


### Trello
[Link url](https://trello.com/b/IzahMZzw/apocalypsehack-game-ironhack)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/LolaEnBeta/ApocalypseHack)
[Link Deploy]


### Slides
URls for the project presentation (slides)
[Link Slides.com]