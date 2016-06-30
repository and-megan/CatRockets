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
}

module.exports = window.Planet = Planet;
// TODO: take off window
  
