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
    window.addEventListener('click', this.game.launch.bind(this.game));
    window.addEventListener('mousemove', this.game.movePointer.bind(this.game));
  }

  loop() {

    this.game.step();
    this.game.draw(this.ctx);
  }
}

module.exports = GameView;
