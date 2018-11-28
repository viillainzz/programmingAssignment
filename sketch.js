//choose color for mouse pressed options
var red  = (250, 0, 0);
var blue = (0, 0, 255);
//canvas size & background
function setup() {
    createCanvas(800, 800);
    background(109, 109, 109);
    red  = color(250, 0, 0);
    blue = color(0, 0, 255);
}
//draws if mouse is dragged and if mouse is clicked and dragged
function draw() {
  if (mouseIsPressed) {
    fill(255, 0, 0);
  } else {
      fill(255,0 ,0);
  }
  if (mouseIsPressed) {
    fill(0, 0, 255);
  }
    //creates ellipse
  ellipse(mouseX, mouseY, 100, 100);
    stroke(255);
    strokeWeight(5);
}
//clears canvas is any keyboard key is pressed
function keyPressed() {
    background(109, 109, 109);
}