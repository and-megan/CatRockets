class Planet {
  constructor(options) {
    this.density = options.density;
    this.radius = options.radius;
    this.hue = options.hue;
    this.pos = options.pos
  }
}

module.exports = window.Planet = Planet;
// TODO: take off window
