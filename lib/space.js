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
      CONSTANTS.shipStartPos,
      CONSTANTS.shipMass
    );
    this.planets = this.bigBang(level);
    this.goal = this.cleanLitterBox(level);
    this.pointer = new Pointer(CONSTANTS.pointerPos);
  }

  movePointer(event) {
    this.pointer.point([event.clientX, event.clientY]);
  }

  step() {
    if (this.dead || this.won) {
      return;
    }

    this.planets.forEach((obj) => {
      if (this.ship.isCollided(obj)) {
        this.deadShip();
      }
      this.ship.adjustCourse(this.ship, obj);
    });

    //kill the ship if it goes off screen - may want to deal with this differently
    if (this.beyondTheEdge(this.ship)) {
          this.deadShip();
        }

    if (this.ship.isCollided(this.goal)) {
      this.ship.victoryDance();
      this.won = true;
    }

/*
May not be the best way to initiate movement for the ship,
just wanted some way to apply velocity change every frame without putting all
of the logic into the draw function.
*/
    this.ship.step();
  }

  launch(event) {
    this.ship.launch(event);
  }

  deadShip() {
    this.ship.catastrophe();
    this.dead = true;
  }

  beyondTheEdge(ship) {
    return (
      ship.pos[0] > CONSTANTS.canvasMax ||
      ship.pos[0] < CONSTANTS.canvasMin ||
      ship.pos[1] > CONSTANTS.canvasMax ||
      ship.pos[1] < CONSTANTS.canvasMin
    );
  }

  bigBang(level) {
    var planets = [];
    switch (level) {
      case 1:
        planets.push(
          new Planet({
            density: 1000,
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
      density: 1000,
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
