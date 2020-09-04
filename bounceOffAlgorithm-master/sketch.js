var fixedRect, movingRect, sprite1,sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1=createSprite(200,200,20,20);
  sprite1.shapeColor="blue"
  sprite2=createSprite(200,700,20,20);
  sprite2.shapeColor="red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  sprite1.velocityY=5;
  sprite2.velocityY=-5;
}

function draw() {
  background(0,0,0);  
//bounceOff(movingRect,fixedRect);
//bounceOff(sprite1,sprite2);
  drawSprites();





  if(bounceOff(sprite1,sprite2)){
    sprite1.velocityX = sprite1.velocityX * (-1);
    sprite2.velocityX = sprite2.velocityX * (-1);

    sprite1.velocityY = sprite1.velocityY * (-1);
    sprite2.velocityY = sprite2.velocityY * (-1);


  }
}






function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return false;

    }


}