//global variables
let x, y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
}

function draw() {
  background(255);

  moveStickman();

  drawStickman(mouseX, mouseY);
  drawStickman(x, y);
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

function moveStickman() {
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

function drawStickman(x, y) {
  //draw head
  fill(255, 255, 255);
  ellipse(x, y, 100, 100);
  //draw body
  line(x, y + 50, x, y + 200);
  //draw arms
  line(x - 100, y + 75, x + 100, y + 75);
  //draw legs
  line(x, y + 200, x - 50, y + 350);
  line(x, y + 200, x + 50, y + 350);
  //draw hat
  fill(0, 255, 0);
  rect(x - 50, y - 60, 100, 10);
  fill(255, 0, 0);
  rect(x - 25, y - 110, 50, 50);
}
