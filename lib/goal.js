var Planet = require('./planet.js');

class Goal extends Planet {
  constructor(options) {
    super(options);
  }
  
}
module.exports = window.Goal = Goal;
// TODO: take off window
