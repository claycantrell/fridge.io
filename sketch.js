//module aliases
var Engine = Matter.Engine,
//Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup(){
    createCanvas(400, 400);
    engine = Engine.create();
    engine.gravity.scale = 0.00;
    world = engine.world;
    Engine.run(engine);
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, height, width, 10, options);
    World.add(world, ground);
}

function mouseClicked(){
     boxes.push(new Box(mouseX,mouseY,160,40));
     console.log(boxes);
}

function mouseDragged(){

}


 function draw(){
     background(51);
      for(var i = 0; i < boxes.length; i++){
          boxes[i].show();
      }
 }

 