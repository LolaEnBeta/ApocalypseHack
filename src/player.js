"use strict";

class Player {
  constructor (canvas) {
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
    this.level = 1;
  }

  move(direction) {
    if (direction === "left") {
      this.x += -125;
    } else if (direction === "right") {
      this.x += 125;
    }
  }

  handleScreenCollision() {
    const screenLeft = 200;
    const screenRight = 575;

    if (this.x < screenLeft) {
      this.x = 200;
    } else if (this.x > screenRight) {
      this.x = 575;
    }
  }

  draw() {
    this.ctx.fillStyle = "red";
    const img = new Image();
    img.src = "./images/car.png"
    this.ctx.drawImage(
      img,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }

  didCollide(obstacle) {
    const playerTop = this.y;
    const playerBottom = this.y + this.size;
    const playerLeft = this.x;
    const playerRight = this.x + this.size;

    const obstacleTop = obstacle.y;
    const obstacleBottom = obstacle.y + obstacle.size;
    const obstacleLeft = obstacle.x;
    const obstacleRight = obstacle.x + obstacle.size;

    const crossLeft = obstacleLeft <= playerRight && obstacleLeft >= playerLeft;
    const crossRight = obstacleRight >= playerLeft && obstacleRight <= playerRight;
    const crossBottom = obstacleBottom >= playerTop && obstacleBottom <= playerBottom;
    const crossTop = obstacleTop <= playerBottom && obstacleTop >= playerTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    }
    return false;
  }

  updateScore() {
    this.score++;
  }

  receiveDamage(recivedDamage) {
    this.damage += recivedDamage;
  }

  repairDamage(removeDamage) {
    if (this.damage >= 10) {
      this.damage -= removeDamage;
    }
  }

  removeLife(life) {
    this.life -= life;
  }

  gainLife(life) {
    if (this.life < 5) {
      this.life += life;
    }
  }
}
