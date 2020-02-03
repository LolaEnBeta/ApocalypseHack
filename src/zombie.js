"use strict";

class Zombie {
  constructor (canvas, x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 50;
    this.x = x;
    this.y = 0;

    this.speed = 1;
    this.damage = 10;
  }
}

Zombie.prototype.draw = function() {
  this.ctx.fillStyle = "green";
  var img = new Image();
  img.src = "./images/zombie.png";
  this.ctx.drawImage(
    img,
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
