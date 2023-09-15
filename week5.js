/*
    Paste the code for your week 5 exercise below.
*/
let squareSize = []
let numSquares = 5
let spacing 
let margin = 10

function setup(){
    createCanvas(400, 400)
    noFill();
    rectMode(CENTER);//shape start in the centre 
    colorMode(HSB);// 
    frameRate = 30
    for(i = 0; i < numSquares; i++){
        squareSize[i] = i * margin
    }

}

function draw() {
    background(255);//reset background to white 
    translate(width / 2, height / 2);
    rotate(frameCount / 100);   
    for(i = 0; i < numSquares; i++){
        
        strokeWeight(4);
        stroke(i * 50, 100, 100);
        //rotate colourful square
      

        // square(width /2, height /2, squareSize[i]);
        square(0, 0, squareSize[i]);
        squareSize[i] += 1 ;
        if(squareSize[i] >= width /2 ){
            squareSize[i] = 0;
        }
        
    }

    //rotate
    rotate(-frameCount/50);
    square(0, 0, 50);
  } 

  myString = "Hello World!";
  let result = myString.substring(3,7);
  //alert(result);
  console.log(result);
