"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.player = null;
  this.zombies = [];
  this.repairKits = [];
  this.obstacles = [];
  this.persons = [];
  this.gameScreen = null;
  this.gameIsOver = false;
  this.score = 0;
}

Game.prototype.start = function(gameOverCallback) {
  this.scoreInfo = this.gameScreen.querySelector(".game-score .value");
  this.damageInfo = document.querySelector(".damage .value");
  this.lifeInfo = document.querySelector(".life .value");
  this.levelInfo = document.querySelector(".level .value");

  this.canvasContainer = document.querySelector(".canvas-container");

  this.canvas = this.gameScreen.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.canvas.setAttribute("width", 840);
  this.canvas.setAttribute("height", 600);

  this.player = new Player(this.canvas);

  this.handleKeyDown = function(event) {
    if (event.key === "ArrowLeft") {
      this.player.move("left");
    } else if (event.key === "ArrowRight") {
      this.player.move("right");
    }
  }

  document.body.addEventListener(
    'keydown',
    this.handleKeyDown.bind(this)
  );

  this.startLoop(gameOverCallback);
}

Game.prototype.startLoop = function(gameOverCallback) {
  this.setIntervalZombiesId = setInterval(() => {
    var zombiesPositions = [210, 330, 465, 590];

    var randomX = zombiesPositions[Math.floor(Math.random() * 5)];
    var newZombie = new Zombie(this.canvas, randomX);

    this.zombies.push(newZombie);
  }, 1500);

  this.setIntervalRepairKitsId = setInterval(() => {
    var repairKitsPositions = [210, 330, 465, 590];

    var randomRepairKitX = repairKitsPositions[Math.floor(Math.random() * 5)];
    var newRepairKit = new RepairKit(this.canvas, randomRepairKitX);

    this.repairKits.push(newRepairKit);
  }, 2500);

  this.setIntervalObstaclesId = setInterval(() => {
    var obstaclesPositions = [200, 320, 455, 580];

    var randomObstacleX = obstaclesPositions[Math.floor(Math.random() * 5)];
    var newObstacle = new Obstacle(this.canvas, randomObstacleX);

    this.obstacles.push(newObstacle);
  }, 2500);

  this.setIntervalPersonsId = setInterval(() => {
    var personsPositions = [210, 330, 465, 590];

    var randomPersonX = personsPositions[Math.floor(Math.random() * 5)];
    var newPerson = new Person(this.canvas, randomPersonX);

    this.persons.push(newPerson);
  }, 50000);

  var loop = function() {
    //1. UPDATE THE STATE OF PLAYER
    this.checkCollisions(gameOverCallback);

    this.player.handleScreenCollision();

    this.zombies = this.zombies.filter(function(zombie) {
      zombie.updatePosition();
      return zombie.isInsideScreen();
    });

    this.repairKits = this.repairKits.filter(function(repairKit) {
      repairKit.updatePosition();
      return repairKit.isInsideScreen();
    });

    this.obstacles = this.obstacles.filter(function(obstacle) {
      obstacle.updatePosition();
      return obstacle.isInsideScreen();
    });

    this.persons = this.persons.filter(function(person) {
      person.updatePosition();
      return person.isInsideScreen();
    });

    //2. CLEAR CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //3. UPDATE THE CANVAS
    this.player.draw();

    this.zombies.forEach(function(zombie) {
      zombie.draw();
    });

    this.repairKits.forEach(function(repairKit) {
      repairKit.draw();
    });

    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });

    this.persons.forEach(function(person) {
      person.draw();
    });

    //4. TERMINATE LOOP IF GAME IS OVER
    if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
    }

    //Update the Game data/stats
    this.showInfo();
  }.bind(this);

  window.requestAnimationFrame(loop);
}

Game.prototype.checkCollisions = function(gameOverCallback) {
  this.zombies.forEach(function(zombie) {
    if (this.player.didCollide(zombie)) {
      zombie.y = this.canvas.height + zombie.size;
      this.player.updateScore();
      this.player.receiveDamage(zombie.damage);
    }
  }, this);

  this.repairKits.forEach(function(repairKit) {
    if (this.player.didCollide(repairKit)) {
      repairKit.y = this.canvas.height + repairKit.size;
      this.player.repairDamage(repairKit.repair);
    }
  }, this);

  this.obstacles.forEach(function(obstacle) {
    if (this.player.didCollide(obstacle)) {
      obstacle.y = this.canvas.height + obstacle.size;
      this.player.receiveDamage(obstacle.damage);
      this.player.removeLife(obstacle.lifeToRemove);
    }
  }, this);

  this.persons.forEach(function(person) {
    if (this.player.didCollide(person)) {
      person.y = this.canvas.height + person.size;
      this.player.gainLife(person.life);
    }
  }, this);

  if (this.player.damage >= 100 || this.player.lifes === 0) {
    this.score = this.player.score;
    this.gameIsOver = true;
    clearInterval(this.setIntervalZombiesId);
    clearInterval(this.setIntervalRepairKitsId);
    clearInterval(this.setIntervalObstaclesId);
    clearInterval(this.setIntervalPersonsId);
    gameOverCallback();
  }

  this.increaseSpeed();
}

Game.prototype.showInfo = function() {
  this.scoreInfo.innerHTML = this.player.score;
  this.damageInfo.innerHTML = this.player.damage;
  this.lifeInfo.innerHTML = this.player.life;
  this.levelInfo.innerHTML = this.player.level;
}

Game.prototype.increaseSpeedOfEveryObj = function(newSpeed) {
  this.zombies.forEach((zombie) => {
    zombie.speed = newSpeed;
  });
  this.obstacles.forEach((obstacle) => {
    obstacle.speed = newSpeed;
  });
  this.persons.forEach((person) => {
    person.speed = newSpeed;
  });
  this.repairKits.forEach((repairKit) => {
    repairKit.speed = newSpeed;
  });
}

Game.prototype.increaseSpeed = function() {
  if (this.player.score >= 5 && this.player.score < 10) {
    this.increaseSpeedOfEveryObj(2.5);
    this.player.level = 2;
  } else if (this.player.score >= 10 && this.player.score < 15) {
    this.increaseSpeedOfEveryObj(5);
    this.player.level = 3;
  } else if (this.player.score >= 15 && this.player.score < 20) {
    this.increaseSpeedOfEveryObj(7.5);
    this.player.level = 4;
  } else if (this.player.score >= 20 && this.player.score < 25) {
    this.increaseSpeedOfEveryObj(10);
    this.player.level = 5;
  } else if (this.player.score >= 25 && this.player.score < 30) {
    this.increaseSpeedOfEveryObj(12.5);
    this.player.level = 6;
  } else if (this.player.score >= 30 && this.player.score < 35) {
    this.increaseSpeedOfEveryObj(15);
    this.player.level = 7;
  } else if (this.player.score >= 35 && this.player.score < 40) {
    this.increaseSpeedOfEveryObj(17.5);
    this.player.level = 8;
  } else if (this.player.score >= 40) {
    this.increaseSpeedOfEveryObj(20);
    this.player.level = 9;
  }
}
