
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(400,400);  
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x = ground.width /2;
  console.log(ground.x);

  
}


function draw() {
background(225);
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
  if (keyDown("space")){
monkey.velocityY = -12;    
  }
 monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text ("SURVIVAL TIME:"+survivalTime,100,50);
  
  
 spawnbanana();
  spawnobstacle();
  drawSprites();
}


function spawnbanana(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(200,130));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 135;
  }
}

function spawnobstacle(){
   if (frameCount % 80 === 0) {
    var obstacle = createSprite(400,330,40,10);

    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
     obstacle.lifetime = 135;
}

}