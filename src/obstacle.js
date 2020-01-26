"use strict";

function Obstacle(canvas, x) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.size = 40;
  this.x = x;
  this.y = 0;

  this.speed = 1;
  this.removeLife = 1;
}
