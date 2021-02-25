
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	mg1 = new mango(900,150,8);
	mg2 = new mango(1000,100,10);
	mg3 = new mango(1000,150,7);
	mg4 = new mango(950,65,9);
	mg5 = new mango(1070,60,6);
	mg6 = new mango(1120,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background(backgroundImg);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	mg1.display();
	mg2.display();
	mg3.display();
	mg4.display();
	mg5.display();
	mg6.display();
	collision(rock,mg1);
	collision(rock,mg2);
	collision(rock,mg3);
	collision(rock,mg4);
	collision(rock,mg5);
	collision(rock,mg6);

	strokeWeight(3);
	stroke(0);
	fill(255);
    text('PLUCK THE MANGOES🥭🥭', 285, 22);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}