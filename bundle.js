/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1),
	GameView = __webpack_require__(7);
	
	var element = document.getElementById('game-canvas');
	
	var ctx = element.getContext("2d");
	
	var game = new Game;
	var gameView = new GameView(game, ctx);
	
	gameView.start();
	// TODO: define initiate new and bind it to a button (make the menu in general)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Space = __webpack_require__(2);
	
	class Game {
	  constructor() {
	    this.level = 1;
	    this.space = this.bigBang(this.level);
	  }
	
	  bigBang(level) {
	    return new Space(level);
	  }
	
	  launch() {
	    this.space.launch();
	  }
	
	  step() {
	    console.log('game step'); //just for testing
	  }
	
	  draw(ctx) {
	    this.space.draw(ctx);
	  }
	}
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(3),
	  Planet = __webpack_require__(4),
	    Goal = __webpack_require__(4),
	    Util = __webpack_require__(5),
	CONSTANTS = __webpack_require__(6);
	
	class Space {
	  constructor(level) {
	    this.level = level;
	
	    this.ship = new Ship(
	      CONSTANTS.shipRadius,
	      CONSTANTS.shipStartPos
	    );
	    this.planets = this.bigBang(level);
	    this.goal = this.cleanLitterBox(level);
	  }
	
	  launch() {
	    this.ship.launch();
	  }
	
	  bigBang(level) {
	    var planets = [];
	    switch (level) {
	      case 1:
	        planets.push(
	          new Planet({
	            density: 0,
	            radius: 20,
	            hue: 0,
	            pos: CONSTANTS.levelOnePlanet
	          })
	        );
	        break;
	    }
	    return planets;
	  }
	
	  cleanLitterBox(level) {
	    return new Goal({
	      density: 0,
	      radius: 20,
	      hue: 0,
	      pos: CONSTANTS.levelOneGoal
	    });
	  }
	
	  draw(ctx) {
	    this.ship.draw(ctx);
	    this.goal.draw(ctx);
	    this.planets.forEach(function (planet) {
	      planet.draw(ctx);
	    });
	  }
	
	}
	
	module.exports = Space;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Util = __webpack_require__(5);
	
	class Ship {
	  // inherit from Planet? will require a gravitational pull
	  //this will require a mass to calculate gravitational pull
	  constructor(radius, pos) {
	    this.radius = radius;
	    this.pos = pos;
	  }
	
	  launch(){
	
	  }
	
	  draw(ctx){
	    ctx.fillStyle = 'rgb(100,100,100)';
	    ctx.beginPath();
	    var [x, y] = this.pos;
	    ctx.arc(x, y ,this.radius,0,2*Math.PI);
	    ctx.closePath();
	    ctx.fill();
	  }
	
	  isCollided(obj){
	    var dist = Util.calculate_distance(this.pos, obj.pos);
	    //is dist less than or equal to the sum of the two radii
	    return dist <= (this.radius + obj.radius);
	  }
	
	  charlieIsWayBetterThanMeganAtEverything(){
	    return false;
	  }
	
	}
	
	module.exports = window.Ship = Ship;
	// TODO: take off window


/***/ },
/* 4 */
/***/ function(module, exports) {

	class Planet {
	  constructor(options) {
	    this.density = options.density;
	    this.radius = options.radius;
	    this.hue = options.hue;
	    this.pos = options.pos;
	    this.volume = (4/3) * 3.14 * Math.pow(this.radius, 3);
	    //mass for gravity calculations
	    this.mass = this.volume * this.density;
	  }
	
	  draw(ctx) {
	    var [x, y] = this.pos;
	
	    ctx.fillStyle = 'rgb(100,100,50)';
	    ctx.beginPath();
	    ctx.arc(x, y ,this.radius,0,2*Math.PI);
	    ctx.closePath();
	    ctx.fill();
	  }
	}
	
	module.exports = window.Planet = Planet;
	// TODO: take off window


/***/ },
/* 5 */
/***/ function(module, exports) {

	Util = {
	    gravitational_force(obj_1, obj_2){
	    //this needs to be calculated for every single object and then the difference will be used to determine how much the objects will shift
	
	    //return Force of Attraction (N) between two objects with Universal Gravitation Equation: F = GMm/R2
	
	    grav_constant = 6.674 * Math.pow(10, -11);
	    separation = this.calculate_distance(obj_1.pos, obj_2.pos);
	    mass_1 = obj_1.mass;
	    mass_2 = obj_2.mass;
	    (grav_constant * mass_1 * mass_2) / (Math.pow(separation, 2));
	  },
	
	  calculate_distance(pos_1, pos_2) {
	    x_diff = pos_2[0] - pos_1[0];
	    y_diff = pos_2[1] - pos_2[1];
	    Math.sqrt(Math.pow(x_diff, 2) + Math.pow(y_diff, 2));
	  }
	};
	
	module.exports = Util;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var Constants = {
	  shipRadius: 20,
	  shipStartPos: [ 50, 550 ],
	
	  levelOnePlanet: [ 300, 300 ],
	  levelOneGoal: [ 550, 50 ]
	};
	
	module.exports = Constants;


/***/ },
/* 7 */
/***/ function(module, exports) {

	class GameView {
	  constructor(game, ctx) {
	    this.game = game;
	    this.ctx = ctx;
	  }
	
	  start() {
	    this.bindClick();
	    this.interval = setInterval(this.loop.bind(this), 10);
	  }
	
	  bindClick() {
	    window.addEventListener('click', this.game.launch());
	  }
	
	  loop() {
	
	    this.game.step();
	    this.game.draw(this.ctx);
	  }
	}
	
	module.exports = GameView;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map