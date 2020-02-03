"use strict";

class Gun {
  constructor (canvas, x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 45;
    this.width = 60;
    this.height = 45;
    this.x = x;
    this.y = 0;

    this.speed = 1;
    this.shots = 5;
  }
}

Gun.prototype.draw = function() {
  this.ctx.fillStyle = "purple";
  var img = new Image();
  img.src = "./images/gun.png";
  this.ctx.drawImage(
    img,
    this.x,
    this.y,
    this.width,
    this.height,
  );
}

Gun.prototype.updatePosition = function() {
  this.y = this.y + this.speed;
}

Gun.prototype.isInsideScreen = function() {
  return this.y + this.size + this.speed;
}
