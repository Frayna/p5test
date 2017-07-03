new p5();

var part = [];
var wid = 500;
var hei = 500;
var maxpart = 300;

function particle() {
	this.posx = mouseX;
	this.posy = mouseY;
	this.size = random(2,4);
	this.velx = random(-1,1);
	this.vely = random(-1,1);
	this.lifetime = random(0,maxpart);

	this.refresh = function()
	{
		this.posx += this.velx;
		this.posy += this.vely;
		this.lifetime--;
		if(this.posx > wid || this.posx < 0)
			this.velx *= -1;
		if(this.posy > hei || this.posy < 0)
			this.vely *= -1;
	}
	this.show = function()
	{
		if(this.lifetime > 0)
		{
			ellipse(this.posx, this.posy, this.size, this.size);
		}
	}
}


function setup() {
	createCanvas(wid,hei);
	stroke(0);
	j = 0;
}

function draw() {
	background(0,0,0);
	part[j] = new particle();
	for (var i = 0; i < part.length; i++) {
		part[i].show();
		part[i].refresh();
	}
	j++;
}
