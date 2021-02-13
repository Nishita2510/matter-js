
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer
var iron
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground  = new Ground(300,height,1000,20)
 hammer = new Hammer(100,100)
 iron = new Iron(500,690,40,20)
 rubber = new Rubber(400,650,5);
 stone = new Stone(300,690,60,60)
 sand1 = new Sand(300,680,2);
 sand2 = new Sand(340,680,2);
 sand3 = new Sand(350,680,2);
 sand4 = new Sand(220,680,2);
 sand5 = new Sand(250,680,2);
 sand6 = new Sand(430,680,2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  hammer.display();
  iron.display();
  ground.display();
  stone.display();  
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  
  




  drawSprites();
 
}



