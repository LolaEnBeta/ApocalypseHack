"use strict";

function Zombie(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.size = 40;
  this.x = x;
  this.y = 0;
  this.speed = 1;
}

Zombie.prototype.draw = function() {
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

Zombie.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
}

Zombie.prototype.isInsideScreen = function() {
  return this.y + this.size + this.speed;
}
