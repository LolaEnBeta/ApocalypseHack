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

  draw() {
    this.ctx.fillStyle = "purple";
    const img = new Image();
    img.src = "./images/gun.png";
    this.ctx.drawImage(
      img,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }

  updatePosition() {
    this.y = this.y + this.speed;
  }

  isInsideScreen() {
    return this.y + this.size + this.speed;
  }
}
