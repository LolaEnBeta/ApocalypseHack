"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.player = null;
  this.zombies = [];
  this.gameScreen = null;
  this.gameIsOver = false;
  this.score = 0;
}

Game.prototype.start = function() {
  this.score = this.gameScreen.querySelector(".score .value");

  this.canvasContainer = document.querySelector(".canvas-container");
  // this.containerWidth = this.canvasContainer.offsetWidth;
  // this.containerHeight = this.canvasContainer.offsetHeight;

  this.canvas = this.gameScreen.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.canvas.setAttribute("width", 500);
  this.canvas.setAttribute("height", 600);

  this.player = new Player(this.canvas);

  this.handleKeyDown = function(event) {
    if (event.key === "ArrowLeft") {
      this.player.setDirection("left");
    } else if (event.key === "ArrowRight") {
      this.player.setDirection("right");
    }
  }

  document.body.addEventListener(
    'keydown',
    this.handleKeyDown.bind(this)
  );

  this.startLoop();
}

Game.prototype.startLoop = function() {
  var loop = function() {
    //1. UPDATE THE STATE OF PLAYER
    if (Math.random() > 0.98) {
      var randomX = this.canvas.width * Math.random();
      var newZombie = new Zombie(this.canvas, randomX);
      this.zombies.push(newZombie);
    }

    this.checkCollisions();

    this.player.handleScreenCollision();

    this.zombies = this.zombies.filter(function(zombie) {
      zombie.updatePosition();
      return zombie.isInsideScreen();
    })

    //2. CLEAR CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //3. UPDATE THE CANVAS
    this.player.draw();

    this.zombies.forEach(function(zombie) {
      zombie.draw();
    })

    //4. TERMINATE LOOP IF GAME IS OVER
    if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
    }
  }.bind(this);

  window.requestAnimationFrame(loop);
}

Game.prototype.checkCollisions = function() {
  this.zombies.forEach(function(zombie) {
    if (this.player.didCollide(zombie)) {
      zombie.y = this.canvas.height + zombie.size;
      this.player.updateScore();
    }
  }, this);
}
