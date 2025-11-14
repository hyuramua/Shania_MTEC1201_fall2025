let phrase = "RAZZLE DAZZLE"
let displayText = [];
let r = 100;
//named variable mv for "move" and "pos" for position

let pos = []; let mv = 0.5;

function setup() {
createCanvas(500, 500);
textAlign(CENTER, CENTER);
textSize(30);

// splitting text so each letter of the phrase is split individually

displayText = phrase.split("");

for (let i=0; i<displayText.length; i++) {

// giving every letter in the display text its own position


// vector to hold more than one value, here to hold the X and Y coordinates 

  pos.push(createVector(mouseX, mouseY));
}
}

function draw() {
  background(255, 166, 161);

  
  update();

  // for loop declaring i as 0
  
for (let i=0; i<displayText.length; i++) {

  // spacing to have each letter of text spread evenly 
  
  let angle = TWO_PI/displayText.length * i;
  let x = pos[i].x + r * cos(angle);
  let y = pos[i].y + r * sin(angle);
  text(displayText[i], x, y);
}
}

// update function to update the position of the previous function


function update() {

  // lerp function in order to have the letters follow the mouse 
  pos[0].x = lerp(pos[0].x, mouseX, mv);
  pos[0].y = lerp(pos[0].y, mouseY, mv);

// giving the mouse position and the letter position for both x and y 

  for (let i=1; i<displayText.length; i++) {
 pos[i].x = lerp(pos[i].x, pos[i-1].x, mv);
 pos[i].y = lerp(pos[i].y, pos[i-1].y, mv);
  }
}

// the theme i am trying to explore this semester is 
// using code to create pictures that match up with me, my personality and aesthetic
//this is a very simple project i wanted to learn how to make 
// so the instructions are simple and you just need to move your 
// mouse to see the letters move along the screen!