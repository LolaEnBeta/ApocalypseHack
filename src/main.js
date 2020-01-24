"use strict";

function buildDom(htmlStr) {
  var div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.children[0];
}
