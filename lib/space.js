var Ship = require('./ship.js'),
  Planet = require('./planet.js'),
    Goal = require('./planet.js'),
    Util = require('./util.js'),
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
    var planets = [];
    switch (level) {
      case 1:
        planets.push(
          new Planet({
            density: 0,
            radius: 0,
            hue: 0,
            pos: CONSTANTS.levelOnePlanet
          })
        );
        break;
    }
  }

  cleanLitterBox(level) {
    return new Goal({
      density: 0,
      radius: 0,
      hue: 0,
      pos: CONSTANTS.levelOnePlanet
    });
  }

  draw(ctx) {
    this.ship.draw(ctx);
  }

}

module.exports = Space;
