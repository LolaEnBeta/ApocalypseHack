"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  this.height = 85;
  this.width = 60

  this.size = 75;
  this.x = 200 - (this.size / 2);
  this.y = this.canvas.height - this.size - 20;

  this.score = 0;
  this.damage = 0;
  this.life = 5;
  this.hasGun = "No";
  this.level = 1;
}

Player.prototype.move = function(direction) {
  if (direction === "left") {
    this.x += -125;
  } else if (direction === "right") {
    this.x += 125;
  }
}

Player.prototype.handleScreenCollision = function() {
  var screenLeft = 200;
  var screenRight = 575;

  if (this.x < screenLeft) {
    this.x = 200;
  } else if (this.x > screenRight) {
    this.x = 575;
  }
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = "red";
  var img = new Image();
  img.src = "./images/car.png"
  this.ctx.drawImage(
    img,
    this.x,
    this.y,
    this.width,
    this.height,
  );
}

Player.prototype.didCollide = function(zombie) {
  var playerTop = this.y;
  var playerBottom = this.y + this.size;
  var playerLeft = this.x;
  var playerRight = this.x + this.size;

  var zombieTop = zombie.y;
  var zombieBottom = zombie.y + zombie.size;
  var zombieLeft = zombie.x;
  var zombieRight = zombie.x + zombie.size;

  var crossLeft = zombieLeft <= playerRight && zombieLeft >= playerLeft;
  var crossRight = zombieRight >= playerLeft && zombieRight <= playerRight;
  var crossBottom = zombieBottom >= playerTop && zombieBottom <= playerBottom;
  var crossTop = zombieTop <= playerBottom && zombieTop >= playerTop;

  if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
    return true;
  }
  return false;
}

Player.prototype.updateScore = function() {
  this.score++;
}

Player.prototype.receiveDamage = function(recivedDamage) {
  this.damage += recivedDamage;
}

Player.prototype.repairDamage = function(removeDamage) {
  if (this.damage >= 10) {
    this.damage -= removeDamage;
  }
}

Player.prototype.removeLife = function(life) {
  this.life -= life;
}

Player.prototype.gainLife = function(life) {
  if (this.life < 5) {
    this.life += life;
  }
}

Player.prototype.obtainGun = function() {
  this.hasGun = "Yes";
}

Player.prototype.shot = function() {
  var bullet = new Bullet(this.canvas, this.x, this.y);
  bullet.updatePosition();
  bullet.draw();
}
