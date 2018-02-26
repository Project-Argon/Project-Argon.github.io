//global variables
let x, y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;
let red, green, green2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
  red = 0;
  green = 0;
  green2 = 0;
}

function draw() {
  background(0);

  displayText('one cube is controlled by the keyboard',2,3);
  displayText('the other is controlled by the mouse',2,2.725);
  displayText('the keyboard cube changes colour at random',2,2.5);
  displayText('while the mose cube changes depending on',2,2.3);
  displayText('the mouse pointers location',2,2.125);

  mouseShanpe();

  moveShanpe();

  drawShanpe(x, y);
}

function displayText(theText,pos1,pos2) {
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text(theText, windowWidth/pos1, windowHeight/pos2);
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    isMovingUp = true;
  }
  if (key === 's' || key === 'S') {
    isMovingDown = true;
  }
  if (key === 'd' || key === 'D') {
    isMovingRight = true;
  }
  if (key === 'a' || key === 'A') {
    isMovingLeft = true;
  }
}

function keyReleased() {
  if (key === 'w' || key === 'W') {
    isMovingUp = false;
  }
  if (key === 's' || key === 'S') {
    isMovingDown = false;
  }
  if (key === 'd' || key === 'D') {
    isMovingRight = false;
  }
  if (key === 'a' || key === 'A') {
    isMovingLeft = false;
  }
}

function moveShanpe() {
  if (isMovingUp) {
    y = y - 10;
  }
  if (isMovingDown) {
    y = y + 10;
  }
  if (isMovingRight) {
    x = x + 10;
  }
  if (isMovingLeft) {
    x = x - 10;
  }
}

function drawShanpe(x, y) {
  red = random(0, 256)
  green = random(0, 256)
  green2 = random(0, 256)
  noStroke()
  fill(red, green, green2)
  rect(x, y, 100, 100)
}

function mouseShanpe() {
  red = mouseY/2
  green = 100
  green2 = mouseX/4
  noStroke()
  fill(red, green, green2)
  rect(mouseX - 50, mouseY - 50, 100, 100)

}
