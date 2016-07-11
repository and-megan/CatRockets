class GameView {
  constructor(game, ctx) {
    this.game = game;
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
    this.game.step();
    this.game.draw(this.ctx);
  }
}

module.exports = window.GameView = GameView;
// TODO: remove from window
