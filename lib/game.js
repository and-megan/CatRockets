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
    if (this.space.won && this.level === CONSTANTS.finalLevel) {
      // is victoryDance for level win or complete game win? maybe this should live in game instead
      // this.ship.victoryDance();
      this.gameWon();
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

  gameWon() {
    // display victory animation, button to go back to menu
    console.log("You made it in the box, good job");
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
