var Game = require('./game.js');

class GameView {
  constructor(ctx) {
    this.game = new Game;
    this.ctx = ctx;
    this.canvas = document.getElementById('game-canvas');
  }

  start() {
    this.bindInputs();
    this.interval = setInterval(this.loop.bind(this), 10);
  }

  bindInputs() {
    window.addEventListener('mousemove', this.game.movePointer.bind(this.game));
    this.canvas.addEventListener('click', this.handleClick.bind(this), false);
  }

  handleClick(event) {
    console.log('boom-boom');
    this.game.launch(event);
    this.canvas.removeEventListener('click', this.handleClick, false);
    setTimeout(this.canvas.addEventListener('click', this.handleClick.bind(this), false), 1000);
  }

  loop() {
    if (this.game.playing) {
      this.game.step();
      this.game.draw(this.ctx);
    } else {

// something about how we are handling the click handler is fucking things up.
// after a few shots, it seems like the event handlers are stacking up and never
// being removed, which causes a way real slowdown (until you refresh the page)
// need a clearer strategy for adding and removing the listeners

      clearInterval(this.interval);
      this.canvas.removeEventListener('click', this.handleClick, false);
      this.game = new Game;
      this.start();
    }
  }
}

module.exports = window.GameView = GameView;
// TODO: remove from window
