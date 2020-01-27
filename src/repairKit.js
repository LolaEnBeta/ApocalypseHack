"use strict";

function RepairKit(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 45;
  this.x = x;
  this.y = 0;

  this.speed = 1;
  this.repair = 10;
}

RepairKit.prototype.draw = function() {
  this.ctx.fillStyle = "orange";
  var img = new Image();
  img.src = "./images/repairKit.png";
  this.ctx.drawImage(
    img,
    this.x,
    this.y,
    this.size,
    this.size,
  );
}

RepairKit.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
}

RepairKit.prototype.isInsideScreen = function() {
  return this.y + this.size + this.speed;
}
