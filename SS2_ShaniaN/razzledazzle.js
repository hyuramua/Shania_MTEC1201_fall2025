let phrase = "RAZZLE DAZZLE"
let displayText = [];
let r = 100;
//named variable mv for "move"
let pos = []; let mv = 0.5;

function setup() {
createCanvas(500, 500);
textAlign(CENTER, CENTER);
textSize(10);
displayText = phrase.split("");

for (let i=0; i<displayText.length; i++) {
  pos.push(createVector(mouseX, mouseY));
}
}

function draw() {
  background(255, 166, 161);
  update();
for (let i=0; i<displayText.length; i++) {
  let angle = TWO_PI/displayText.length * i;
  let x = pos[i].x + r * cos(angle);
  let y = pos[i].y + r * sin(angle);
  text(displayText[i], x, y);
}
}

function update() {
  pos[0].x = lerp(pos[0].x, mouseX, mv);
  pos[0].y = lerp(pos[0].y, mouseY, mv);

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