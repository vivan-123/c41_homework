const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var person,drops = [];

function preload(){
   
}

function setup(){
    //physics engine
    engine = Engine.create();
    world = engine.world;

    //canvas
    canvas = createCanvas(1400,800);
    canvas.position(20,10);

    //Person holding umbrella
    person = new Umbrella(700,620,100);

    if (frameCount%100 === 0)
    {
        //droplets objects
        for (var i = 0;i<100;i++)
        {
            drops[i] = new Drop(random(0,1400),random(-10,-1000));
        }
    }
    
}

function draw(){
    //background
    background("black");

    //update engine
    Engine.update(engine);

    //display peron
    person.display();

    //droplets objects
    for (var i = 0;i<100;i++)
    {
        drops[i].display();
        drops[i].update();
    }

}   

