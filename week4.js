/*
    Paste the code for your week 4 exercise below.
*/

// function setup() {
//     drawingContext.shadowOffsetX = 5;
//     drawingContext.shadowOffsetY = -5;
//     drawingContext.shadowBlur = 10;
//     drawingContext.shadowColor = "black";
//     background(200);
//     ellipse(width/2, height/2, 50, 50);
//   }

  function setup() {
    createCanvas(720, 400);
  }

  function draw() {
    background(200);
    ellipse(width/2, height/2, 50, 50);
    describe('A white circle with black outline in the middle of a gray canvas.');  

    triangle(30, 75, 58, 20, 86, 75);
    describe('A white triangle with a black outline on a gray canvas.');

    //two circles 
    noStroke();
    fill(0, 50);
    circle(160, 160, 50);

    stroke(0);
    fill(255);
    circle(150, 150, 50);

    textFont("helvetica");
    textSize(36);
    text('x:' + mouseX, mouseX, mouseY);
    text('y:' + mouseY, mouseX, mouseY+36);

  }

