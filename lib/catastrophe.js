var Game = require('./game.js'),
GameView = require('./gameView.js');

var element = document.getElementById('game-canvas');

var ctx = element.getContext("2d");

var game = new Game;
var gameView = new GameView(game, ctx);

gameView.start();
// TODO: define initiate new and bind it to a button (make the menu in general)
