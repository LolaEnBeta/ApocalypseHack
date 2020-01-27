"use strict";

function Person(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 55;
  this.x = x;
  this.y = 0;

  this.speed = 1;
  this.life = 1;
}

Person.prototype.draw = function() {
  this.ctx.fillStyle = "pink";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}
