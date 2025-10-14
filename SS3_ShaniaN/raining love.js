// Shania Narcisse 
// title: Raining Love


// to use this you will need to praise down on your mouse to see
// hearts of various sizes and colors fall gracefully down the screen

// i want my sketches and projecs to keep the continious theme of matching with 
// me and my aesthetic, so pink making an appearence in future sketches is inevitable
// and in this sketch i wanted to teach myself more complicated functions and code
// to reach my goal and the aesthetic in the projects and sketches i create



// my variables
let hearts = [];
let colors = [];


function setup(){
createCanvas(600, 600);
angleMode(DEGREES);
// colors in hex code format 
// i chose hex for the colors of hearts rather than RGB for convenience 
// and so that in my own code i can see the colors i intend to use
colors =[ "#FEE7EF", "#FCBBD2" , "#FA8FB4" , "#F86397", "#F40B5D" ];
}

function draw() {
background(0, 0, 0);
// function for falling hearts
for (let i=0; i<hearts.length; i++) {
    hearts[i].display();
    hearts[i].fall();
}
// deletes hearts after falling off screen for smoother run
for (let i=0; i<hearts.length; i++) {
  if (hearts[i].y > height + 20 )  {
    hearts.splice(i, 1); 
  }
}

}
// press down on the mouse in order to drag hearts across screen
function mouseDragged() {
hearts.push(new Heart(mouseX, mouseY));
}
