var database;

var form, game, player;         //objects of the classes

var gameState = 0;

var playerCount;

function setup(){
createCanvas(400,400);

//create a database --> firebase.database();
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){

}