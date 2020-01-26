"use strict";

function RepairKit(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 40;
  this.x = x;
  this.y = 0;

  this.speed = 1;
  this.repair = 10;
}

RepairKit.prototype.draw = function() {
  this.ctx.fillStyle = "orange";
  this.ctx.fillRect(
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

RepairKit.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
}
