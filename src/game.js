"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.player = null;
  this.zombies = [];
  this.repairKits = [];
  this.obstacles = [];
  this.persons = [];
  this.guns = [];
  this.gameScreen = null;
  this.gameIsOver = false;
}

Game.prototype.start = function(gameOverCallback) {
  this.scoreInfo = this.gameScreen.querySelector(".score .value");
  this.damageInfo = document.querySelector(".damage .value");
  this.lifeInfo = document.querySelector(".life .value");
  this.gunInfo = document.querySelector(".gun .value");

  this.canvasContainer = document.querySelector(".canvas-container");
  // this.containerWidth = this.canvasContainer.offsetWidth;
  // this.containerHeight = this.canvasContainer.offsetHeight;

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
    } else if (event.key === " ") {
      if(this.player.hasGun === "Yes") {
        this.player.shot();
      }
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

  this.setIntervalGunsId = setInterval(() => {
    var gunsPositions = [210, 330, 465, 590];

    var randomGunX = gunsPositions[Math.floor(Math.random() * 5)];
    var newGun = new Gun(this.canvas, randomGunX);

    this.guns.push(newGun);
  }, 25000);

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

    this.guns = this.guns.filter(function(gun) {
      gun.updatePosition();
      return gun.isInsideScreen();
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

    this.guns.forEach(function(gun) {
      gun.draw();
    });

    //4. TERMINATE LOOP IF GAME IS OVER
    if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
      this.showInfo();
    }
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

  this.guns.forEach(function(gun) {
    if (this.player.didCollide(gun)) {
      gun.y = this.canvas.height + gun.size;
      this.player.obtainGun();
    }
  }, this);

  if (this.player.damage >= 100 || this.player.lifes === 0) {
    this.gameIsOver = true;
    clearInterval(this.setIntervalZombiesId);
    clearInterval(this.setIntervalRepairKitsId);
    clearInterval(this.setIntervalObstaclesId);
    clearInterval(this.setIntervalPersonsId);
    clearInterval(this.setIntervalGunsId);
    gameOverCallback();
  }
}

Game.prototype.showInfo = function() {
  this.scoreInfo.innerHTML = this.player.score;
  this.damageInfo.innerHTML = this.player.damage;
  this.lifeInfo.innerHTML = this.player.life;
  this.gunInfo.innerHTML = this.player.hasGun;
}
