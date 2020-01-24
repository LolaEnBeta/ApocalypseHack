"use strict";

function buildDom(htmlStr) {
  var div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.children[0];
}

function main() {
  var game;
  var splashScreen;
  var gameOverScreen;

  function createSplashScreen() {
    splashScreen = buildDom(
      `<main>
        <h1>APOCALYSPE-HACK</h1>
        <button>START</button>
      </main>`
    );
  }

}
