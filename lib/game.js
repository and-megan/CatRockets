 var Ship = require('./ship.js'),
   Planet = require('./planet.js'),
     Goal = require('./planet.js'),
Constants = require('./constants.js');

class Game {
  constructor(){
    this.ship = new Ship(
      Constants.shipRadius,
      Constants.shipStartPos
    );
    this.level = 1;
  }

  step(){
    console.log('game step');
  }

  draw(ctx){
    this.ship.draw(ctx);
  }
}

module.exports = Game;
