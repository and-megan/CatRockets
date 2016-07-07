var  Ship = require('./ship.js'),
   Planet = require('./planet.js'),
     Goal = require('./planet.js'),
  Pointer = require('./pointer.js'),
     Util = require('./util.js'),
CONSTANTS = require('./constants.js');

class Space {
  constructor(level) {
    this.level = level;
    this.dead = false;
    this.won = false;
    this.ship = new Ship(
      CONSTANTS.shipRadius,
      CONSTANTS.shipStartPos
    );
    this.planets = this.bigBang(level);
    this.goal = this.cleanLitterBox(level);
    this.pointer = new Pointer(CONSTANTS.pointerPos);
  }

  movePointer(e) {
    this.pointer.point([e.clientX, e.clientY]);
  }

  step() {
    if (this.dead || this.won) {
      return;
    }

    this.planets.forEach((obj) => {
      if (this.ship.isCollided(obj)) {
        this.ship.catastrophe();
        this.dead = true;
      }
    });

    if (this.ship.isCollided(this.goal)) {
      this.ship.victoryDance();
      this.won = true;
    }
  }

  launch() {
    this.ship.launch();
  }

  bigBang(level) {
    var planets = [];
    switch (level) {
      case 1:
        planets.push(
          new Planet({
            density: 0,
            radius: 20,
            hue: 0,
            pos: CONSTANTS.levelOnePlanet
          })
        );
        break;
    }
    return planets;
  }

  cleanLitterBox(level) {
    return new Goal({
      density: 0,
      radius: 20,
      hue: 0,
      pos: CONSTANTS.levelOneGoal
    });
  }

  draw(ctx) {
    this.ship.draw(ctx);
    this.goal.draw(ctx);
    this.planets.forEach( (planet) => {
      planet.draw(ctx);
    });
    this.pointer.draw(ctx);
  }

}

module.exports = Space;
