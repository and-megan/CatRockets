var CONSTANTS = require('./constants.js'),
         Util = require('./util.js');

class Pointer {
  constructor(pos) {
    this.pointingTo = pos;
    this.point();
  }

  point() {
    this.angle = Util.calculateAngle(CONSTANTS.shipStartPos, this.pointingTo);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(...CONSTANTS.shipStartPos);
  }
}
