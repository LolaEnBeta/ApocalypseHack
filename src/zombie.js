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

  draw() {
    this.ctx.fillStyle = "green";
    const img = new Image();
    img.src = "./images/zombie.png";
    this.ctx.drawImage(
      img,
      this.x,
      this.y,
      this.size,
      this.size,
    );
  }

  updatePosition() {
    this.y = this.y + this.speed;
  }

  isInsideScreen() {
    return this.y + this.size + this.speed;
  }
}
