const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var ball,polygon_img,backgroundImg;
var slingShot;
var score = 0;

function preload(){
    polygon_img=loadImage("polygon.png");
    getBackgroundImg();
  }

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,490,1000,25);
    stand1 = new Ground(470,330,250,10);
    stand2 = new Ground(770,210,200,10);

    //level four
    box1 = new Box(380,310,30,40);
    box2 = new Box(410,310,30,40);
    box3 = new Box(440,310,30,40);
    box4 = new Box(470,310,30,40);
    box5 = new Box(500,310,30,40);
    box6 = new Box(530,310,30,40);
    box7 = new Box(560,310,30,40);
    //level three
    box8 = new Box(410,270,30,40);
    box9 = new Box(440,270,30,40);
    box10 = new Box(470,270,30,40);
    box11 = new Box(500,270,30,40);
    box12 = new Box(530,270,30,40);
    //level two
    box13 = new Box(440,230,30,40);
    box14 = new Box(470,230,30,40);
    box15 = new Box(500,230,30,40);
    //level one 
    box16 = new Box(470,190,30,40);

    //level three
    block1 = new Box(710,175,30,40);
    block2 = new Box(740,175,30,40);
    block3 = new Box(770,175,30,40);
    block4 = new Box(800,175,30,40);
    block5 = new Box(830,175,30,40);
    //level two
    block6 = new Box(740,135,30,40);
    block7 = new Box(770,135,30,40);
    block8 = new Box(800,135,30,40);
    //top
    block9 = new Box(770,95,30,40);

    ball = Bodies.circle(110,260,20);
    World.add(world,ball);
  
    slingShot = new Slingshot(this.ball,{x:120,y:270});

}

function draw(){
    if(backgroundImg){
       background(backgroundImg);
    }
    Engine.update(engine);
    
    textSize(25);
    fill("yellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",30,30);
    textSize(30);
    text("Press Space to get a second Chance to Play!!",150 ,450);
    textSize(25);
    text("SCORE: "+ score,840,50);
    ground.display();
    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();

    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("turquoise");
    block6.display();
    block7.display();
    block8.display();
    fill("pink")
    block9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();

    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
  }  

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "Day.jpg";
    }
    else{
        bg = "Night.jpg";
    }

    backgroundImg = loadImage(bg);
}
  