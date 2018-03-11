let x, y, penSize, fr, c1, c2, c3, head, state;
let ballCoords = [[50, 200]];

//preloads caterpillar head image
function preload() {
  head = loadImage('images/caterpillarFace.png');
}

//sets up window and determines starting state
function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
//sets pensize depending on the shape of the browser window
  if (windowWidth < windowHeight) {
    penSize = height / 15;
  } else if (windowHeight < windowWidth) {
    penSize = width / 30;
  }
}

//calls all functions, or calls functions that call functions
function draw() {
  x = mouseX;
  y = mouseY;
  startScreen();
  checkState();
  doDrawing();
  segmentCoord();
}

//saves coordinates and colours of the caterpillar body segments
function segmentCoord() {
  if (state === 2); {
    for (let i = 0; i < ballCoords.length; i++) {
      fill(ballCoords[i][2], ballCoords[i][3], ballCoords[i][4], 180);
      ellipse(ballCoords[i][0], ballCoords[i][1], penSize, penSize);
      caterpillar();
    }
  }
}

// Checks if the state needs to be changed
function checkState() {
  if (state === 1 && mouseX > width / 2.68 && mouseX < width / 1.6 && mouseY > height / 2.68 && mouseY < height / 1.6) {
//changes state once all expectations are met
    if (mouseIsPressed) {
      state = 2;
    }
  }
}
//Draws the startScreen
function startScreen() {
// makes the start screen, sets the cursor the arrow, and draws the start screen to the default colour
  if (state === 1 && mouseX > width / 2.68 && mouseX < width / 1.6 && mouseY > height / 2.68 && mouseY < height / 1.6) {
    cursor(HAND);
    background(0);
    rectMode(CENTER);
    noStroke();
    fill(150, 150, 150);
    rect(width / 2, height / 2, width / 4, height / 4);
    fill(255);
    rect(width / 2, height / 2, width / 4 - 25, height / 4 - 25);
    fill(0);
    textSize(windowWidth / 20);
    textAlign(CENTER, CENTER);
    text("start", width / 2, height / 2);
// makes the start screen, sets the cursor to the hand, and draws the start button to the secondar colour
  } else if (state === 1) {
    cursor(ARROW);
    background(0);
    rectMode(CENTER);
    noStroke();
    fill(150, 150, 150);
    rect(width / 2, height / 2, width / 4, height / 4);
    fill(255, 150, 66, 150);
    rect(width / 2, height / 2, width / 4 - 25, height / 4 - 25);
    fill(0);
    textSize(windowWidth / 20);
    textAlign(CENTER, CENTER);
    text("start", width / 2, height / 2);
  }
}
//displays the head of the very hungry caterpillar if the state is 2
function caterpillar() {
  if (state === 2) {
    imageMode(CENTER);
    image(head, x, y - 15, penSize + 45, penSize + 45);
  }
}

//draws the caterpillar body and sends the coordinates of the segments to "segmentCoord", undisplays the cursor,
//sets the drawing background, and sets the random colours for the segments, if the state is 2
function doDrawing(penSize) {
  if (state === 2) {
    background(25, 25, 25);
    noCursor();
    c1 = random(0, 256);
    c2 = random(0, 256);
    c3 = random(0, 256);
    ballCoords.push([mouseX, mouseY, c1, c2, c3]);
  }
}
