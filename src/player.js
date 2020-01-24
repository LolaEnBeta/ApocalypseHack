"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.size = 80;
  this.direction = 0;
  this.x = canvas / 2;
  this.y = canvas + (this.size * 2);
}

Player.prototype.setDirection = function(direction) {
  if (direction === "left") {
    this.direction = -1;
  } else if (direction === "right") {
    this.direction = 1;
  }
}
