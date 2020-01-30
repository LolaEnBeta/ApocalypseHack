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
    var commands ="Use the left [<-] and right [->] arrows of your keyboard to move you.";

    splashScreen = buildDom(
      `<main >
        <div class ="principal-main">
          <h1 class="principal-title">APOCALYPSE - HACK</h1>
          <section class="content">
          <p class="comment"><em> - WTF!!?? Why is this guy moving like this?? Oh.. Wait… It could not be possible!!</em></p>
          <p>${story}</p>
          <p>${commands}</p>
          <ul>
          <li>Drive over the zombies to gain XP</li>
          <li>Don't crash with the barricades, it removes life and damage your car</li>
          <li>Use "repair kits" to fix your brocken car</li>
          <li>Pick up health people to gain life points</li>
          </ul>
          </section>
          <button class="start">START</button>
        </div>
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
      <main >
        <div class="game-container">
          <div class="game-score">
            Score: <span class="value"></span>
          </div>
          <div class="damage">
            Damage: <span class="value"></span>/100
          </div>
          <div class="life">
            Lifes: <span class="value"></span>
          </div>
          <div class="level">
            Level: <span class="value"></span>
          </div>
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
      <main class="over-main">
        <h1 class="over-title">You are DEAD!</h1>
        <div class="score">
        Your final is score: <span class="value">${game.score}</span> XP.
        <div>
        <button class="restart">Restart</button>
      </main>
    `);

    document.body.appendChild(gameOverScreen);

    var restartButton = gameOverScreen.querySelector("button");
    restartButton.addEventListener("click", startGame);
  }

  function removeGameOverScreen() {
    if (gameOverScreen !== undefined) {
      gameOverScreen.remove();
    }
  }

  function startGame() {
    removeSplashScreen();
    removeGameOverScreen();

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
