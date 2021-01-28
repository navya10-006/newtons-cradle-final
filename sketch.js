const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5
var bobDiameter=50;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bob1=new Bob(300,300,30,1.5);
	bob2=new Bob(320,300,30,1.5);
	bob3=new Bob(370,300,30,1.5);
	bob4=new Bob(410,300,30,1.5);
  bob5=new Bob(465,300,30,1.5);
  
  roof=new Roof(400,50,550,30);
  
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2.5,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1.5,0);
	rope3=new Rope(bob3.body,roof.body,-bobDiameter*0.25,0);
	rope4=new Rope(bob4.body,roof.body,-bobDiameter*-1.05,0);
	rope5=new Rope(bob5.body,roof.body,-bobDiameter*-2.025,0);
	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background("yellow");
  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-200});
  }
}