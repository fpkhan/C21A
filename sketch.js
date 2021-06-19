var bullet, wall, speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
  bullet = createSprite(50,200,20,10);
  wall = createSprite(1500,200,thickness,height/2);

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  bullet.shapeColor = color(80,80,80);
  wall.shapeColor = color(225,80,0);
    
  console.log(damage);
  console.log(speed);
}

function draw() {
  background(255,255,255);
  bullet.velocityX = speed; 

  if (wall.x - bullet.x < (wall.width+bullet.width)/2) {
    
    
    bullet.velocityX = 0;

    if (damage > 10) {

      wall.shapeColor = color(255,0,0);

      
    }
    if (damage < 10) {

      wall.shapeColor = color(0,255,0);
      
    }

  }
  drawSprites();
}
