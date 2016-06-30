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

  gravitational_force(obj_1, obj_2){
    //this needs to be calculated for every single object and then the difference will be used to determine how much the objects will shift

    //return Force of Attraction (N) between two objects with Universal Gravitation Equation: F = GMm/R2

    grav_constant = 6.674 * 10^-11;
    separation = calculate_distance(obj_1.pos, obj_2.pos);
    mass_1 = obj_1.mass;
    mass_2 = obj_2.mass;
    (grav_constant * mass_1 * mass_2) / (Math.pow(separation, 2));
  }

  calculate_distance(pos_1, pos_2) {
    x_diff = pos_2[0] - pos_1[0];
    y_diff = pos_2[1] - pos_2[1];
    Math.sqrt(Math.pow(x_diff, 2) + Math.pow(y_diff, 2));
  }

}

module.exports = Space;
