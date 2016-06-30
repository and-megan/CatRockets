var Ship = require('./ship.js'),
  Planet = require('./planet.js'),
    Goal = require('./planet.js'),
CONSTANTS = require('./constants.js');

class Space {
  constructor(level) {
    this.level = level;

    this.ship = new Ship(
      CONSTANTS.shipRadius,
      CONSTANTS.shipStartPos
    );
    this.planets = this.bigBang(level);
    this.goal = this.cleanLitterBox(level);
  }

  bigBang(level) {
    switch (level) {
      case 1:
        
        break;

    }
  }

  cleanLitterBox(level) {
    return new Goal;
  }
}

module.exports = Space;
