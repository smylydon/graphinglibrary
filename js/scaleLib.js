/**
*	This object is used to work out the scale given a maximum and a minimum
*	value. Each axis needs it's own instance of this object.
*
*	@constructor
*/
function scaleObject(){
	this.axisLength=0;		//axis length
	this.fullLength=0;		//total length
	this.scale=0;				//calculated scale
	this.scaleDelta=0;		//tick ( ie delta x)
	this.scaleMax=0;			//maximum coordinate
	this.scaleMin=0;			//minimum coordinate
	this.scaleCount=0;		//number of ticks
	this.noFlip=true;			//inverted 
	this.customScale=false;	//is this a custom scale
	this.customStep=20;		//ticks
	this.customStart=0;		//start value
	this.customEnd=0;			//end value
	this.customLabel=false;	//???
	this.maxCord=0;			//maximum screen coord
	this.minCord=0;			//minimum screen coord
	this.origin=0;				//axis origin on screen
	this.paddingAlpha=0.05;
	this.paddingBeta=0.95;
	this.customLabels=[];
	this.customLabelsOn=false;
	
	/**
	*	Given a number it computes the log to the base 10 of that number.
	*	The log function Math.log returns Naperian/natural logs; so the
	*	result must be multiplied by ln 10 to convert to base 10 logs.
	*
	*	@private
	*/	
	function log(x){
		return Math.log(x)*Math.LOG10E;
	}

	/**
	*	Works out a base 10 scale tick width e.g. 10,20 or 300,400,...900
	*
	*	@private
	*/		
	function calculateScale(max,min){
		var p1=0;
		var p2=0;
		var p3=0;
		var p4=0;
		var p5=0;

		var s1=0;
		var s2=0;
		var s3=0;
		var s4=0;
		
		var length=0;
		var scaler=0;
		
		//start at origin
		if(min>0){
			min=0;
		}
		//end at origin
		if(max<0){
			max=0;
		}
		
		length=max-min;
		p1=log(length);					/*absolute length */
		p2=Math.floor(p1);				/*magnitude as a power of 10*/
		p3=Math.pow(10,p2);				/*magnitude as a value*/
		p4=Math.floor(length/p3);		/*length over magnitude*/
		p5=p4*Math.pow(10,p2);			/*approx length*/

		s1=p5/10;							/*scale*/				
		s2=log(s1);							/*power of scale*/
		s3=Math.floor(s2);				/*magitude of scale*/
		
		s4=s1/Math.pow(10,s3);			/*scale/magnitude*/
		
		/* Iron-out scale             */
		/* a. tick width = 5.0*10^mag */
		/* b. tick width = 4.0*10^mag */
		/* c. tick width = 2.5*10^mag */
		/* d. tick width = 2.0*10^mag */
		/* e. tick width = 1.0*10^mag */
		
		if(s4>=5){
			scaler=5*Math.pow(10,s3);
		}else{
			if(s4>=3.5){
				/* tick width = 4*10^mag */
				scaler=4*Math.pow(10,s3);
			}else{
				if(s4>=2.5){
					scaler=2.5*Math.pow(10,s3);
				}else{
					if(s4>=2.0){
						scaler=2*Math.pow(10,s3);
					}else{
						scaler=Math.pow(10,s3);
					}
				}
			}
		}			
		return scaler;
	}
	
	/*
	*	Given the biggest and smallest coordinate in the dataset, this function
	*	makes an appropriate scale.
	*
	*	@param {number} max is the biggest coordinate
	*	@param {number} min it the smallest coordinate
	*/			
	this.makeScale=function(max,min){
		var scaler=0;
		var scalemin=0;
		var notDone=true;
		var count=0;
		var length=0;
		var value=0;
		
		scaler=calculateScale(max,min); /*get delta (the tick width)*/

		if(min>=0){
			count=0;
			value=scaler;
			/*work out total number of divisions (ticks)*/			
			while(notDone){
				if(value<max){
					value+=scaler;
				}else{
					notDone=false;
				}
				count++;
			}
		}else{
			count=0;
			value=0;
			/*find first even number<=minimum value*/
			while(notDone){
				if(value>min){
					value=value-scaler;
				}else{
					notDone=false;
				}
			}
			
			scalemin=value;
			notDone=true;
			/*start at evened minimum and count to maximum to find ticks*/
			while(notDone){
				if(value<max){
					value+=scaler;
					count++;
				}else{
					notDone=false;
				}
			}
		}
		/*calculate maximum and minimum coordinates in pixels*/
		this.maxCord=(this.fullLength*this.paddingBeta);
		this.minCord=(this.fullLength*this.paddingAlpha);
		
		/*mathematical scale*/
		this.scaleDelta=scaler;	/*tick (delta x)*/
		this.scaleMax=value;
		this.scaleMin=scalemin;
		this.scaleCount=count;
		this.axisLength=this.fullLength*(this.paddingBeta-this.paddingAlpha);
		/*scale in pixels*/
		this.scale=this.axisLength/(this.scaleMax-this.scaleMin);
		
		/*decide which side the axis is on, used for Y axis*/
		if(this.noFlip){
			this.origin=this.minCord+((0-this.scaleMin)*this.scale);
		}else{
			this.origin=this.maxCord-((0-this.scaleMin)*this.scale);
		}
	};	
}
