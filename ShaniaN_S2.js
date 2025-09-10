function setup() {
  createCanvas(400, 400);

  //set background color to pink
background(251, 198, 207);

//fill fur
fill(212, 166, 119);

strokeWeight(5);
stroke(161, 117, 76);
//draw circle (head)
  circle (200, 200, 200);

  //body
  ellipse(200, 430, 200, 200)
//left ear
circle(100, 125, 50);
//right ear
circle(300, 125, 50);

//inner ears left and right
fill(237, 193, 149);
circle(290, 135, 20);
circle(110, 135, 20);

stroke(158, 47, 84);
//fill nose
fill(230, 119, 140);

//nose
circle(200, 220, 30);

//fill eyes
fill(0,0,0);

//fill lines
stroke(0, 0, 0);
//eyes
circle(150, 185, 50);
circle(250, 185, 50);

//fill eye shines
fill(255, 255, 255);

//eyeshine left
circle(160, 195, 20);
circle(140, 175, 30);

//eyeshine right
circle(260, 195, 20);
circle(240, 175, 30);

//fill hat color
fill(31, 31, 31);

//hat base 
ellipse(200, 120, 200, 40, 6)

//hat middle
rect(125, 40, 150, 80);

//hat top
ellipse(200, 40, 150, 40, 6);

//bowtie
circle(200, 400, 30);
circle(200, 350, 30);

//fill smile
fill(255, 255, 255);
 // CHORD fill mode.
 //smile
  arc(200, 250, 40, 100, 0, PI + QUARTER_PI, CHORD);

  describe('A white circle with a black outline missing a section from the top-right.');


}
