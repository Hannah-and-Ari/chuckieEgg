function platform(x, y){
	this.x = x;
	this.y = y;
	this.width = 150;
	this.height = 20;
	
	this.show = function(){
		fill(0,0,255)
		rect(this.x, this.y, this.width, this.height)
		strokeWeight(5);
		stroke(255,0,0);
		point(this.x, this.y);
		noStroke();
	}
	
	this.collide = function(){
		if(bean.x){}
		if(/*top of bean collision*/bean.y<=this.y+this.height && bean.y>=this.y && bean.x+bean.width >=this.x && bean.x<=this.x+this.width){
			bean.speedy = 0.9
		}
		else if(/*bottom of bean collision*/ bean.y+bean.height>=this.y && bean.y+bean.height<= this.y+this.height && bean.x+bean.width >= this.x && bean.x <= this.x+this.width){
			bean.speedy = 0;
			bean.y = this.y - bean.height;
			bean.onGround = true;
		}
	}
}