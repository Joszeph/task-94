import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

  addBananas() {
    this.emojis = this.emojis.map((emoji) => `${emoji} ${this.banana}`);
  }

  setEmojis(emojis) {
    this.emojis = emojis;
    this.addBananas();
    this.displayEmojis()
  }

  displayEmojis() {
    const wrapper = document.getElementById("emojis");
    wrapper.innerHTML = "";

    this.emojis.forEach((emoji)=>{
      const p = document.createElement("p");
      p.textContent = emoji;
      wrapper.appendChild(p);
    })
  }
}
