"use strict";

const buildDom = (htmlStr) => {
  const div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.children[0];
}

const main = () => {
  let game;
  let splashScreen;
  let gameScreen;
  let gameOverScreen;

  const createSplashScreen = () => {
    const story = "Zombies! Yes, you are right! So prepare yourself. You need to arrive to this safety place everyone is talking about. And, why not? Try to make the world much better killing some zombies. Good luck!";
    const commands ="Use the left [<-] and right [->] arrows of your keyboard to move you.";

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

    const startButton = document.querySelector("button");
    startButton.addEventListener("click", startGame);
  }

  const removeSplashScreen = () => {
    splashScreen.remove();
  }

  const createGameScreen = () => {
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

  const removeGameScreen = () => {
    gameScreen.remove();
  }

  const createGameOverScreen = () => {
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

    const restartButton = gameOverScreen.querySelector("button");
    restartButton.addEventListener("click", startGame);
  }

  const removeGameOverScreen = () => {
    if (gameOverScreen !== undefined) {
      gameOverScreen.remove();
    }
  }

  const startGame = () => {
    removeSplashScreen();
    removeGameOverScreen();

    game = new Game();

    game.gameScreen = createGameScreen();

    game.start(() => gameOver());
  }

  const gameOver = () => {
    removeGameScreen();
    createGameOverScreen();
  }

  createSplashScreen()
}

window.addEventListener("load", main);
