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

  launch(e) {
    this.space.launch(e);
  }

  movePointer(e) {
    this.space.movePointer(e);
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
    // resets background color
    ctx.fillStyle = CONSTANTS.backgroundColor;
    ctx.fillRect(0, 0, ...CONSTANTS.canvasDim);

    // draws all game objects
    this.space.draw(ctx);
  }
}

module.exports = Game;
