/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(5),
	GameView = __webpack_require__(6);

	var element = document.getElementById('game-canvas');

	var ctx = element.getContext("2d");

	var game = new Game;
	var gameView = new GameView(game, ctx);

	gameView.start();
	// TODO: define initiate new and bind it to a button (make the menu in general)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	 var Ship = __webpack_require__(7),
	   Planet = __webpack_require__(8),
	     Goal = __webpack_require__(8),
	Constants = __webpack_require__(9);

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


/***/ },
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	class Planet {
	  constructor(options) {
	    this.density = options.density;
	    this.radius = options.radius;
	    this.hue = options.hue;
	  }
	}

	module.exports = window.Planet = Planet;
	// TODO: take off window


/***/ },
/* 9 */
/***/ function(module, exports) {

	var Constants = {
	  shipRadius: 20,
	  shipStartPos: [50,550]
	};

	module.exports = Constants;


/***/ }
/******/ ]);