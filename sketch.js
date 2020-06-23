const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var division1, division2, division3, division4, division5, division6, division7, division8;
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6;
var plinko7, plinko8, plinko9, plinko10, plinko11, plinko12, plinko13;
var plinko14, plinko15, plinko16, plinko17, plinko18, plinko19;
var plinko20, plinko21, plinko22, plinko23, plinko24, plinko25, plinko26;
var plinko27, plinko28, plinko29, plinko30, plinko31, plinko32;
var plinko33, plinko34, plinko35, plinko36, plinko37, plinko38, plinko39;
var particle;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  division1 = new Division(240, 790, 480, 10);
  division2 = new Division(480, 700, 10, 200);
  division3 = new Division(400, 700, 10, 200);
  division4 = new Division(320, 700, 10, 200);
  division5 = new Division(240, 700, 10, 200);
  division6 = new Division(160, 700, 10, 200);
  division7 = new Division(80, 700, 10, 200);
  division8 = new Division(0, 700, 10, 200);

  plinko1 = new Plinko(40, 250, 10);
  plinko2 = new Plinko(120, 250, 10);
  plinko3 = new Plinko(200, 250, 10);
  plinko4 = new Plinko(280, 250, 10);
  plinko5 = new Plinko(360, 250, 10);
  plinko6 = new Plinko(440, 250, 10);
  plinko7 = new Plinko(0, 300, 10);
  plinko8 = new Plinko(80, 300, 10);
  plinko9 = new Plinko(160, 300, 10);
  plinko10 = new Plinko(240, 300, 10);
  plinko11 = new Plinko(320, 300, 10);
  plinko12 = new Plinko(400, 300, 10);
  plinko13 = new Plinko(480, 300, 10);
  plinko14 = new Plinko(40, 350, 10);
  plinko15 = new Plinko(120, 350, 10);
  plinko16 = new Plinko(200, 350, 10);
  plinko17 = new Plinko(280, 350, 10);
  plinko18 = new Plinko(360, 350, 10);
  plinko19 = new Plinko(440, 350, 10);
  plinko20 = new Plinko(0, 400, 10);
  plinko21 = new Plinko(80, 400, 10);
  plinko22 = new Plinko(160, 400, 10);
  plinko23 = new Plinko(240, 400, 10);
  plinko24 = new Plinko(320, 400, 10);
  plinko25 = new Plinko(400, 400, 10);
  plinko26 = new Plinko(480, 400, 10);
  plinko27 = new Plinko(40, 450, 10);
  plinko28 = new Plinko(120, 450, 10);
  plinko29 = new Plinko(200, 450, 10);
  plinko30 = new Plinko(280, 450, 10);
  plinko31 = new Plinko(360, 450, 10);
  plinko32 = new Plinko(440, 450, 10);
  plinko33 = new Plinko(0, 500, 10);
  plinko34 = new Plinko(80, 500, 10);
  plinko35 = new Plinko(160, 500, 10);
  plinko36 = new Plinko(240, 500, 10);
  plinko37 = new Plinko(320, 500, 10);
  plinko38 = new Plinko(400, 500, 10);
  plinko39 = new Plinko(480, 500, 10);

 x = random(10, 470);

  particle = new Particle(x, 100, 5);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  division1.display();
  division2.display();
  division3.display(); 
  division4.display(); 
  division5.display();
  division6.display(); 
  division7.display(); 
  division8.display(); 

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();

  particle.display();


 
}