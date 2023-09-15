/*
    Paste the code for your week 4 exercise below.
*/
let angle = 0; // Initialise a variable 'angle', and set it to zero

function setup() {
  createCanvas(600, 600); // Create a canvas with a size of 400x400 pixels.
  noFill(); // Don't fill shapes with color by default.
  stroke(0); // Set the stroke color to black (0).
}

function draw() {
  background(200); // Set the background color to white (255).

  translate(width / 2, height / 2); // Translate the origin to the center of the canvas.

  // Rotate the entire logo
  angle += 0.01; // Increment the 'angle' variable to create rotation.
  rotate(angle); // Apply a rotation transformation to the entire drawing.

  // Draw a rotating 6-angle (hexagon)
  for (let i = 0; i < 6; i++) {
    // Calculate the coordinates of the hexagon's vertices based on the angle and radius.
    let x1 = cos(TWO_PI / 6 * i) * 100; // Calculate x-coordinate of the current vertex.
    let y1 = sin(TWO_PI / 6 * i) * 100; // Calculate y-coordinate of the current vertex.
    let x2 = cos(TWO_PI / 6 * (i + 1)) * 100; // Calculate x-coordinate of the next vertex.
    let y2 = sin(TWO_PI / 6 * (i + 1)) * 100; // Calculate y-coordinate of the next vertex.
    line(x1, y1, x2, y2); // Draw a line connecting two consecutive vertices to form a side of the hexagon.
  }

  // Define the center and radius of the logo
  let centerX = width / 2; // Calculate the horizontal center of the canvas.
  let centerY = height / 2; // Calculate the vertical center of the canvas.
  let radius = 100; // Set the radius of the central circle to 100 pixels.

  // Generate a random color
  let r = random(255); // Generate a random red component (0-255).
  let g = random(255); // Generate a random green component (0-255).
  let b = random(255); // Generate a random blue component (0-255).

  // Draw a circle with a random color
  fill(r, g, b); // Set the fill color to the generated random color.
  noStroke(); // Disable stroke (outline) for the circle.
  ellipse(centerX, centerY, radius * 2); // Draw a circle at the canvas center.

  // Draw additional circles with random colors
  for (let i = 0; i < 5; i++) { // Repeat the following block 5 times.
    let x = random(width); // Generate a random horizontal position.
    let y = random(height); // Generate a random vertical position.
    let r = random(45, 160); // Generate a random radius between 50 and 150 pixels.
    let circleColor = color(random(255), random(255), random(255), random(80, 200)); // Generate a random color with alpha (transparency).
    fill(circleColor); // Set the fill color to the generated random color.
    ellipse(x, y, r * 2); // Draw an ellipse (circle) with the specified parameters.
  }

  // Draw a fish
  fill(255, 140, 0); // Set the fill color to orange for the fish body
  triangle(50, 0, 100, 30, 100, -30); // Draw the fish body (triangle)
  fill(0); // Set the fill color to black for the eye
  ellipse(70, 0, 10, 10); // Draw the fish's eye


   // Add the name to the logo
   textSize(24); // Set the text size.
   textAlign(CENTER, TOP); // Set text alignment to center horizontally and top vertically.
   fill(0); // Set text color to black.
   text("HK Design", 0, 120); // Replace "Your Name" with your desired name.

  // NoLoop to draw the logo once
  noLoop(); // Stop the draw loop to draw the logo only once.
}

