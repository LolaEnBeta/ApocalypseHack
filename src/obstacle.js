"use strict";

class Obstacle {
  constructor (canvas, x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 65;
    this.x = x;
    this.y = 0;

    this.speed = 1;
    this.damage = 20;
    this.lifeToRemove = 1;
  }

  draw() {
    this.ctx.fillStyle = "black";
    const img = new Image();
    img.src = "./images/barricade.png";
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
