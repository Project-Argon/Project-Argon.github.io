// Basic interaction demo
// Feb, 7, 2018
// Caleb Booker

let x
let y

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

}

function keyPressed() {
  noStroke();
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  fill(random(20, 255), random(20, 255), random(20, 255), 150);
  ellipse(x, y, 100, 100);
}

function mouseClicked() {
  noStroke();
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  fill(random(20, 255), random(20, 255), random(20, 255), 150);
  rect(mouseX, mouseY, 100, 100);
}

function deviceShaken() {

}
