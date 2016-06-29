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

	var Game = __webpack_require__(1),
	GameView = __webpack_require__(2);

	var element = document.getElementById('game-canvas');

	var ctx = element.getContext("2d");

	var game = new Game;
	var gameView = new GameView(game, ctx);

	gameView.start();
	// TODO: define initiate new and bind it to a button (make the menu in general)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(3),
	  Planet = __webpack_require__(4),
	    Goal = __webpack_require__(4);

	class Game {
	  constructor(){
	    this.ship = new Ship;
	  }

	  step(){

	  }

	  draw(ctx){

	  }
	}

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class GameView {
	  constructor(game, ctx) {
	    this.game = game;
	    this.ctx = ctx;
	  }

	  start() {
	    this.bindClick();
	    this.interval = this.setInterval(this.loop, 10);
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
/* 3 */
/***/ function(module, exports) {

	class Ship {
	  constructor() {

	  }
	  
	  launch(){

	  }
	}

	module.exports = Ship;


/***/ },
/* 4 */
/***/ function(module, exports) {

	class Planet {
	  constructor(options) {
	    this.density = options.density;
	    this.radius = options.radius;
	    this.hue = options.hue;
	  }
	}

	module.exports = Planet;


/***/ }
/******/ ]);