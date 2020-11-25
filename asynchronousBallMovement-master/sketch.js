var ball;
var database;
var position;
var gameState = 0;
var playerCount;
var form,game,player;
var allplayer;
var car1,car2,car3,car4,carArray;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.readState();
    game.start();
    
}

function draw(){
    background("green");
    if(playerCount==4){
        //console.log("hi",playerCount,gameState);
        gameState = 1;
        game.updatestate(1);
    }
  if (gameState == 1 ){
      game.play();
  } 
}




