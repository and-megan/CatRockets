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
	GameView = __webpack_require__(5);
	
	var element = document.getElementById('game-canvas');
	
	var ctx = element.getContext("2d");
	
	var game = new Game;
	var gameView = new GameView(game, ctx);
	
	gameView.start();
	// TODO: define initiate new and bind it to a button (make the menu in general)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Space = __webpack_require__(6);
	
	class Game {
	  constructor() {
	    this.level = 1;
	    this.space = this.bigBang(this.level);
	  }
	
	  bigBang(level) {
	    return new Space(level);
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
/***/ function(module, exports) {

	class Ship {
	  // inherit from Planet if we decide to give this gravitational pull (comets trailing?)
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
	
	}
	
	module.exports = window.Ship = Ship;
	// TODO: take off window


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	var Constants = {
	  shipRadius: 20,
	  shipStartPos: [ 50, 550 ],
	
	  levelOnePlanet: [ 300, 300 ]
	};
	
	module.exports = Constants;


/***/ },
/* 5 */
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
	    window.addEventListener('click', this.game.ship.launch());
	  }
	
	  loop() {
	
	    this.game.step();
	    this.game.draw(this.ctx);
	  }
	}
	
	module.exports = GameView;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(2),
	  Planet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./planet.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Goal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./planet.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	CONSTANTS = __webpack_require__(4);
	
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
	
	  bigBang(level) {
	    var planets = [];
	    switch (level) {
	      case 1:
	        planets.push(
	          new Planet({
	            density: 0,
	            radius: 0,
	            hue: 0,
	            pos: CONSTANTS.levelOnePlanet
	          })
	        );
	        break;
	    }
	  }
	
	  cleanLitterBox(level) {
	    return new Goal;
	  }
	
	  draw(ctx) {
	    this.ship.draw(ctx);
	  }
	}
	
	module.exports = Space;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map