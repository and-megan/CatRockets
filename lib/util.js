Util = {
    gravitational_force(obj_1, obj_2){
    //this needs to be calculated for every single object and then the difference will be used to determine how much the objects will shift

    //return Force of Attraction (N) between two objects with Universal Gravitation Equation: F = GMm/R2

    var grav_constant = 6.674 * Math.pow(10, -11);
    var separation = this.calculate_distance(obj_1.pos, obj_2.pos);
    var mass_1 = obj_1.mass;
    var mass_2 = obj_2.mass;
    return (grav_constant * mass_1 * mass_2) / (Math.pow(separation, 2));
  },

  calculate_distance(pos_1, pos_2) {
    var x_diff = pos_2[0] - pos_1[0];
    var y_diff = pos_2[1] - pos_2[1];
    return (Math.sqrt(Math.pow(x_diff, 2) + Math.pow(y_diff, 2)));
  }
};

module.exports = Util;
