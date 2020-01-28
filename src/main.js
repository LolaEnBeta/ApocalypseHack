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
    var story = "Zombies! Yes, you are right! So prepare yourself. You need to arrive to this safety place everyone is talking about. And, why not? Try to make the world much better killing some zombies. Good luck!";
    var commands ="Use the left and right arrows of your keyboard to move you.";

    splashScreen = buildDom(
      `<main>
        <h1>APOCALYPSE-HACK</h1>
        <section class="content">
        <p><em> - WTF!!?? Why is this guy moving like this?? Oh.. Wait… It could not be possible!!</em></p>
        <p>${story}</p>
        <div>
          <img class="command" src="./images/arrL.png" alt="left command" />
          <img class="command" src="./images/arrR.png" alt="right command" />
          <p>${commands}</p>
        </div>
        <ul>
          <li>Move LEFT to RIGHT to move you</li>
          <li>Drive over the zombies to gain XP</li>
          <li>Don't crash with the barricades, it removes life and damage your car</li>
          <li>Use "repair kits" to fix your brocken car</li>
          <li>Pick up health people to gain life points</li>
        </ul>
        </section>
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
        <div>
        <div class="score">
          <span class="points">Score:</span>
          <span class="value"></span>
        <div>
        <div class="damage">
          <span>Damage:</span>
          <span class="value"></span>/100
        <div>
        <div class="life">
          <span>Lifes:</span>
          <span class="value"></span>
        <div>
        <div class="level">
          <span>Level: </span>
          <span class="value"></span>
        <div>
        <div class="gun">
          <span>You have a gun?</span>
          <span class="value"></span>
        <div>
        </div>
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

  function createGameOverScreen() {
    gameOverScreen = buildDom(`
      <main>
        <h1>Game over</h1>
        <div class="score">
          <span class="points">Score:</span>
          <span class="value"></span>
        <div>
        <div class="damage">
          <span>Damage:</span>
          <span class="value"></span>/100
        <div>
        <button>Restart</button>
      </main>
    `);

    document.body.appendChild(gameOverScreen);
  }

  function startGame() {
    removeSplashScreen();

    game = new Game();

    game.gameScreen = createGameScreen();

    game.start(() => gameOver());

  }

  function gameOver() {
    removeGameScreen();
    createGameOverScreen();
  }

  createSplashScreen()
}


window.addEventListener("load", main);
