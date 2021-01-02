var canvas;
var edges;
var music;
var surface1, surface2, surface3, surface4;
var box;
var rand;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    //creating canvas
    canvas = createCanvas(800,600);

    //playing sound
    music.play();

    //creating 4 different surfaces
    surface1 = createSprite(100,570,190,20);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,570,190,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,570,190,20);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,570,190,20);
    surface4.shapeColor = "yellow";

    //creating box sprite and giving velocity
    box = createSprite(400,300,40,40);
    box.x = random(20,780);
    box.y = random(50,250);
    box.shapeColor = "white";
    box.velocityX = random(-10,10);
    box.velocityY = random(-10,10);
}

function draw() {
    //background colour
    background(rgb(169,169,169));

    //creating edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "blue";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "green";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "yellow";
    }

    rand = Math.round(random(1,4));
    console.log(rand);
    if(surface1.isTouching(box) && rand === 1) {
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    } else 
    if(surface2.isTouching(box) && rand === 2) {
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    } else 
    if(surface3.isTouching(box) && rand === 3) {
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    } else 
    if(surface4.isTouching(box) && rand === 4) {
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    //displaying sprites
    drawSprites();
}
