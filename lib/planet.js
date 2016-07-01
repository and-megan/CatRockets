class Planet {
  constructor(options) {
    this.density = options.density;
    this.radius = options.radius;
    this.hue = options.hue;
    this.pos = options.pos;
    this.volume = (4/3) * 3.14 * Math.pow(this.radius, 3);
    //mass for gravity calculations
    this.mass = this.volume * this.density;
  }

  draw(ctx) {
    var [x, y] = this.pos;

    ctx.fillStyle = 'rgb(100,100,50)';
    ctx.beginPath();
    ctx.arc(x, y ,this.radius,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}

module.exports = window.Planet = Planet;
// TODO: take off window
