"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.player = null;
  this.zombies = [];
  this.gameScreen = null;
  this.gameIsOver = false;
  this.score = 0;
}

Game.prototype.start = function() {
  this.canvasContainer = document.querySelector("canvas-container");
  this.canvas = this.gameScreen.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.score = this.gameScreen.querySelector(".score .value");

  this.containerWidth = this.canvasContainer.offsetWidth;
  this.containerHeight = this.canvasContainer.offsetHeight;
  this.canvas.setAttribute("width", this.containerWidth);
  this.canvas.setAttribute("height", this.containerHeight);

  this.player = {};

  this.startLoop();
}

Game.prototype.startLoop = function() {
  var loop = function() {};
}
