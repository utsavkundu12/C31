const Engine = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionHeight = [];
var Particles = [];
var Plinkos = [];

function preload()
{

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world= engine.world;

  //creating the bodies here .
   ground = new Ground(400,700,780,20);

   for(var k =0; k <=width; k=k+80) {
    divisions.push(new Division(i,height-divisionHeight/2,10, divisionHeight));
}
 for(var j=40; j<=width;j= j+50) {
  Plinkos.push(new Plinko(j,75));
 }
 for(var j=15; j<width-10;j=j+50){
 Plinkos.push(new Plinko(j,175));
 }
for (var j=40; j<=width; j=j+50){
  Plinkos.push(new Plinko(j,j+50));
}
for(var j=50; j<=width-10; j=j+50){
Plinkos.push(new Plinko(j,375));
}

  createSprite(400, 200, 50, 50);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  
  drawSprites();

   for(var k = 0;k<divisions.length;k++){
   divisions[k].display;
   }
   if (frameCount %60 ===0){
    Particles.push(new Particles(random(width/2-10,width/2+10),10,10))
   }
   for (var j = 0; j<particles.length;j++){
    particles[j].display();
   }
   for(var j = 0; j<Plinkos.length; j++){
     Plinkos[j].display();
   }
ground.display();
}