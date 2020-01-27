"use strict";

function Bullet(canvas, x, y) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 25;
  this.x = null;
  this.y = null;

  this.speed = 5;
}

Bullet.prototype.draw = function() {
  this.ctx.fillStyle = "grey";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}
