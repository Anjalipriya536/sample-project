"use strict"
// Enemies our player must avoid
var Enemy = function(x,y,s) {
  this.x=x;
  this.y=y;
  this.speed=s;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
var enemy =new Enemy(300,500);
Enemy.prototype.update = function(dt) {
  this.x=this.x+this.speed*dt;
  this.speed=100+Math.floor(Math.random() *200); //Math.random()function makes the enemies mmove with random speed
  if(this.x>505)
  {
    this.x=0;
    //this.speed=100+Math.floor(Math.random() *1000);
  }
  //collision between the player and the enemies
  if(player.x < this.x +40 && player.x + 50 > this.x &&
    player.y < this.y + 50 && player.y + 60 > this.y){
      player.x=101;
      player.y=400;
    window.alert("GAME OVER");//popup message
    }


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Draw the enemy on the screen, required method for game

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player=function(){
this.x=200;
this.y=400;
this.sprite='images/char-boy.png';

};
var player=new Player();
Player.prototype.update = function() {

};
Player.prototype.render = function(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(keyPress){
if (keyPress === "left" && this.x > 0) {
  //makes the player moves in left direction
  this.x -= 101;
}
if (keyPress === "right" && this.x < 400) {
  //makes the player moves in right direction
  this.x += 101;
}
if (keyPress === "up" && this.y > 0) {
  //makes the player moves in upward direction
this.y -=101;
}
if(keyPress === "down"){
  //makes the player moves in downward direction
  this.y+=101;
  if(this.y>=400){
    this.y=400;
  }
}
if(this.y < 0){
  setTimeout(()=>{
    //setTimeut() function is used to make the player to remain in original position after he reaches water level
    this.x=101;
    this.y=400;
  },300);
}
// if(this.y<-8){
//   window.alert("congralutaions your won");
// }
 }





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies=[];
let enemyposition=[60,145,230];
for(var i=0;i<enemyposition.length;i++){
  var enemy = new Enemy(0,enemyposition[i],6);
  allEnemies.push(enemy);


}
// var scoreText;
// var score=0;
// scoreText=game.add.text(101,101,'Points:0'{font:16px Arial',fill:'#0095DD'});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
