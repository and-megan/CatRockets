var GameView = require('./gameView.js');

var element = document.getElementById('game-canvas');

var ctx = element.getContext("2d");

var gameView = new GameView(ctx);

gameView.start();


// TODO: define initiate new and bind it to a button (make the menu in general)
