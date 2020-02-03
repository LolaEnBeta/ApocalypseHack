"use strict";

class Person {
  constructor (canvas, x) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 25;
    this.x = x;
    this.y = 0;

    this.speed = 1;
    this.life = 1;
  }

  draw() {
    this.ctx.fillStyle = "pink";
    const img = new Image();
    img.src = "./images/person.png"
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
