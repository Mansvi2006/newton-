
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var roofObj,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObj=new ground(width/2,50,600,50);

	bobObject1=new Bob(200,600);
	bobObject2=new Bob(300,600);
	bobObject3=new Bob(400,600);
	bobObject4=new Bob(500,600);
	bobObject5=new Bob(600,600);

	rope1=new Rope(bobObject1.body,roofObj.body,-bobObject1.Diameter*2,0);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  text(mouseX + ", " + mouseY, 100,100);
  
  roofObj.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();

  
  drawSprites();
 
}



