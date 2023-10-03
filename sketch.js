
var trex ,trex_running;
var ground,ground_Image,invisibleGround
function preload(){
  ground_Image=loadImage("ground2.png")
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
 

}

function setup(){
  createCanvas(600,200)
   trex=createSprite(30,170,20,500)
   trex.scale=0.5
   trex.addAnimation("running",trex_running)
  //create a trex sprite
  ground=createSprite (300,190,600,2)
  ground.addImage(ground_Image)

  ground.x=ground.width/2
  ground.velocityX=-3
  invisibleGround=createSprite (300,195,600,2)
  invisibleGround.visible=false
}

function draw(){
  background("white")
 console.log(trex.y)
 if(ground.x<0){
  ground.x=ground.width/2
 }
if(keyDown("space")&&trex.y>=170){
trex.velocityY=-10

}
trex.velocityY=trex.velocityY+0.5
trex.collide(invisibleGround)
drawSprites()
}
