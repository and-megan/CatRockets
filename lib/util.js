var Util = {
    gravitationalForce(obj1, obj2){
// this needs to be calculated for every single object and then the difference
// will be used to determine how much the objects will shift

// return Force of Attraction (N) between two objects with
// Universal Gravitation Equation: F = GMm/R2

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
  },

  calculateAngle(start, end) {
    var [ x1, y1, x2, y2 ] = [ start[0], start[1], end[0], end[1] ];
    var [ yDiff, xDiff ] = [ y2 - y1, x2 - x1 ];

    var angle = Math.atan2( yDiff, xDiff );
    return this.radToDeg(angle);
  },

  radToDeg(rad) {
    return rad * ( 180 / Math.PI );
  },

  degToRad(deg) {
    return deg * (Math.PI / 180);
  },

  normalizedVector(start, target) {
    var magnitude = this.magnitude(start, target);
    var vector = ([
        (target[0] - start[0]), (target[1] - start[1])
      ]);
    return [(vector[0] / magnitude), (vector[1] / magnitude)];
  },

  magnitude(start, end) {
    var xDiff = (start[0] - end[0]);
    var yDiff = (start[1] - end[1]);

    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  }

};

module.exports = Util;
