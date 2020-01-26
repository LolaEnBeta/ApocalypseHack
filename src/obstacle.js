"use strict";

function Obstacle(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 40;
  this.x = x;
  this.y = 0;

  this.speed = 1;
  this.removeLife = 1;
}

Obstacle.prototype.draw = function() {
  this.ctx.fillStyle = "black";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

Obstacle.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
}
