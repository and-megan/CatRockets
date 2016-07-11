var Space = require('./space.js'),
CONSTANTS = require('./constants.js');

class Game {
  constructor() {
    this.level = 1;
    this.bigBang(this.level);
  }

  bigBang(level) {
    this.space = new Space(level);
  }

  launch(event) {
    this.space.launch(event);
  }

  movePointer(event) {
    this.space.movePointer(event);
  }

  step() {
    if (this.space.won && this.level == CONSTANTS.finalLevel) {
      // is victoryDance for level win or complete game win?
      this.ship.victoryDance();
    }

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
    // resets background color
    ctx.fillStyle = CONSTANTS.backgroundColor;
    ctx.fillRect(0, 0, ...CONSTANTS.canvasDim);

    // draws all game objects
    this.space.draw(ctx);
  }
}

module.exports = Game;
