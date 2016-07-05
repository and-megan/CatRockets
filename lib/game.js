var Space = require('./space.js');

class Game {
  constructor() {
    this.level = 1;
    this.bigBang(this.level);
  }

  bigBang(level) {
    this.space = new Space(level);
  }

  step() {

// needs a check for last level victory - game won't end until you're dead at this point
    if (this.space.won) {
      this.level++;
      this.bigBang(this.level);
    }

    if (this.space.dead) {
      this.gameOver();
    }

    this.space.step();
  }

  gameOver() {
    // display losing message, go back to menu, etc.
    console.log("Game over!");
  }

  draw(ctx) {
    this.space.draw(ctx);
  }
}

module.exports = Game;
