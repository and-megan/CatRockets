var Space = require('./space.js');

class Game {
  constructor() {
    this.level = 1;
    this.space = this.bigBang(this.level);
  }

  bigBang(level) {
    return new Space(level);
  }

  step() {
    console.log('game step');
  }

  draw(ctx) {

  }
}

module.exports = Game;
