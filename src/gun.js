"use strict";

function Gun(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 45;
  this.x = x;
  this.y = 0;

  this.speed = 1;
  this.shots = 5;
}

Gun.prototype.draw = function() {
  this.ctx.fillStyle = "purple";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

Gun.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
}
