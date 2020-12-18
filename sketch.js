var maxDrops = 100;
var dropsArray = [];
var umbrellaBody;
var dropCount = 0;
var lightning1,lightning2,lightning3,lightning4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    lightning1 = loadImage("1.png");
    lightning2 = loadImage("2.png");
    lightning3 = loadImage("3.png");
    lightning4 = loadImage("4.png");
}
function setup(){
    createCanvas(1600, 700);

	engine = Engine.create();
    world = engine.world;
    
   
    umbrellaBody = new umbrella(800,540)
    Engine.run(engine);
}
function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    background(0);
    for(var i = 0; i < maxDrops; i++){
        if(dropCount == 0){
            dropsArray.push(new drops(random(0,1600),0));
        }
        dropCount = 1;
    }
    for(var j = 0; j < dropsArray.length; j++){
        if(dropCount = 1){
            dropsArray[j].display();
            dropCount = 0;
        }
    }
    umbrellaBody.display();
    if(frameCount % 60 === 0) {
        var lightning = createSprite(random(100,1500),0,10,40);
        
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: lightning.addImage(lightning1);
                  break;
          case 2: lightning.addImage(lightning2);
                  break;
          case 3: lightning.addImage(lightning3);
                  break;
          case 4: lightning.addImage(lightning4);
                  break;
          default: break;
        }
        lightning.scale = 0.5;
        lightning.lifetime = 35;
    }
    drawSprites();
}   

