var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "teal";
  fixedRect.shapeColor = "teal";
}

function draw() {
  background("yellow");  
  console.log(movingRect.x - fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "teal";
    fixedRect.shapeColor = "teal";
  }
  drawSprites();
}