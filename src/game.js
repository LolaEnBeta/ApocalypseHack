"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.player = null;
  this.zombies = [];
  this.gameScreen = null;
  this.gameIsOver = false;
  this.points = 0;
}

Game.prototype.start = function() {
  this.canvasContainer = document.querySelector("canvas-container");
  this.canvas = this.gameScreen.querySelector("canvas");
  this.ctx = this.canvas.getContent("2d");

  this.points = this.gameScreen.querySelector(".score .value");
}
