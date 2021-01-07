var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  canvas = createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 150, 20);
  wall = createSprite(1200, 200, thickness, 800);

  thickness = random(22, 83);
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

  collision();

  drawSprites();
}

function collision() {
  if(isTouching(bullet, wall)) {
    var damage = (0.5 * weight * speed * speed) / (thickness*thickness*thickness)
    bullet.velocityX = 0

    if(damage < 3.68) {
      bullet.shapeColor = "green";
    } else if(damage > 3.68) {
      bullet.shapeColor = "red";
    }
    console.log(damage);
  }
}