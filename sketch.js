
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, dustbin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 670, width, 20);
	paper = new Paper(100, 100, 50);
	dustbin = new Dustbin(600, 650);



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  ground.display();
  paper.display();
  dustbin.display();

 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:320, y:-550});
	}

}


