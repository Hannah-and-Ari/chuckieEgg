function piskel(){
	this.x = 100;
	this.y = 1;
	this.width = 20;
	this.height = 20
	this.speedx = 0;
	this.speedy = 0;
	
	this.onGround = false;
	this.onLadder = false;
	
	this.update = function () {
		//regular movement
		this.x = this.speedx + this.x;
		this.y = this.speedy + this.y;
		//keeping bean inside the play area
		this.x = constrain(this.x, 0, width-this.width);
		this.y = constrain(this.y, 0, height-this.height);
		
		this.speedy = this.speedy + gravity;
	}
	
		this.walls = function(){
			  // Remember, || means "or."
			if ((this.x >= width - this.width) || (this.x <= 0)) {
			// If the object reaches either edge, multiply speed by -1 to turn it around.
				this.speedx *= -0.9;
			}
			else if (this.y<=0) {
			// If the object reaches either edge, multiply speed by -1 to turn it around.
				this.speedy *= -0.9;
			}
			else if (this.y == height - (this.height)) {
			//keeps the player inside the play area
				this.speedy = 0;
				this.onGround = true;
			}			
		}
		
	this.show = function () {
		fill(100);
		rect(this.x, this.y, this.width, this.height);
		strokeWeight(5);
		stroke(255,0,0);
		point(this.x, this.y);
		noStroke();
	}
}
