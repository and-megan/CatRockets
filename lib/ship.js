var Util = require('./util.js'),
Constants = require('./constants.js');

class Ship {
  // inherit from Planet? will require a gravitational pull
  //this will require a mass to calculate gravitational pull
  constructor(radius, pos) {
    this.radius = radius;
    this.pos = pos;
    this.mass = Constants.shipMass;
    this.flying = false;
  }

  launch(e) {
    //grab destination coordinates & blastoff
    var coords = this.destination(e);
    this.blastoff(coords);
  }

  destination(e) {
    //grab coords
    var x = e.x;
    var y = e.y;
    var canvas = document.getElementById('game-canvas');

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    return ([x, y]);
  }

  blastoff(coords) {
    this.flying = true;
  }

  draw(ctx) {
    ctx.fillStyle = 'rgb(100,100,100)';
    ctx.beginPath();
    var [x, y] = this.pos;
    ctx.arc(x, y ,this.radius,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
  }

  isCollided(obj) {
    var dist = Util.calculateDistance(this.pos, obj.pos);
    //is dist less than or equal to the sum of the two radii
    return dist <= (this.radius + obj.radius);
  }

  catastrophe() {
    // set animation for boom-boom, sound? etc.
    console.log("ship is dead"); // testing purposes
  }

  victoryDance() {
    console.log("level complete"); //testing purposes
  }

}

module.exports = window.Ship = Ship;
// TODO: take off window
