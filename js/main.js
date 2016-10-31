function init(){
	var canvasmain = document.getElementById('canvas_main');

	var canvasMain 		= new initCanvas(canvasmain, 0, 0, 100, 100);
	
    canvasMain.getX();
    canvasMain.setX(100);
    canvasMain.getX();

    canvasMain.getWidth();
    canvasMain.setWidth(10);
    canvasMain.getWidth();

    canvasMain.getArea()

    //console.log(canvasMain_X, " : ", canvasMain_Area);

    //console.log(this, " : ", canvasmain);
	//alert('loaded');

}

window.addEventListener("load", init, false)


  


/*(function(){
   //some code...
   var canvasmain = document.getElementById('canvas_main');

   var canvasMain = new initCanvas(canvasmain, 0, 0, 100, 100);
   console.log(canvasMain.area());

   console.log(canvasmain);
	//alert('loaded');
})(); */
