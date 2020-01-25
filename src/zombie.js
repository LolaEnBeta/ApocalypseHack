"use strict";

function Zombie(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.size = 40;
  this.x = x;
  this.y = this.canvas.height - this.size;
  this.speed = 5;
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
