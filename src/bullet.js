"use strict";

class Bullet {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 25;
    this.x = null;
    this.y = null;

    this.speed = 50;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.x,
      this.y,
      this.size,
      this.size,
    );
  }

  updatePosition() {
    this.y = this.y - this.speed;
  }

  isInsideScreen() {
    return this.y + this.size + this.speed;
  }
}
