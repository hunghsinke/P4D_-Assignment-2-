/*
    Paste the code for your week 3 exercise below.
*/
let circles = [];

function setup() {
  createCanvas(600, 400);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(255);

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

function mouseMoved() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let size = random(10, 50);

  let newCircle = new Circle(mouseX, mouseY, size, r, g, b);
  circles.push(newCircle);

  // Limit the number of circles to prevent lag
  if (circles.length > 50) {
    circles.shift();
  }
}

class Circle {
  constructor(x, y, size, r, g, b) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the canvas edges
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    stroke(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size);
  }
}