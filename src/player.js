"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.size = 80;
  this.x = canvas / 2;
  this.y = canvas + (this.size * 2);
}
