const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  ball = Bodies.circle (50,70,30,{
    restitution:1

  })
  World.add(world,ball);
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(ground);
}

function draw() {
  background("black");
  drawSprites();
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);


  
}