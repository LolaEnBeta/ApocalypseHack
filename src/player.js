"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 80;
  this.direction = 0;
  this.x = (this.canvas.width / 2) - (this.size / 2);
  this.y = this.canvas.height - this.size;

  this.score = 0;
}

Player.prototype.setDirection = function(direction) {
  if (direction === "left") {
    this.x += -50;
  } else if (direction === "right") {
    this.x += 50;
  }
}

Player.prototype.handleScreenCollision = function() {
  this.x = this.x + this.direction;

  var screenLeft = 0;
  var screenRight = this.canvas.width - this.size;

  if (this.x < screenLeft) {
    this.direction = 1;
  } else if (this.x > screenRight) {
    this.direction = -1;
  }
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

Player.prototype.didCollide = function(zombie) {
  var playerTop = this.y;
  var playerBottom = this.y + this.size;
  var playerLeft = this.x;
  var playerRight = this.x + this.size;

  var zombieTop = zombie.y;
  var zombieBottom = zombie.y + zombie.size;
  var zombieLeft = zombie.x;
  var zombieRight = zombie.x + zombie.size;

  var crossLeft = zombieLeft <= playerRight && zombieLeft >= playerLeft;
  var crossRight = zombieRight >= playerLeft && zombieRight <= playerRight;
  var crossBottom = zombieBottom >= playerTop && zombieBottom <= playerBottom;
  var crossTop = zombieTop <= playerBottom && zombieTop >= playerTop;

  if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
    return true;
  }
  return false;
}

Player.prototype.updateScore = function() {
  this.score++;
}
