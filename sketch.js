var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(200,400,50,50);
  rect1.shapeColor="yellow";
  rect2=createSprite(700,400,50,50);
  rect2.shapeColor="yellow";
  rect1.velocityX=5;
  rect2.velocityX=-5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);

mybounce(movingRect,fixedRect);
mybounce(rect1,rect2);
  
  drawSprites();
}





