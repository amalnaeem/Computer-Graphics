function transform(vertices,choice,val1,val2){
	
	if(choice=='translateu'){
		var translationmat=[[1,0,val1],[0,1,val2],[0,0,1]];
		var x1y1mat=[[vertices[12]],[vertices[13]],[1]];
		var x2y2mat=[[vertices[14]],[vertices[15]],[1]];
		var x3y3mat=[[vertices[16]],[vertices[17]],[1]];
		var x4y4mat=[[vertices[18]],[vertices[19]],[1]];
		var x5y5mat=[[vertices[20]],[vertices[21]],[1]];
		var x6y6mat=[[vertices[22]],[vertices[23]],[1]];
		


		var x1y1res=multiply(translationmat,x1y1mat);
		var x2y2res=multiply(translationmat,x2y2mat);
		var x3y3res=multiply(translationmat,x3y3mat);
		var x4y4res=multiply(translationmat,x4y4mat);
		var x5y5res=multiply(translationmat,x5y5mat);
		var x6y6res=multiply(translationmat,x6y6mat);
		

		var finalarr=[x1y1res[0][0],x1y1res[1][0],x2y2res[0][0],x2y2res[1][0],x3y3res[0][0],x3y3res[1][0],x4y4res[0][0],x4y4res[1][0],x5y5res[0][0],x5y5res[1][0],x6y6res[0][0],x6y6res[1][0]];
		return finalarr;
	}
	if(choice=='translatel'){
		var translationmat=[[1,0,val1],[0,1,val2],[0,0,1]];
		var x1y1mat=[[vertices[24]],[vertices[25]],[1]];
		var x2y2mat=[[vertices[26]],[vertices[27]],[1]];
		var x3y3mat=[[vertices[28]],[vertices[29]],[1]];
		var x4y4mat=[[vertices[30]],[vertices[31]],[1]];
		var x5y5mat=[[vertices[32]],[vertices[33]],[1]];
		var x6y6mat=[[vertices[34]],[vertices[35]],[1]];

		var x1y1res=multiply(translationmat,x1y1mat);
		var x2y2res=multiply(translationmat,x2y2mat);
		var x3y3res=multiply(translationmat,x3y3mat);
		var x4y4res=multiply(translationmat,x4y4mat);
		var x5y5res=multiply(translationmat,x5y5mat);
		var x6y6res=multiply(translationmat,x6y6mat);

		var finalarr=[x1y1res[0][0],x1y1res[1][0],x2y2res[0][0],x2y2res[1][0],x3y3res[0][0],x3y3res[1][0],x4y4res[0][0],x4y4res[1][0],x5y5res[0][0],x5y5res[1][0],x6y6res[0][0],x6y6res[1][0]];
		return finalarr;
	}

	if(choice=='rotate'){
			
		
		var anglerad=val1*Math.PI/180;
		var rotationmat=[[Math.cos(anglerad),-1*Math.sin(anglerad),0],[Math.sin(anglerad),Math.cos(anglerad),0],[0,0,1]];
var x1y1mat=[[vertices[36]],[vertices[37]],[1]];
		var x2y2mat=[[vertices[38]],[vertices[39]],[1]];
		var x3y3mat=[[vertices[40]],[vertices[41]],[1]];
		var x4y4mat=[[vertices[42]],[vertices[43]],[1]];
		var x5y5mat=[[vertices[44]],[vertices[45]],[1]];
		var x6y6mat=[[vertices[46]],[vertices[47]],[1]];
		var x7y7mat=[[vertices[48]],[vertices[49]],[1]];
		var x8y8mat=[[vertices[50]],[vertices[51]],[1]];
		var x9y9mat=[[vertices[52]],[vertices[53]],[1]];
		var x10y10mat=[[vertices[54]],[vertices[55]],[1]];
		var x11y11mat=[[vertices[56]],[vertices[57]],[1]];
		var x12y12mat=[[vertices[58]],[vertices[59]],[1]];
		var x13y13mat=[[vertices[60]],[vertices[61]],[1]];
		var x14y14mat=[[vertices[62]],[vertices[63]],[1]];
		var x15y15mat=[[vertices[64]],[vertices[65]],[1]];
		var x16y16mat=[[vertices[66]],[vertices[67]],[1]];
		var x17y17mat=[[vertices[68]],[vertices[69]],[1]];
		var x18y18mat=[[vertices[70]],[vertices[71]],[1]];
		var x19y19mat=[[vertices[72]],[vertices[73]],[1]];
        var x20y20mat=[[vertices[74]],[vertices[75]],[1]];
        var x21y21mat=[[vertices[76]],[vertices[77]],[1]];
		var x22y22mat=[[vertices[78]],[vertices[79]],[1]];		
		var x23y23mat=[[vertices[80]],[vertices[81]],[1]];
		var x24y24mat=[[vertices[82]],[vertices[83]],[1]];
        var x25y25mat=[[vertices[84]],[vertices[85]],[1]];
        var x26y26mat=[[vertices[86]],[vertices[87]],[1]];
		var x27y27mat=[[vertices[88]],[vertices[89]],[1]];
		var x28y28mat=[[vertices[90]],[vertices[91]],[1]];
		var x29y29mat=[[vertices[92]],[vertices[93]],[1]];
        var x30y30mat=[[vertices[94]],[vertices[95]],[1]];
        var x31y31mat=[[vertices[96]],[vertices[97]],[1]];
		var x32y32mat=[[vertices[98]],[vertices[99]],[1]];		
		var x33y33mat=[[vertices[100]],[vertices[101]],[1]];
        var x34y34mat=[[vertices[102]],[vertices[103]],[1]];
		var x35y35mat=[[vertices[104]],[vertices[105]],[1]];
		var x36y36mat=[[vertices[106]],[vertices[107]],[1]];


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
		var x19y19res=multiply(rotationmat,x19y19mat);
		var x20y20res=multiply(rotationmat,x20y20mat);
		var x21y21res=multiply(rotationmat,x21y21mat);
		var x22y22res=multiply(rotationmat,x22y22mat);
		var x23y23res=multiply(rotationmat,x23y23mat);
		var x24y24res=multiply(rotationmat,x24y24mat);
		var x25y25res=multiply(rotationmat,x25y25mat);
		var x26y26res=multiply(rotationmat,x26y26mat);
		var x27y27res=multiply(rotationmat,x27y27mat);
		var x28y28res=multiply(rotationmat,x28y28mat);
		var x29y29res=multiply(rotationmat,x29y29mat);
		var x30y30res=multiply(rotationmat,x30y30mat);
		var x31y31res=multiply(rotationmat,x31y31mat);
		var x32y32res=multiply(rotationmat,x32y32mat);
		var x33y33res=multiply(rotationmat,x33y33mat);
		var x34y34res=multiply(rotationmat,x34y34mat);
		var x35y35res=multiply(rotationmat,x35y35mat);
		var x36y36res=multiply(rotationmat,x36y36mat);
		
		
		
		console.log(x1y1res);
		console.log(x2y2res);
		console.log(x3y3res);

		var finalarr=[x1y1res[0][0],x1y1res[1][0],x2y2res[0][0],x2y2res[1][0],x3y3res[0][0],x3y3res[1][0],x4y4res[0][0],x4y4res[1][0],x5y5res[0][0],x5y5res[1][0],x6y6res[0][0],x6y6res[1][0],x7y7res[0][0],x7y7res[1][0],x8y8res[0][0],x8y8res[1][0]
		,x9y9res[0][0],x9y9res[1][0],x10y10res[0][0],x10y10res[1][0],x11y11res[0][0],x11y11res[1][0],x12y12res[0][0],x12y12res[1][0],x13y13res[0][0],x13y13res[1][0],x14y14res[0][0],x14y14res[1][0],x15y15res[0][0],x15y15res[1][0],x16y16res[0][0],x16y16res[1][0]
		,x17y17res[0][0],x17y17res[1][0],x18y18res[0][0],x18y18res[1][0],
		x19y19res[0][0],x19y19res[1][0],x20y20res[0][0],x20y20res[1][0],x21y21res[0][0],x21y21res[1][0],x22y22res[0][0],x22y22res[1][0],x23y23res[0][0],x23y23res[1][0],x24y24res[0][0],x24y24res[1][0],x25y25res[0][0],x25y25res[1][0],x26y26res[0][0],x26y26res[1][0]
		,x27y27res[0][0],x27y27res[1][0],x28y28res[0][0],x28y28res[1][0],x29y29res[0][0],x29y29res[1][0],x30y30res[0][0],x30y30res[1][0],x31y31res[0][0],x31y31res[1][0],x32y32res[0][0],x32y32res[1][0],x33y33res[0][0],x33y33res[1][0],x34y34res[0][0],x34y34res[1][0]
		,x35y35res[0][0],x35y35res[1][0],x36y36res[0][0],x36y36res[1][0]];
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


