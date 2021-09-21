var dino;
var dinoRun;



function preload(){
  dinoRun=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  dino=createSprite(50,160,20,50);
  dino.addAnimation("running",dinoRun);
 dino.scale=0.5;
}

function draw(){
  background("white");
  if(keyDown("space")){
    dino.velocityY=-3;
  }
  dino.velocityY=dino.velocityY+0.8;
drawSprites();
}