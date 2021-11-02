var bg, bgImg
var player, playerImg

function preload(){
bgImg = loadImage("assets/tre.jpg")
//playerImg =  loadImage ('assets/')
//
//balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
//background image
bg = createSprite(width/2,height/2);
bg.addImage(bgImg);
bg.scale = 2.1;
bg.velocityX= -4




}

function draw() {
  //background(bgImg)
  
        
  if (bg.x < -50){
    bg.x = bg.width/2;
  }
   
        drawSprites();
        
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}