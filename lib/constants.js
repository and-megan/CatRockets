var Constants = {
  canvasDim: [ 600, 600 ],
  backgroundColor: 'rgb(0, 0, 0)',

  shipRadius: 20,
  shipStartPos: [ 50, 550 ],
  shipMass: 1,
  shipSpeedMultiplier: 5,

  pointerPos: [ 100, 500 ],
  pointerOffset: [ -25, -25 ],
  pointerSize: [ 50, 50 ],

  levelOnePlanet: [ 300, 300 ],
  levelOneGoal: [ 550, 50 ],

  canvasMax: 600,
  canvasMin: 0,

  // change later if want to add more levels, for testing purposes
  finalLevel: 3
};

module.exports = Constants;
