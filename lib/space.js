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
    return new Goal;
  }

  draw(ctx) {
    this.ship.draw(ctx);
  }

  gravitational_force(obj_1, obj_2){
    //this needs to be calculated for every single object and then the difference will be used to determine how much the objects will shift

    //return Force of Attraction (N) between two objects with Universal Gravitation Equation: F = GMm/R2

    grav_constant = 6.674 * 10^-11
    separation = (obj_1.pos - obj_2.pos).abs
    mass_1 = obj_1.mass
    mass_2 = obj_2.mass
    (grav_constant * mass_1 * mass_2) / (separation**2)
  }

}

module.exports = Space;
