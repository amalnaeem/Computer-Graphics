function transform(vertices,choice,val1,val2){
	
	if(choice=='translate'){
		var translationmat=[[1,0,val1],[0,1,val2],[0,0,1]];
		var x1y1mat=[[vertices[0]],[vertices[1]],[1]];
		var x2y2mat=[[vertices[2]],[vertices[3]],[1]];
		var x3y3mat=[[vertices[4]],[vertices[5]],[1]];
		var x4y4mat=[[vertices[6]],[vertices[7]],[1]];
		var x5y5mat=[[vertices[8]],[vertices[9]],[1]];
		var x6y6mat=[[vertices[10]],[vertices[11]],[1]];
		var x7y7mat=[[vertices[12]],[vertices[13]],[1]];
		var x8y8mat=[[vertices[14]],[vertices[15]],[1]];
		var x9y9mat=[[vertices[16]],[vertices[17]],[1]];
		var x10y10mat=[[vertices[18]],[vertices[19]],[1]];
		var x11y11mat=[[vertices[20]],[vertices[21]],[1]];
		var x12y12mat=[[vertices[22]],[vertices[23]],[1]];
		var x13y13mat=[[vertices[24]],[vertices[25]],[1]];
		var x14y14mat=[[vertices[26]],[vertices[27]],[1]];
		var x15y15mat=[[vertices[28]],[vertices[29]],[1]];
		var x16y16mat=[[vertices[30]],[vertices[31]],[1]];
		var x17y17mat=[[vertices[32]],[vertices[33]],[1]];
		var x18y18mat=[[vertices[34]],[vertices[35]],[1]];


		var x1y1res=multiply(translationmat,x1y1mat);
		var x2y2res=multiply(translationmat,x2y2mat);
		var x3y3res=multiply(translationmat,x3y3mat);
		var x4y4res=multiply(translationmat,x4y4mat);
		var x5y5res=multiply(translationmat,x5y5mat);
		var x6y6res=multiply(translationmat,x6y6mat);
		var x7y7res=multiply(translationmat,x7y7mat);
		var x8y8res=multiply(translationmat,x8y8mat);
		var x9y9res=multiply(translationmat,x9y9mat);
		var x10y10res=multiply(translationmat,x10y10mat);
		var x11y11res=multiply(translationmat,x11y11mat);
		var x12y12res=multiply(translationmat,x12y12mat);
		var x13y13res=multiply(translationmat,x13y13mat);
		var x14y14res=multiply(translationmat,x14y14mat);
		var x15y15res=multiply(translationmat,x15y15mat);
		var x16y16res=multiply(translationmat,x16y16mat);
		var x17y17res=multiply(translationmat,x17y17mat);
		var x18y18res=multiply(translationmat,x18y18mat);

		var finalarr=[x1y1res[0][0],x1y1res[1][0],x2y2res[0][0],x2y2res[1][0],x3y3res[0][0],x3y3res[1][0],x4y4res[0][0],x4y4res[1][0],x5y5res[0][0],x5y5res[1][0],x6y6res[0][0],x6y6res[1][0],x7y7res[0][0],x7y7res[1][0],x8y8res[0][0],x8y8res[1][0]
		,x9y9res[0][0],x9y9res[1][0],x10y10res[0][0],x10y10res[1][0],x11y11res[0][0],x11y11res[1][0],x12y12res[0][0],x12y12res[1][0],x13y13res[0][0],x13y13res[1][0],x14y14res[0][0],x14y14res[1][0],x15y15res[0][0],x15y15res[1][0],x16y16res[0][0],x16y16res[1][0]
		,x17y17res[0][0],x17y17res[1][0],x18y18res[0][0],x18y18res[1][0]];
		return finalarr;
	}

	if(choice=='rotateh'){
			
		
		var anglerad=val1*Math.PI/180;
		var rotationmat=[[Math.cos(anglerad),-1*Math.sin(anglerad),0],[Math.sin(anglerad),Math.cos(anglerad),0],[0,0,1]];
		var x1y1mat=[[vertices[0]],[vertices[1]],[1]];
		var x2y2mat=[[vertices[2]],[vertices[3]],[1]];
		var x3y3mat=[[vertices[4]],[vertices[5]],[1]];
		var x4y4mat=[[vertices[6]],[vertices[7]],[1]];
		var x5y5mat=[[vertices[8]],[vertices[9]],[1]];
		var x6y6mat=[[vertices[10]],[vertices[11]],[1]];
		var x7y7mat=[[vertices[12]],[vertices[13]],[1]];
		var x8y8mat=[[vertices[14]],[vertices[15]],[1]];
		var x9y9mat=[[vertices[16]],[vertices[17]],[1]];
		var x10y10mat=[[vertices[18]],[vertices[19]],[1]];
		var x11y11mat=[[vertices[20]],[vertices[21]],[1]];
		var x12y12mat=[[vertices[22]],[vertices[23]],[1]];
		var x13y13mat=[[vertices[24]],[vertices[25]],[1]];
		var x14y14mat=[[vertices[26]],[vertices[27]],[1]];
		var x15y15mat=[[vertices[28]],[vertices[29]],[1]];
		var x16y16mat=[[vertices[30]],[vertices[31]],[1]];
		var x17y17mat=[[vertices[32]],[vertices[33]],[1]];
		var x18y18mat=[[vertices[34]],[vertices[35]],[1]];


		var x1y1res=multiply(rotationmat,x1y1mat);
		var x2y2res=multiply(rotationmat,x2y2mat);
		var x3y3res=multiply(rotationmat,x3y3mat);
		var x4y4res=multiply(rotationmat,x4y4mat);
		var x5y5res=multiply(rotationmat,x5y5mat);
		var x6y6res=multiply(rotationmat,x6y6mat);
		var x7y7res=multiply(rotationmat,x7y7mat);
		var x8y8res=multiply(rotationmat,x8y8mat);
		var x9y9res=multiply(rotationmat,x9y9mat);
		var x10y10res=multiply(rotationmat,x10y10mat);
		var x11y11res=multiply(rotationmat,x11y11mat);
		var x12y12res=multiply(rotationmat,x12y12mat);
		var x13y13res=multiply(rotationmat,x13y13mat);
		var x14y14res=multiply(rotationmat,x14y14mat);
		var x15y15res=multiply(rotationmat,x15y15mat);
		var x16y16res=multiply(rotationmat,x16y16mat);
		var x17y17res=multiply(rotationmat,x17y17mat);
		var x18y18res=multiply(rotationmat,x18y18mat);
		console.log(x1y1res);
		console.log(x2y2res);
		console.log(x3y3res);

		var finalarr=[x1y1res[0][0],x1y1res[1][0],x2y2res[0][0],x2y2res[1][0],x3y3res[0][0],x3y3res[1][0],x4y4res[0][0],x4y4res[1][0],x5y5res[0][0],x5y5res[1][0],x6y6res[0][0],x6y6res[1][0],x7y7res[0][0],x7y7res[1][0],x8y8res[0][0],x8y8res[1][0]
		,x9y9res[0][0],x9y9res[1][0],x10y10res[0][0],x10y10res[1][0],x11y11res[0][0],x11y11res[1][0],x12y12res[0][0],x12y12res[1][0],x13y13res[0][0],x13y13res[1][0],x14y14res[0][0],x14y14res[1][0],x15y15res[0][0],x15y15res[1][0],x16y16res[0][0],x16y16res[1][0]
		,x17y17res[0][0],x17y17res[1][0],x18y18res[0][0],x18y18res[1][0]];
		console.log("transforms");
		console.log(finalarr);
		return finalarr;
	}



	if(choice=='scale'){
		var scalingmat=[[val1,0,0],[0,val2,0],[0,0,1]];
		var x1y1mat=[[vertices[0]],[vertices[1]],[1]];
		var x2y2mat=[[vertices[2]],[vertices[3]],[1]];
		var x3y3mat=[[vertices[4]],[vertices[5]],[1]];

		var x1y1res=multiply(scalingmat,x1y1mat);
		var x2y2res=multiply(scalingmat,x2y2mat);
		var x3y3res=multiply(scalingmat,x3y3mat);

		var finalarr=[x1y1res[0][0],x1y1res[1][0],x2y2res[0][0],x2y2res[1][0],x3y3res[0][0],x3y3res[1][0]];
		return finalarr;
	}
}


function multiply(a,b){
	var aNumRows=3;
	var aNumCols=3;
	var bNumRows=3;
	var bNumCols=1;

	m=new Array(aNumRows);

	for(var r=0;r<aNumRows;++r){
		m[r]=new Array(bNumCols);
		for(var c=0;c<bNumCols;++c){
			m[r][c]=0;
			for(var i=0;i<aNumCols;++i){
				m[r][c]+=a[r][i]*b[i][c];
			}
		}
	}
	return m;
}


