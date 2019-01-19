var gravity = 0.2;
var bean;
var boxA;
var boxB;


function setup() {
	var canvas = createCanvas(720, 400);
	canvas.parent('game')
	bean = new piskel;
	boxA = new platform(290,350);
	boxB = new platform(65,300);
	frameRate(60);
}



function draw() {
	background(153, 255, 153);
	bean.onGround = false;
	boxA.show();
	boxA.collide();
	boxB.show();
	boxB.collide();
	bean.walls();
	controls();
	bean.update();
	bean.show();
}  

  
  
function controls(){
	bean.speedx = 0;

	
	if (keyIsDown(LEFT_ARROW)){
		bean.speedx = -2;
	}
	if (keyIsDown(RIGHT_ARROW)){
		bean.speedx = 2;
	}
	if (keyIsDown(UP_ARROW) && !bean.onLadder && bean.onGround){
		bean.speedy = -5;
		bean.y += -1;
		bean.onGround = false;
	}
	if (keyIsDown(DOWN_ARROW)){
		bean.speedy = 2;
	}
}