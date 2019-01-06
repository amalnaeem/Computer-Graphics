var vertices=[];
var program;
var verticesp=[];
var noOfDimensions;
var numberOfVertices;
function main(){

	


	var FizzyText = function() {
  		this.message = 'dat.gui';
  		this.rotate = 0;
  		//this.displayOutline = false;
  		//this.explode = function() { ... };
  	// Define render logic ...
	};

  var text = new FizzyText();
  var gui = new dat.GUI({
	  
	  height : 5 * 32 - 1
  });
  gui.add(text, 'message');
 var controller= gui.add(text, 'rotate', 0, 360);



	var canvas = document.getElementById('myCanvas');

	var gl = getWebGLContext(canvas);

	if(!gl){
		console.log('Failed to Connect Context');
	}

	
	var hexagonButton = document.querySelector('#hex');
	var pentagonButton = document.querySelector('#pentagon');

	//Initializing Vertex-Shader and Fragment Shader
	 program = initShaders(gl, 'vertex-shader', 'fragment-shader');
	gl.useProgram(program);
	gl.program = program;

	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	 numberOfVertices = 0;
	
	//For drawing a Triangle

	//Central Coordinates
	var x =0.2;
	var y =0;
	//Radius of circle on which the vertices lie
	var r = 0.1;
	//y-coordinate of the points
	var q = Math.sqrt(Math.pow(r,2) - Math.pow((r/2), 2));

	vertices=[x,y,
	x + r,y,
	x + (r/2),y+q,
	
	x + (r/2),y+q,
	x,y,
	x-(r/2),y+q,
	
	x,y,
	x-(r/2),y+q,
	x - r,y,
	
	x,y,
	x - r,y,
	x-(r/2),y-q,
	
	x,y,
	x - (r/2),y-q,
	x + (r/2),y-q,
	
	x,y,
	x + (r/2),y-q,
	x + r,y];
noOfDimensions = 2;
	 
	render(gl,vertices, 18);
	
verticesp=[-0.55,0.3,
-0.45,0.3,
-0.4,0.4,

-0.4,0.4,
-0.55,0.3,
-0.5,0.5,

-0.5,0.5,
-0.55,0.3,
-0.6,0.4,

]
noOfDimensions = 2;
	// numberOfVertices = verticesp.length / noOfDimensions;
	render(gl,verticesp, 9);	




 controller.onChange(function(value) {
	 gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
   vertices=transform(vertices,'rotateh',value,0);
   verticesp=transform(verticesp,'rotateh',value,0);
 //  var vertices1 
	render(gl,vertices,18);
	render(gl,verticesp,9);


});

controller.onFinishChange(function(value) {
  // Fires on every change, drag, keypress, etc.
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
   vertices=transform(vertices,'translate',-0.5,0);
   verticesp=transform(verticesp,'translate',0.5,0);
 //  var vertices1 
	render(gl,vertices,18);
	render(gl,verticesp,9);
});

}

function render(gl, arr, numberOfVertices){
	
	var vertexBuffer = gl.createBuffer();
	
	if(!vertexBuffer){
		console.log("Failed to connect buffer object");
	}

	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(arr), gl.STATIC_DRAW);
	
		

	var a_Position = gl.getAttribLocation(program, 'a_Position');

	if(a_Position < 0){
		console.log('Failed to get position');
	}


	gl.vertexAttribPointer(a_Position, noOfDimensions, gl.FLOAT, false, 0,0);
	gl.enableVertexAttribArray(a_Position);
	gl.drawArrays(gl.TRIANGLES, 0, numberOfVertices);
}





function initVertices(program, gl){

	

	//Code is just here for testing purpose
	//var vertices = [-0.5,-0.5,0.5,-0.5,0,0.5];
	var noOfDimensions = 2;
	var numberOfVertices = vertices.length / noOfDimensions;


	//Loading DATA into the GPU
	var vertexBuffer = gl.createBuffer();
	if(!vertexBuffer){
		console.log("Failed to connect buffer object");
	}
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);


	//Associate shader variable with Data in xCoordU Buffer
	var a_Position = gl.getAttribLocation(program,'a_Position');
	if(a_Position < 0){
		console.log('Failed to get position');
	}
	gl.vertexAttribPointer(a_Position, noOfDimensions, gl.FLOAT, false, 0,0);
	gl.enableVertexAttribArray(a_Position);


	return numberOfVertices;

}
