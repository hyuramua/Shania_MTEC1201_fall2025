class Heart {
 // class for heart to sperate it from other code
   
   
    constructor(x, y){
this.x = x;
this.y = y;
// use of the random function for size of heart

this.r = random(25);

// use of random function for how the hearts fall

this.dy = random(1, 3);

// use of random function so the order of color of the hearts is randomized

this.c = colors[floor(random(colors.length))];
    }

display(){

    // push and pop to return translate back to the original point
    // push starts the translation and pop pushes it back to the original state
    push();
    fill(this.c);

      // translating each heart to where the mouse is dragged 

    translate(this.x, this.y);
  

    // equation to create the heart shape

    beginShape();
    for (let t = 0; t<360; t++){
        let x = this.r*(sqrt(2) * pow(sin(t),3));

        // NEGATIVE  in order to flip the heart the correct way, without negative it would be upside down

        let y = -this.r*( 2 * cos(t) - pow(cos(t), 2) - pow(cos(t), 3));
        vertex(x,y);
    }
    endShape();
    pop();
    }
    // dy is the rate in which the heart falls, function allows fall to happen 

    fall(){
     this.y += this.dy;   
    }
}