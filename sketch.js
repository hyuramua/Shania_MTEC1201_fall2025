//This is a comment. use it to make your code more readable
/*
this is a mutlti line comment 
*/



function setup() {
  //you must include set up function to run code.
  //only include ONE SET up function per sketch.
  createCanvas(1000, 1000);
  //sets size of canvas area with width and height.

  //background(200); black and white background from 0-255
  background(255, 184, 210); //RGB color

  //drawing a line 
  line(1000, 500, 1000, 500);
  //line function needs a starting point and ending point
  //line (x1, y1, x2, y2)
// draw a line from points (500, 50) to (10, 300)
line(900, 100, 800, 500); //x1,y1,x2,y2

//changing the stroke color (r, g, b)
stroke(255,255, 0);
strokeWeight(20);
//triangle (x1, y1, x2, y2, x3, y3)
triangle(0, 0, 0, 0, 0, 0);

// draw a rectangle 
rect(0, 0, 0, 0);

//changing the fill color
fill(100, 200, 50);

// drawing a quadrilateral 
quad(0, 0, 0, 0, 0, 0, 0, 0);

// drawing a ellipse
ellipse(0, 0, 0, 0);
// ellipse (x, y, w, h)

}
