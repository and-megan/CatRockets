class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    this.bindClick();
    this.interval = setInterval(this.loop.bind(this), 10);
  }

  bindClick() {
    window.addEventListener('click', this.game.launch());
  }

  loop() {

    this.game.step();
    this.game.draw(this.ctx);
  }
}

module.exports = GameView;
