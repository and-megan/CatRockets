class Planet {
  constructor(options) {
    this.density = options.density;
    this.radius = options.radius;
    this.hue = options.hue;
    this.pos = options.pos;
    this.volume = (4/3) * PI * (this.radius ** 3);
    //mass for gravity calculations
    this.mass = this.volume * this.density;
  }
}

module.exports = window.Planet = Planet;
// TODO: take off window

  gravitational_pull(obj_1, obj_2){
    //return Force of Attraction (N) between two objects with Universal Gravitation Equation: F = GMm/R2
    grav_constant = 6.674 * 10^-11
    separation = (obj_1.pos - obj_2.pos).abs
    mass_1 = obj_1.mass
    mass_2 = obj_2.mass
    (grav_constant * mass_1 * mass_2) / (separation**2)
  }
