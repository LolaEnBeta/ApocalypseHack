"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.size = 80;
  this.direction = 0;
  this.x = 0;
  this.y = 0;
}

Player.prototype.setDirection = function(direction) {
  if (direction === "left") {
    this.direction = -1;
  } else if (direction === "right") {
    this.direction = 1;
  }
}

Player.prototype.handleScreenCollision = function() {
  this.x = this.x + this.direction;

  var screenLeft = 0;
  var screenRight = this.canvas.width;

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
