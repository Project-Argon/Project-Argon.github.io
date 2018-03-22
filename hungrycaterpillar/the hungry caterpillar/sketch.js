let x, y, penSize, fr, c1, c2, c3, head, state, backgroundMusic, interactSound;
let ballCoords = [
  [0, 0]
];

//preloads caterpillar head image
function preload() {
  head = loadImage("assets/caterpillarFace.png");
  backgroundMusic = loadSound("assets/smoothJazz.mp3");
  interactSound = loadSound("assets/Blop.mp3");
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
      fill(255, 0, 0);
      rect(0, 0, 80, 80);
      fill(0);
      text("EXIT", 20, 20);
      textSize(13);
      caterpillar();
    }
  }
  //if (state === 2 && mouseX < 80 && mouseY < 80 && mouseIsPressed) {
  //ballCoords.length = ballCoords.length - ballCoords.length;
  //}
}

// Checks if the state needs to be changed
function checkState() {
  if (state === 1 && mouseX > width / 2.68 && mouseX < width / 1.6 && mouseY > height / 2.68 && mouseY < height / 1.6) {
    //changes state once all expectations are met
    if (mouseIsPressed) {
      interactSound.play();
      backgroundMusic.setVolume(0.6);
      backgroundMusic.loop();
      state = 2;
    }
  } else if (state === 2 && mouseX < 80 && mouseY < 80 && mouseIsPressed) {
    backgroundMusic.stop();
    state = 1;
  }
}
//Draws the startScreen
function startScreen() {
  // makes the start screen, sets the cursor the arrow, and draws the start screen to the default colour
  if (state === 1 && mouseX > width / 2) {
    fill(150, 150, 150);
    rect(width / 2, height / 6, width / 5.5, height/ 5.5);
  }
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
    //fill(150, 150, 150);
    //rect(width / 2, height / 6, width / 5.5, height/ 5.5);
    //fill(255);
    //rect(width / 2, height / 6, width / 6, height/ 6);
    // makes the start screen, sets the cursor to the hand, and draws the start button to the secondar colour
  }
  else if (state === 1) {
    ballCoords.length = ballCoords.length - ballCoords.length;
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
    //fill(150, 150, 150);
    //rect(width / 2, height / 6, width / 5.5, height/ 5.5);
    //fill(255, 150, 66, 150);
    //rect(width / 2, height / 6, width / 6, height/ 6);
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
