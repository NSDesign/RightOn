

function initCanvas(ele, x, y, w, h, style) {
	// body...
	this.ele = ele; 
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.style = style;

	this.getArea = function () { 
		var area = this.width * this.height;
		console.log('get Area', " : ", area);
		return area;
	}

	this.setX = function (x) { 
		this.x = x;
		console.log('set X', " : ", this.x);
	}

	this.getX = function () { 
		console.log('get X', " : ", this.x);
		return this.x;
	}

	this.setWidth = function (w) { 
		this.width = w;
		console.log('set Width', " : ", this.width);
	}

	this.getWidth = function () { 
		console.log('get Width', " : ", this.width);
		return this.width;
	}

	//console.log(this, " : ", this.ele, " : ", ele);
};

