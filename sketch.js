
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var engine,world;
var rope;
var bobObj1, bobObj2,  bobObj3,  bobObj4,  bobObj5;
var bob;
var rope1, rope2, rope3, rope4, rope5;
var roofObject;



function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
  world = engine.world;
  
  //Create the Bodies Here.	
	bobObj1= new bob(200, 200, 40, PI/2);
	bobObj2= new bob(240, 200, 40, PI/2);
	bobObj3= new bob(280, 200, 40, PI/2);
	bobObj4= new bob(320, 200, 40, PI/2);
	bobObj5= new bob(360, 200, 40, Pi/2); 

	 
   rope1=new rope(bobObj1.body, roofObject.body, -bobDiameter*2,0);
   rope2=new rope(bobObj2.body, roofObject.body, -bobDiameter*2,0);
   rope3=new rope(bobObj3.body, roofObject.body, -bobDiameter*2,0);
   rope4=new rope(bobObj4.body, roofObject.body, -bobDiameter*2,0);
   rope5=new rope(bobObj5.body, roofObject.body,-bobDiameter*2,0);
   
  //Create a Ground
  
  var Render = Render.create({
    element: cdocument.body,
    engine:{
      width: 1200,
      height: 700,
      wireframes: false

    }

  });
  
  //Create the Bodies Here
  var ground_options={
    isStatic: true
  }
	


  Engine.run(engine);
  //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 drawSprites();
 
}



