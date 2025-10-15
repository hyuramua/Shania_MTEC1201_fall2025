/* Shania Narcisse


title: Kawaii

theme: pink overall theme my aesthetic 


*/


let img; let originalImg; let canvasW = 600; canvasH = 1000;
let pix = []; let cols, rows; let size = 20;
let rectX, rectY, rectW, rectH;
let velocityX, velocityY;
let updateInterval = 10; let speed = 5;
let timer = 1000; 
let currentTime = 0; 
let savedTime = 0; 
let ellipseX = 368; 
let increment = 40;	
let ellipseSize = 200; 


function preload() {
originalImg = loadImage("images/pinkhair.jpeg");
}

function setup(){

createCanvas(canvasW, canvasH);
originalImg.resize(canvasW, 0);

img = createImage(canvasW, canvasH);
img.copy(originalImg, 0, 0, canvasW, canvasH, 0, 0, canvasW, canvasH);
img.filter(GRAY);

rectX = random(0, 10);
rectY = random(0, 10);
velocityX = random(-speed, speed);
velocityY = random(-speed, speed);
fetchPixels();
}

function draw(){
background(220);
image(img, 0, 0);
text('kawaii', 300, 300);
textSize(150);
textAlign(CENTER);

currentTime = millis(); 


rectX += velocityX;
rectY += velocityY;


if (rectX <= 0 || rectX + rectW * size >= width) {
  velocityX *= -1;
  rectX = constrain(rectX, 0, width - rectW * size);
}

 if (rectY <= 0 || rectY + rectH * size >= height){
velocityY *= -1;
 rectY = constrain(rectY, 0, height - rectH * size);
}

if (frameCount % updateInterval == 0) {
fetchPixels();
}

ellipse(ellipseX, height / 2, ellipseSize, ellipseSize);


	if (currentTime - savedTime > timer) 
	{
		if (ellipseX > width)
		{
			ellipseX = 0;
		} 
		else 
		{
			ellipseX += increment; 
		}
		
		fill(random(255), random(255), random(255)); 
    
		savedTime = currentTime; 
	}
	



noStroke();
for (let i=0; i<rectW; i++) {
    for (let j=0; j<rectH; j++) {
      let x = rectX + i*size;
      let y = rectY + j*size;
      fill(pix[i][j]);
      rect(x, y, size, size);
    
    }
  }
}




function fetchPixels(){
  push();
  rectW = floor(random(20, 30));
  rectH = floor(random(10,20));

pix = new Array(rectW).fill().map(() => Array(rectH));

    for (let i=0; i<rectW; i++) {
    pix[i] = [];
    for (let j=0; j<rectH; j++) { 
      let x = rectX + i*size;
      let y = rectY + j*size;
      pix[i][j] = originalImg.get(x, y);

    }
  }
}
