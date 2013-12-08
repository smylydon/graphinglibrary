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
	*	The log function Math.log returns Naperian or natural logs; so the
	*	result must be multiplied by ln 10 to convert to base 10 logs.
	*
	*	@private
	*/	
	function log(x){
		return Math.log(x)*Math.LOG10E;
	}

	function calculateApproxLength(range) {
		var lengthAsPowerOfTen=log(range),
		floorLengthAsPowerOfTen=Math.floor(lengthAsPowerOfTen),				/*magnitude as a power of 10*/
		approxLength=Math.pow(10,floorLengthAsPowerOfTen),				/*magnitude as a value*/
		p4=Math.floor(range/approxLength);		/*length over magnitude*/

		return p4*Math.pow(10,floorLengthAsPowerOfTen);			/*approx length*/
	}

	function calculateTickDelta(approxLength,magnitudeOfLength) {
		var tickDelta = approxLength/magnitudeOfLength;
		/* Iron-out scale             */
		/* a. tick width = 5.0*10^mag */
		/* b. tick width = 4.0*10^mag */
		/* c. tick width = 2.5*10^mag */
		/* d. tick width = 2.0*10^mag */
		/* e. tick width = 1.0*10^mag */
		
		if(tickDelta>=5){
			return 5*magnitudeOfLength;
		}
		if(tickDelta>=3.5){
			/* tick width = 4*10^mag */
			return 4*magnitudeOfLength;
		}
		if(tickDelta>=2.5){
			return 2.5*magnitudeOfLength;
		}
		if(tickDelta>=2.0){
			return 2*magnitudeOfLength;
		}

		return magnitudeOfLength;
	}
	
	/**
	*	Works out a base 10 scale tick width e.g. 10,20 or 300,400,...900
	*
	*	@private
	*/		
	function calculateScale(max,min){
		
		//start at origin
		min = min > 0 ? 0 : min;
		//end at origin
		max = max < 0 ? 0 : max;
		
		var approxLength = calculateApproxLength(max-min)/10,								
			logOfLength = log(approxLength),			
			roundLogOfLength = Math.floor(logOfLength),
			magnitudeOfLength = Math.pow(10,roundLogOfLength);

		return calculateTickDelta(approxLength, magnitudeOfLength);
	}
	
	/*
	*	Given the biggest and smallest coordinate in the dataset, this function
	*	makes an appropriate scale.
	*
	*	@param {number} max is the biggest coordinate
	*	@param {number} min it the smallest coordinate
	*/			
	this.makeScale=function(max,min){
		var scalemin=0, notDone=true;
		var count=0, length=0,value=0;
		
		var scaler=calculateScale(max,min); /*get delta (the tick width)*/

		if (min >= 0) {
			value = scaler;
			/*work out total number of divisions (ticks)*/			
			while(notDone) {
				notDone = value < max;
				if (notDone) {
					value+=scaler;
				}
				count++;
			}
		}else{
			value=0;
			/*find first even number<=minimum value*/
			while(notDone) {
				notDone = value > min;
				if (notDone) {
					value=value-scaler;
				}
			}
			
			scalemin=value;
			notDone=true;
			/*start at evened minimum and count to maximum to find ticks*/
			while(notDone) {
				notDone = value < max;
				if (notDone) {
					value+=scaler;
					count++;
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
		if (this.noFlip) {
			this.origin=this.minCord+((0-this.scaleMin)*this.scale);
		} else {
			this.origin=this.maxCord-((0-this.scaleMin)*this.scale);
		}
	};	
}
