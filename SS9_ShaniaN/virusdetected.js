// use the refresh button to see the emoji's in different positions!
// Shania Narcisse
// "virus detected"

function setup() {
createCanvas(800, 800);
// gradient background using for loop
let startColor = color("#FF8AC4");
let endColor = color("#D10069");

for ( let y = 0; y < height; y++) {

  let yRatio = map(y, 0, height, 0, 1);

  let newcolor = lerpColor(startColor, endColor, yRatio);
stroke(newcolor);
line(0,y, width, y);
}
noLoop();
}




function draw() {
background("#00000000");
// cute emoji faces using while loop
  let numCute = 10;
let num = 0;
while(num < numCute){
let size = random(40, 160);
let x = random(size / 2, width - size / 2);
let y = random(size / 2, height - size / 2);
cuteFaces(x,y, size);
num++;
}
}


function cuteFaces(x, y, size){
  // head color, stroke wieight and size
  fill("#FEFAE7");
  stroke("#FFD500");
  strokeWeight(size * 0.025);
  circle(x, y, size);
  noStroke();

  // eyes 
  fill(220);
circle(x - size * 0.25, y - size * 0.15, size * 0.4);
circle(x + size * 0.25, y - size * 0.15, size * 0.4);

// eye shines
fill(255, 255, 255);
circle(x - size * 0.2, y - size * 0.2, size * 0.2);
circle(x + size * 0.2, y - size * 0.2, size * 0.2);
circle(x - size * 0.3, y - size * 0.12, size * 0.08);
circle(x + size * 0.3, y - size * 0.12, size * 0.08);
}

