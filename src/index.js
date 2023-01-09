import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas();
  window.__JS_APP = app;
});

function addBananas(monkeys) {
  return monkeys.map(monkey => `${monkey} 🍌`);
}

function setEmojis(emojis) {
  const wrapper = document.querySelector('#emojis');
  wrapper.innerHTML = ''; // clear the content of the wrapper div

  for (const emoji of emojis) {
    const p = document.createElement('p');
    p.textContent = emoji;
    wrapper.appendChild(p);
  }
}

const monkeys = ['🐒', '🦍', '🦧'];
const fedMonkeys = addBananas(monkeys);
setEmojis(fedMonkeys);
