function setup() {
  createCanvas(800,500)
 
}
function mousePressed()
{  fill(255,0,0)

  rect(0,0,200,200);
  return false;
}
function draw() {
  background(width-mouseX,height-mouseY,height-width)
  fill(0,255,100)
  rect(width-mouseX,height-mouseY,100,100)
  fill(width-mouseX,height-mouseY,100)
  rect(height-mouseY+50,width-mouseX+50,100,100)
  fill(0,255,100)
  rect(width-mouseX,height-mouseY,100,100)
  fill(width-mouseX,height-mouseY,100)
  rect(height-mouseY+50,width-mouseX+50,100,100)
  fill(0,255,100)
  rect(width-10,height+10,100,100)
  fill(width-mouseX,height-mouseY,100)
  rect(random(255),random(255)-50,100,100)
  fill(0,255,100)
  rect(random(255)+20,height-mouseY-30,100,100)
  fill(width-mouseX,height-mouseY,100)
  rect(height-mouseY+40,random(255)-12,100,100)
  
  
}
