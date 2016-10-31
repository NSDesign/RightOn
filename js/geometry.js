
var ShapeB = function (a, b){

	this.a = a;
	this.b = b;
	this.ab = function(){
		return a + " : " + b;
	}
}

var ShapeB = {
	this.a : a,
	this.b : b,
	this.ab : function(){
		return a + " : " + b;
	}
}