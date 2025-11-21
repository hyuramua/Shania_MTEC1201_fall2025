// Shania Narcisse
// wallpaper using arrays




let cols; let rows;
let spacing = 10;
let size = [];

// setting up rows and columns 

function setup() {
  createCanvas(800, 800);
cols = width/spacing;
rows = height/spacing;
for(let i=0; i<cols; i++){
  size[i] = [];
  for(let j=0; j<rows; j++){

// diff way the circles can go


//( starting from the bottom )
//size[i][j]= (j+2)/rows*spacing; 


// ( side ways - right)
//size[i][j]= (i+2)/cols*spacing; 

// ( side ways - left)
//size[i][j]= (cols-i)/cols*spacing; 


// (starting from the top)
size[i][j]= (rows-j)/rows*spacing; 
  

}
}
print(size);
}

function draw() {
  background(223, 97, 154);
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
    noStroke();
      fill(j/rows*255,255,255);
      ellipse(spacing/4+i*spacing, spacing/4+j*spacing, size[i][j], size[i][j]);
    }
  }
 
}
