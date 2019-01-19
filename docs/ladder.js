function ladder(x, y, length){
	this.x = x;
	this.y = y;
	this.length = length;
	this.width;
	
	this.show = function(){
		rect(this.x, this.y, this.width, this.length);
	}
}