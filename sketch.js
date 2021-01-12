
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter=40;

var engine,world;
var b1,b2,b3,b4,b5,b6,b7;
var gRo,chain1,chain2,chain3,chain4,chain5,chain6,chain7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(240,516,80);
	b2 = new Bob(320,516,80);
	b3 = new Bob(400,516,80);
	b4 = new Bob(480,516,80);
	b5 = new Bob(560,516,80);


	gRo = new ground(400,100,600,50);
	chain1 = new Chain(b1.body,gRo.body,-bobDiameter*4.2, 60);
	chain2 = new Chain(b2.body,gRo.body,-bobDiameter*2.2, 60);
	chain3 = new Chain(b3.body,gRo.body,-bobDiameter*0.2, 60);
	chain4 = new Chain(b4.body,gRo.body,bobDiameter*1.7, 60);
	chain5 = new Chain(b5.body,gRo.body,bobDiameter*3.7, 60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  gRo.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();



  drawSprites();

  
 
}

function keyPressed()
 {
    if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-250,y:-245}); 
  } 

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-250,y:-245}); 
  } 

}



