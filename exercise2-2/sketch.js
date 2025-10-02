let x;
let y;
function setup(){
    createCanvas(400,400)
    noStroke;
}
function draw(){
    background(0,0,100);
    rectMode(CENTER)
    fill(100,200,300);
    x=mouseX
    y=mouseY
   
    fill(0,200,0);
    if(x>375){
        x=375;
    }
if(y<25){
    y=25;
}
if(x<25){
    x=25
}
if(y>375){
    y=375;
}
square(x,y,50);

}
    
