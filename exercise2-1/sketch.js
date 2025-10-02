function setup(){
    createCanvas(600,600)
    noStroke;
}
function draw(){
    if (mouseIsPressed){
        background(100,100,0);
        fill(255);
        circle(width/2,height/2,width*0.8);

    }
    else{
        background(255);
        fill(100,100,0);
        circle(width/2,height/2,width*0.8);
    }

}

s
