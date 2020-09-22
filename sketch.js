
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700, 400);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //creating moving ground
  ground = createSprite(400,350,1600,20);
  ground.velocityX = -4;
  //console.log(ground.x);
  
  //creating food and obstacle groups 
  foodGroup = createGroup ();
  obstacleGroup = createGroup();
  
  score = 0;
  survivalTime = 0;
}


function draw() {
  background(220);
  
  //creating score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/60);
  
  //creating survival time
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.4;
  //console.log(monkey.y);
  
  Food();
  obstacles();
  
  drawSprites();
}



function Food() {
  if (frameCount % 80 === 0){
    var banana = createSprite(700, 400, 20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    
    banana.lifetime = 250;
    foodGroup.add(banana);
    }
}


function obstacles() {
  if (frameCount % 300 === 0){
   var obstacle = createSprite(700,300,20,20);
   obstacle.velocityX = -4;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.3;
    
   obstacle.lifetime = 250;
   obstacleGroup.add(obstacle);
  }
}



