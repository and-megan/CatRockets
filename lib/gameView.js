class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    this.bindClick();
    this.interval = this.setInterval(this.loop, 10);
  }

  bindClick() {
    window.addEventListener('click', this.game.ship.launch());
  }

  loop() {

    this.game.step();
    this.game.draw(this.ctx);
  }
}

module.exports = GameView;
