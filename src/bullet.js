"use strict";

function Bullet(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 25;
  this.x = null;
  this.y = null;

  this.speed = 50;
}

Bullet.prototype.draw = function() {
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

Bullet.prototype.updatePosition = function() {
  this.y = this.y - this.speed;
}

Bullet.prototype.isInsideScreen = function() {
  return this.y + this.size + this.speed;
}
