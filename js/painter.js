/* finds the highest number in an arrays */
Array.prototype.mgGetMax = function() {
	var max = null, length = this.length, i = 0, temp = null;
	if (length === 0) {
		return null;
	}
	for ( i = 0; i < length; i++) {
		temp = this[i];
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};

/* finds the smallest number in an array */
Array.prototype.mgGetMin = function() {
	var min = null, length = this.length, i = 0, temp = null;
	if (length === 0) {
		return null;
	}
	for ( i = 0; i < length; i++) {
		temp = this[i];
		if (temp < min) {
			min = temp;
		}
	}
	return min;
};

/*for a multi-dimensional array finds element with most entries*/
Array.prototype.mgGetMaxElements = function() {
	var length = this.length, data = null, max = null, temp = 0;
	if (length == 0) {
		return null;
	}
	for ( i = 0; i < length; i++) {
		data = this[i];
		temp = data.length;
		if ((temp > max) || (max === null)) {
			max = temp;
		}
	}
	return (max);
};

/*
 */
 Array.prototype.mgGetMax2D = function () {
	 var length = this.length, data = null, max = null, temp = 0;
	 if (this.length <= 0) {
	 	return null;
	 }
	 for (i = 0; i < this.length; i++) {
		 data = this[i];
		 temp = data.mgGetMax();
		 if ((temp > max) || (max === null)) {
		 	max = temp;
		 }
	 }
	 return (max);
 };

 /* */
Array.prototype.mgGetMin2D = function() {
	var length = this.length, data = null, min = null, temp = 0;
	if (length == 0) {
		return null;
	}
	for ( i = 0; i < length; i++) {
		data = this[i];
		temp = data.mgGetMin();
		if ((temp < min) || (min === null)) {
			min = temp;
		}
	}
	return (min);
};

/**
 * Factory pattern
 */
var GraphicsFactory = {

	/**
	 * Returns a VML Object, Canvas Object or null
	 *
	 * param {String} id = id of graphics of object
	 * param {String} b = browser type
	 */
	createObject : function(id, type) {

		var canvas = null, gfx = null;
		//type = 'canvas'
		switch (type) {
			case 'svg':
				gfx = new SVGObject();
				gfx.init(id);
				break;
			case 'vml':
				gfx = new VMLObject();
				gfx.init(id);
				break;
			case 'canvas':
				canvas = document.createElement('canvas');
				if (canvas.getContext('2d') !== null) {
					gfx = new CanvasObject();
					gfx.init(id);
				} else {
					gfx = null;
				}
				break;
			default:
				gfx = null;
				break;
		}
		return (gfx);
	}
};

/**
 * Work out browser type
 */
var BrowserInfo =(function () {
	var browser = null, browserName = navigator.appName,
	browserVersion = parseFloat(navigator.appVersion);

	if (browserName == 'Microsoft Internet Explorer') {
		if (browserVersion < 4.0) {
			browser = 'ie4';
		} else {
			browser = 'ie5';
		}
	} else {
		browser = 'ff';
	}
	
	return {
		getBrowser : function () {
			return (browser);
		}
	}
})();
/**
 http://www.codingforums.com/showthread.php?t=11799
 */
var findPosition =  {
	getAbsPos : function(oId, tl) {
		var o = ( typeof oId === 'String') ? document.getElementById(oId) : oId;
		return (tl === 'top') ? getAbsPosTop(o) : getAbsPosLeft(o);
	},

	getAbsPosTop : function(element) {
		var obj = element, val = 0;
		while (obj && obj.nodeName !== "body") {
			val += parseInt((obj.offsetTop), 10);
			obj = obj.parentNode;
			break;
		}
		return val;
	},

	getAbsPosLeft : function(element) {
		var obj = element, val = 0;
		while (obj && obj.nodeName !== "body") {
			val += parseInt((obj.offsetLeft), 10);
			obj = obj.parentNode;
			break;
		}
		return val;
	}
};



var PainterFactory = (function(){
	window.MNS = {};

	if(Object.create != 'function'){
		Object.create = function(o){
			function F(){};

			F.prototype = o;

			return new F();
		}
	}
	
	MNS.extend = function(obj, props){
		var prop = null;
		var obj2 = MNS.create(obj);
		for(prop in props){
			obj2[prop] = props[prop];
		}
		return obj2;
	};

	MNS.create = function(o){
		return Object.create(o);
	};

	var baseCommand = { name:'nop' };
	var clearCommand = MNS.extend(baseCommand,{ name: 'clear' });
	var colorCommand = MNS.extend(baseCommand,{ name: 'color', colors:null, color:'black', background:'white'});

	var shapeCommand = MNS.extend( baseCommand,{ animate:null, layer:0, events:null,
		color:'', stroke:true, fill:false, fillColor:'#aaaaaa'});

	var circleCommand = MNS.extend(shapeCommand,{ name:'circle', x:0, y:0, r:0 });
	var arcCommand = MNS.extend(circleCommand,{ name:'arc', startAngle:0, endAngle:0, mode:'radians',direction:true })
	var ellipseCommand = MNS.extend(shapeCommand,{ name:'ellipse', x:0, y:0, rx:0, ry:0});
	var lineCommand = MNS.extend(shapeCommand,{name:'line', x1:0, y1:0, x2:0, y2:0})
	var polygonCommand = MNS.extend(shapeCommand,{name:'polygon',points:null});
	var polylineCommand = MNS.extend(polygonCommand,{name:'polyline',close:false })
	var plotCommand = MNS.extend(shapeCommand,{name:'plot', x:0, y:0});
	var plotArrayCommand = MNS.extend(polygonCommand,{name:'plotArray', points:null})
	var rectCommand = MNS.extend(shapeCommand,{ name:'rect', width:1,height:1 });

	var painter = {
		width: 640,
		height: 400,
		numberOflayers: 1,
		queue: null,
		canvas: null,
		commands:null,

		init:function(layers){
			this.commands = { arc: arcCommand,
				circle:circleCommand,
				ellipse:ellipseCommand,
				polygon:polygonCommand,
				polyLine:polylineCommand,
				plot:plotCommand,
				plotArray:plotArrayCommand,
				rect:rectCommand};

			this.layers = this.checkLayers(layers);
			this.queue = [];
			for(var i=0; i<layers;i++){
				this.queue.push([]);
			}
			//this.canvas =  ML.create(CanvasObject);
		},

		checkLayers:function(layer){
			layer = layer || 0;
			layer = layer<0 ? 0 : layer;
			layer = layer>3 ? 3 : layer;
			return layer;
		},

		shape:function(commandName,argumentObject){
			var command = MNS.extend(this.commands[commandName],argumentObject[0]);
			command.layer = this.checkLayers(command.layer);
			var layer = this.queue[command.layer];
			layer.push(command);
			return command;
		},

		circle:function(){
			return this.shape('circle',arguments);
		},

		ellipse:function(){
			return this.shape('ellipse',arguments);
		},

		plot:function(){
			return this.shape('plot',arguments);
		},

		plotArray:function(){
			return this.shape('plotArray',arguments);
		},

		polygon:function(){
			return this.shape('polygon',arguments);
		},

		polyLine:function(){
			return this.shape('polyline',arguments);
		},

		rect:function(){
			return this.shape('rect',arguments);
		},

		renders:function(){
			for(var i in this.queque){
				command = this.queque[i];
			}
		}
	};

	return {
		getPainter:function(){
			return MNS.create(painter);
		}
	}
})();



