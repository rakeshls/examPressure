var baby,babyImage;
var ladderImg;
 function perload(){
  //babyImage = loadAnimation("Images/baby1.png","Images/baby2.png");
  babyImage = loadImage("Images/baby2.png");
  ladderImg = loadImage("Images/ladder.png");
} 
function setup(){
  createCanvas(600,600);
  baby = createSprite(20,height-50,30,10);
  //baby.addAnimation("running",babyImage);
  //baby.addImage(babyImage);
}
function draw(){
  background("LightBlue");
  if(keyDown(RIGHT_ARROW)){
    baby.x = baby.x+2;
  }
  ladders();
  //if(keyDown(L))
  drawSprites();
}
function ladders(){
  if(frameCount%60 === 0){
var ladder = createSprite(600,50,10,10);
ladder.addImage(ladderImg);
ladder.velocityX = -3;
  }
}

