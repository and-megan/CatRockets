var Util = require('./util.js');

class Ship {
  // inherit from Planet? will require a gravitational pull
  //this will require a mass to calculate gravitational pull
  constructor(radius, pos) {
    this.radius = radius;
    this.pos = pos;
  }

  launch(){

  }

  draw(ctx){
    ctx.fillStyle = 'rgb(100,100,100)';
    ctx.beginPath();
    var [x, y] = this.pos;
    ctx.arc(x, y ,this.radius,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
  }

  isCollided(obj){
    var dist = Util.calculate_distance(this.pos, obj.pos);
    //is dist less than or equal to the sum of the two radii
    return dist <= (this.radius + obj.radius);
  }

  megan(megan) {
    
  }
}

module.exports = window.Ship = Ship;
// TODO: take off window
