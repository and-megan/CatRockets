class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    this.bindInputs();
    this.interval = setInterval(this.loop.bind(this), 10);
  }

  bindInputs() {
    window.addEventListener('click', this.game.launch);
    window.addEventListener('mousemove', this.game.movePointer);
    canvas.addEventListener('click', this.gameView.handleClick, false);
  }

  handleClick(e) {
    this.game.launch(e);
    canvas.removeEventListener('click', this.gameView.handleClick, false);
    setTimeout(canvas.addEventListener('click', this.gameView.handleClick.bind(this), false), 1000);
  }

  loop() {

    this.game.step();
    this.game.draw(this.ctx);
  }
}

module.exports = GameView;
