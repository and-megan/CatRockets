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

  isCollided(){

}

module.exports = window.Ship = Ship;
// TODO: take off window
