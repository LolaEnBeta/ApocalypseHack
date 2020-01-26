"use strict";

function buildDom(htmlStr) {
  var div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.children[0];
}

function main() {
  var game;
  var splashScreen;
  var gameScreen;
  var gameOverScreen;

  function createSplashScreen() {
    splashScreen = buildDom(
      `<main>
        <h1>APOCALYPSE-HACK</h1>
        <button>START</button>
      </main>`
    );

    document.body.appendChild(splashScreen);

    var startButton = document.querySelector("button");
    startButton.addEventListener("click", startGame);
  }

  function removeSplashScreen() {
    splashScreen.remove();
  }

  function createGameScreen() {
    gameScreen = buildDom(`
      <main class="game container">
        <header>
          <h1>APOCALYPSE-HACK</h1>
        </header>
        <div class="score">
          <span class="points">Score:</span>
          <span class="value"></span>
        <div>
        <div class="canvas-container">
          <canvas></canvas>
        </div>
      </main>
    `);

    document.body.appendChild(gameScreen);

    return gameScreen;
  }

  function removeGameScreen() {
    gameScreen.remove();
  }

  function startGame() {
    removeSplashScreen();

    game = new Game();

    game.gameScreen = createGameScreen();

    game.start();
  }

  function gameOver() {
    removeGameScreen();
  }

  createSplashScreen()
}


window.addEventListener("load", main);
