var monkey,monkey_running;
var banana,bananaImage,obstacle,obstacleImage;
var FoodGroup,obstacleGroup
var survivalTime=0;


function preload(){
 monkeyImage = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png"); 
obstacleImage=loadImage("obstacle.png");
}

function setup(){
 createCanvas(600,500);

 monkey = createSprite(40,315,20,20);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1;
  

  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
bananaGroup=new Group();
obstacleGroup=new Group();
}



function draw(){
 background(255);
  
stroke("white")
textSize(20);
fill("white")

  
stroke("black")
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime,200,50);
  
if (ground.x<0){
ground.x=ground.width/2;
}

if (keyDown("space")){
monkey.velocityY=-12;
}
  
  if(obstacleGroup.isTouching(monkey)){     
    monkey.scale = 0.1;
    obstacleGroup.destroyEach();
  }
  
  if(bananaGroup.isTouching(monkey)){
    survivalTime = survivalTime +2;
    bananaGroup.destroyEach();
  }
monkey.velocityY=monkey.velocityY+0.8;
  
monkey.collide(ground);
  
Spawnbanana();
Spawnobstacles();

drawSprites();
 }

function Spawnbanana(){
if (frameCount% 80===0){
banana=createSprite(100,150,20,20);
banana.y=Math.round(random(120,200));
banana.addImage(bananaImage);
banana.velocityX=-5;
banana.scale=0.1;
bananaGroup.add(banana);
}
}

function Spawnobstacles(){
if (frameCount% 100===0){
obstacle=createSprite(400,330,20,20);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
obstacle.velocityX=-5;
obstacleGroup.add(obstacle);
}
}
    

  


