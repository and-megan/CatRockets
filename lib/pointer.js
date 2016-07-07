var CONSTANTS = require('./constants.js'),
         Util = require('./util.js');

class Pointer {
  constructor(pos) {
    this.pos = pos;
    this.angle = 0;

    let image = new Image;
    image.src = './assets/pointer3.png';
    this.image = image;
  }

  point(pos) {
    this.angle = Util.calculateAngle(this.pos, pos);
    console.log(this.angle);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(...this.pos);
    ctx.rotate(Util.degToRad(this.angle));
    ctx.drawImage(
      this.image,
      ...CONSTANTS.pointerOffset,
      ...CONSTANTS.pointerSize
    );
    ctx.restore();
  }
}

module.exports = Pointer;
