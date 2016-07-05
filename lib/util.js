Util = {
    gravitationalForce(obj1, obj2){
    //this needs to be calculated for every single object and then the difference will be used to determine how much the objects will shift

    //return Force of Attraction (N) between two objects with Universal Gravitation Equation: F = GMm/R2

    var gravConstant = 6.674 * Math.pow(10, -11);
    var separation = this.calculateDistance(obj1.pos, obj2.pos);
    var mass1 = obj1.mass;
    var mass2 = obj2.mass;
    return (gravConstant * mass1 * mass2) / (Math.pow(separation, 2));
  },

  calculateDistance(pos1, pos2) {
    var xDiff = pos2[0] - pos1[0];
    var yDiff = pos2[1] - pos1[1];
    return (Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)));

  calculateAngle(start, end) {
    var x1, y1, x2, y2 = [ start[0], start[1], end[0], end[1] ];
    var yDiff, xDiff = [ y2 - y1, x2 - x1 ];

    var angle = Math.atan( yDiff / xDiff );

    return this.radToDeg(angle);
  },

  radToDeg(rad) {
    return rad * ( 180 / Math.PI );
  }

};

module.exports = Util;
