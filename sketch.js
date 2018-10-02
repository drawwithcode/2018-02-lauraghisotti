function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(100);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  // put drawing code here

/*  if (cos(frameCount) <= 0.5) {
  translate (width/2, height/2);
  rotate(cos(frameCount));
  line(width/2+300, height/2, -frameCount, height/2);
} else {
  translate (width/2, height/2);
  rotate(frameCount/50);
  line(width/2+300, height/2, -frameCount, height/2);
}*/



push();
translate(width/2+300, height/2);
rotate(300*(frameCount*3));
//if (frameCount >= 180)
noFill();
stroke(100, 230, 0);
  //stroke(lerpColor(color(230, 230, 230), color(50, 50, 50),  frameCount/120));
line(300, 0, 300*cos(frameCount*3), 300*sin(frameCount*3))
pop();

push();
translate(width/6, height/3+5);
rotate(frameCount);
scale(cos(frameCount))
//if (frameCount >= 180)
noFill();
  stroke(lerpColor(color(56, 0, 140), color(100, 230, 0),  frameCount/120));
line(frameCount+150, frameCount, frameCount+200, frameCount)
pop();


push();
translate(width/2+300, height/2);
//rotate(frameCount);
//if (frameCount >= 180)
noFill();
stroke(56, 0, 140);
//  stroke(lerpColor(color(100, 230, 0), color(56, 0, 140), frameCount/120));
line(150, 0, 150*cos(frameCount*3), 150*sin(frameCount*3))
pop();

if (frameCount == 270) {
  noLoop();
}




}
