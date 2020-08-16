var seconds,minutes,hours;

function setup(){
    createCanvas(600,600);
    angleMode(DEGREES);
}
function draw(){
    background(0);
    noStroke();
    textSize(25);
    textAlign(CENTER);
    fill(255);
    text("Clock by Hritik Aswani",width/2,50);
    fill(255,10,255);
    text("Time: "+hour()+":"+minute()+":"+second(),width/2,85);
    textSize(20);
    fill(255);
    textAlign(LEFT);
    text("hour:",50,height - 100);
    text("minute:",50,height - 70);
    text("second:",50,height - 40);

    hours = hour();
    minutes = minute();
    seconds = second();

    fill(0,0,255);
    rect(100,height - 120, 25, 25);
    fill(0,255,0);
    rect(120,height - 90, 25, 25);
    fill(255,0,0);
    rect(125, height - 60, 25, 25);

    translate(width/2,height/2);

    noFill();

    stroke(255,0,0);
    strokeWeight(2);
    let secondAngle = map(seconds,0,60,0,360);
    arc(0,0,360,360,270,secondAngle - 90);
    push();
    rotate(secondAngle);
    line(0,0,0,-150);
    pop();

    stroke(0,255,0);
    strokeWeight(4);
    let minuteAngle = map(minutes,0,60,0,360);
    arc(0,0,380,380,270,minuteAngle - 90);
    push();
    rotate(minuteAngle);
    line(0,0,0,-125);
    pop();

    stroke(0,0,255);
    strokeWeight(6);
    let hourAngle = map(hours,0,12,0,360);
    arc(0,0,400,400,270,hourAngle - 90);
    push();
    rotate(hourAngle);
    line(0,0,0,-100);
    pop();

    stroke(255);
    strokeWeight(5);
    point(0,0);
}