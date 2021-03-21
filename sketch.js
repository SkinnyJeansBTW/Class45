const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var battleship, enemy1, ground, backgroundImg, battleshipImg;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10;

var engine, world;

function preload(){

battleshipImg = loadImage("Images/Helicopter.jpg")

}

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground()
    battleship = new Battleship(200,100,70,70)

    enemy1 = new Enemy()
    enemy2 = new Enemy()
    enemy3 = new Enemy()
    enemy5 = new Enemy()
    enemy6 = new Enemy()
    enemy7 = new Enemy()
    enemy8 = new Enemy()
    enemy9 = new Enemy()
    enemy10 = new Enemy(1000,50,70,70)


  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}