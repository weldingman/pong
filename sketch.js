var x = 100;
var y = 300;
var speed = 10;
var dirX = 1;
var dirY = 0.1;
var levelX = 380;
var levelY = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  move();
  fill(255);
  ellipse(x, y, 20, 20);
  level();
}

function level(){
  rect(levelX, levelY, 10, 70);
  if (keyIsPressed && keyCode == UP_ARROW){
    levelY -= 5;
  }
  if (keyIsPressed && keyCode == DOWN_ARROW){
    levelY += 5;
  }
}

function move(){
  x += speed * dirX;
  y += speed * dirY;
  if(x > 390 || x < 10){
    dirX *= -1;
  }
  if(y < 10 || y > 390){
    dirY *= -1;
  }
}