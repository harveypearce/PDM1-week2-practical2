function setup() {
    createCanvas(400, 400);
    noStroke();
      background(0);
    fill(255, 0, 150);
}

function draw() {
    if (mouseIsPressed) {
        circle(random(0,400),random(0,400),random(10,100));
    }
   if (keyIsPressed){
    background(0)};
}