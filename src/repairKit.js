"use strict";

class RepairKit {
  constructor(canvas, x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 45;
    this.x = x;
    this.y = 0;

    this.speed = 1;
    this.repair = 10;
  }

  draw() {
    this.ctx.fillStyle = "orange";
    const img = new Image();
    img.src = "./images/repairKit.png";
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
