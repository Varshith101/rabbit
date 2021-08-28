var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leafImg;
var apple;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png","orangeLeaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

edges = createEdgeSprites();

}


function draw() {
  background(0);

  
  
  if(garden.x<0){
    garden.x=garden.height/2;
  }

  
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  createApples()
  createLeaves()

  


    drawSprites();
  
  
  
  

}
 

  




function createApples(){
  var select_sprites=Math.round(random(1,2));
    if(frameCount%60==0){
      apple = createSprite(50,50,40,10);
     
      apple.addImage(appleImg)
      apple.scale = 0.1;
      apple.velocityY = 2;
      apple.lifetime=400;

    }
  
  
  
}



function createLeaves(){
if(frameCount%60==0){

  leaf=createSprite(200,50,50,10);
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=2;
  leaf.lifetime=400;


}


}
  


