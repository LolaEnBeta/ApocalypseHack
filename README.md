# APOCALYPSE-HACK

## Description
ApocalypseHack is a game where the player needs to survive to the zombie apocalypse. To do this, the player needs to drive over the zombies that are in the road to arrive at a safety place. To do this, the player needs to be careful with the obstacles that are in the road.
Every killed zombie makes your level up, but also the difficulty of the game driving faster. If the player collapse with an obstacle, will lose one life.
Good luck!!


## MVP (DOM - CANVAS)
CANVAS. This is a game where the player can move left to right and collapse with obstacles.

## Backlog
- Score
- Damage
- Lifes
- Speed
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
  this.repairKits;
  this.obstacles;
  this.persons;
  this.gameScreen;
  this.gameIsOver;
  this.score;
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
  this.height;
  this.width;
  this.size;
  this.x;
  this.y;
  this.score;
  this.damage;
  this.life;
  this.level;
}
move() {}
handleScreenCollision() {}
removeLife() {}
updateScore()
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
  this.damage;
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
  this.damage;
  this.lifeToRemove;
}
draw() {}
updatePosition() {}
isInsideScreen() {}
```

### repairKit.js
```
RepairKit() {
  this.canvas;
  this.ctx;
  this.size;
  this.x,
  this.y;
  this.speed;
  this.repair;
}
draw() {}
updatePosition() {}
isInsideScreen() {}
```

### person.js
```
Person() {
  this.canvas;
  this.ctx;
  this.size;
  this.x,
  this.y;
  this.speed;
  this.life;
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
- Main - createGameOverScreen()
- Main - removeGameOverScreen()
- Main - gameOver()
- Game - start()
- Game - startLoop()
- Game - checkCollisions()
- Game - showInfo()
- Game - increaseSpeedOfEveryObj()
- Game - increaseSpeed()
- Player - move()
- Player - handleScreenCollision()
- Player - draw()
- Player - didCollide()
- Player - updateScore()
- Player - receiveDamage()
- Player - repairDamage()
- Player - removeLife()
- Player - gainLife()
- Zombie - draw()
- Zombie - updatePosition()
- Zombie - isInsideScreen()
- Obstacle - draw()
- Obstacle - updatePosition()
- Obstacle - isInsideScreen()
- RepairKit - draw()
- RepairKit - updatePosition()
- RepairKit - isInsideScreen()
- Person - draw()
- Person - updatePosition()
- Person - isInsideScreen()


## Links


### Trello
[Link url](https://trello.com/b/IzahMZzw/apocalypsehack-game-ironhack)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/LolaEnBeta/ApocalypseHack)
[Link Deploy](https://lolaenbeta.github.io/ApocalypseHack/)


### Slides
URls for the project presentation
[Link Slides](https://docs.google.com/presentation/d/1ONg7F1cvmhzLUT2vLHgEVPgDQeDJrJJFw-MqfH5dQSA/edit#slide=id.p)
