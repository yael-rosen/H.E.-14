let imgArray = [];

function preload() {
  imgArray[0] = loadImage("assets/Face.png");
  imgArray[1] = loadImage("assets/Heart.png");
  imgArray[2] = loadImage("assets/Sparkle.png");
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  rectMode(CENTER);
  
  var button = createButton("Draw Face");
  button.parent("button-holder");
  button.mousePressed(drawFace);
  
  var button2 = createButton("Draw Heart");
  button2.parent("button-holder");
  button2.mousePressed(drawHeart);
  
  var button3 = createButton("Draw Random");
  button3.parent("button-holder");
  button3.mousePressed(drawRandom);
  
  var button4 = createButton("Draw Circle");
  button4.parent("button-holder");
  button4.mousePressed(drawCircle);
  
  var button5 = createButton("Clear Screen");
  button5.parent("button-holder");
  button5.mousePressed(clearScreen);
  
  var button6 = createButton("Clear Random");
  button6.parent("button-holder");
  button6.mousePressed(clearRandom);
  
  var button7 = createButton("Save Image");
  button7.parent("button-holder");
  button7.mousePressed(saveImage);
  
  background(255);
}

function draw() {
}

function drawFace() {
  image(imgArray[0], random(width), random(height), 30, 30);
}

function drawHeart() {
  image(imgArray[1], random(width), random(height), 30, 30);
}

function drawRandom() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 30, 30);
}

function drawCircle() {
  noFill();
  ellipse(random(width), random(height), random(0,100));
}

function clearScreen() {
  background(255);
}

function clearRandom() {
  background(random(0,255), random(0,255), random(0,255));
}

function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imgArray[2], mouseX, mouseY, 30, 30);
    }
  }
}

function saveImage() {
  save("Picture.png");
}