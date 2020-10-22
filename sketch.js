const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var object;
var ground,ball;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  
  
 
  console.log(object);
 // object.speed=5;

  var object_options={
      isStatic:true
  }
  ground= Bodies.rectangle(600,height,1200,20,object_options);
  World.add(world,ground);

 /* var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);*/

  box1= new Box(700,320,70,70);
  box2= new Box(920,320,70,70);
  pig1= new Pig(810,350);
  log1= new Log(810,260,300,PI/2);

  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  pig2= new Pig(810,220);
  log2= new Log(810,180,300,PI/2);

  box5= new Box(810,160,70,70);
  log3= new Log(760,120,150,PI/7);
  log4= new Log(870,120,150,6*PI/7);

  bird = new Bird(100,100);
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
  box1.display();
  box2.display();
  log1.display();

  box3.display();
  box4.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  pig1.display();
  pig2.display();

  bird.display();

  /*ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)*/

}