(function($){
	$(document).ready( function(){
		var data1=[-20,-10,30,40, 50, 60,70,80,90,100],
		data2=[-35,20,50,30, 90,130,77,55,60,133],

		data3=[0,10,30, 40, 50,60,70,80,90,100],	
		data4=[0,20,70,190, 75,90,66,59,89,33],

		data5=[0,10,30,40, 50,60,70,80,90,100],	
		data6=[66,90,-56,88,75,18,66,159,109,56],
		
		data7=[],data8=[],data9=[],data10=[],data11=[],
		data12=[],data13=[],data14=[];
		
		var data15=['EUL','PES','EFA','EDD','ELDR','EPP','UEN','Other'],
		data16=[39,200,42,15,67,276,66],
		data17=[49,210,56,19,60,272,36,29],
		data20=[0,'&pi;/2','&pi;','3&pi;/2','2&pi;'];
		/*
		EUL 	39 	49
		PES 	200 	210
		EFA 	42 	56
		EDD 	15 	19
		ELDR 	67 	60
		EPP 	276 	272
		UEN 	27 	36
		Other 	66 	29

		A bar chart visualizing the above results o
		*/
		var datax=[],datay=[];
		var datax2=[],datay2=[];
		var k=180,PI=Math.PI,deg=PI/180,x=0;

		for(x=-360;x<=360;x+=10){
			data7.push(x);
			data8.push(Math.sin(x*deg));

			data9.push(x);
			data10.push(Math.cos(x*deg));

			data11.push(x);
			data12.push(2*Math.sin(x*deg));

			//data13.push(x);
			//data14.push(Math.sin(x*deg)+Math.cos(x*deg));
		}

		//bar graphs
		datay.push(data16);//4
		datay.push(data17);//5
		
		//trig graphs
		datay2=[data8,data10,data12];
		datax2=[data7,data9,data11];

		var gfx=[];
	
		var showGFX=function(x){
		  	if(gfx[x]!==null){
		  		hideGFX();
				var obj=document.getElementById('graph'+x);
				if(obj!==null){
					obj.style.display='block';
			  		gfx[x].showLabels();
				}
		  	}
		}

		var hideGFX=function(){
			var obj=null;
			for(var i in gfx){
				obj=document.getElementById('graph'+i);
				if(obj!==null){
					obj.style.display='none';
					gfx[i].hideLabels();
				}
			}
		}

		var lg_example=function(x){
		  	var parameters=['lg'];
		  	if(gfx[x].getContext()!==null){
				gfx[x].setCustomAxis('x',90,-360,360);
				//gfx[x].setCustomAxis('y',0.1,-1,1);
			  	gfx[x].setXYData(datax2,datay2).setFontSize(12);//.turnChordsOff();
			  	gfx[x].execute(parameters);
		  	}else{
		  		alert('bad context');
		  	}
		}

		var vb_example=function(x){
		  	var parameters=['vb',false];
		  	if(gfx[x].getContext()!==null){
			  	gfx[x].setXYData(datax,datay);
			  	gfx[x].setLabelsX(data15);
			  	gfx[x].setFontSize(12);
			  	gfx[x].execute(parameters);
		  	}else{
		  		alert('bad context');
		  	}
		}
	

		gfx[0]=new GraphObject('graph0');
		gfx[1]=new GraphObject('graph1');
		
		lg_example(1);
		vb_example(0);
	
		$('#showGraph0').click(function(){
			showGFX(0);
		});
		$('#showGraph1').click(function(){
			showGFX(1);
		});
		showGFX(0);
	});
})(jQuery);
