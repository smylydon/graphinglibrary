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
 * Use Template Pattern to create a template for graphics objects
 */
function GraphicsInterface() {

	/**
	 *	Error
	 *
	 *	@para {String} the caller function
	 *	@para {String} the callee function
	 *	@private
	 */
	function logError(caller, callee) {
		throw new Error('Error call to a function that is not implemented:\nCaller: ' + caller + '\nCallee: ' + callee);
	}


	this.init = function() {
		logError(arguments[1], arguments[0]);
	};

	/**
	 *	get the canvas id
	 *
	 *	@return {String} the canvas id
	 */
	this.getCanvasId = function() {
		logError(arguments[1], arguments[0]);
	};

	this.getHeight = function() {
		logError(arguments[1], arguments[0]);
	};

	this.getWidth = function() {
		logError(arguments[1], arguments[0]);
	};

	this.getCanvasX = function() {
		logError(arguments[1], arguments[0]);
	};

	this.getCanvasY = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setDebug = function() {
		logError(arguments[1], arguments[0]);
	};

	this.clearDebug = function() {

	};

	this.setShadows = function(x, y) {
		logError(arguments[1], arguments[0]);
	};

	this.getShadows = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setAlpha = function(alpha) {
		logError(arguments[1], arguments[0]);
	};

	this.getAlpha = function() {
		logError(arguments[1], arguments[0]);
	};

	this.save = function() {
		logError(arguments[1], arguments[0]);
	};

	this.restore = function() {
		logError(arguments[1], arguments[0]);
	};

	this.hideLabels = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setFillColor = function(color) {
		logError(arguments[1], arguments[0]);
	};

	this.getFillColor = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setShadowColor = function(color) {
		logError(arguments[1], arguments[0]);
	};
	this.getShadowColor = function() {
		logError(arguments[1], arguments[0]);
	};

	this.getShadowColor = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setShadowAlpha = function(alpha) {

	};
	this.getShadowAlpha = function() {
		logError(arguments[1], arguments[0]);
	};

	this.clearShadows = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setShadowWidth = function(s) {
		logError(arguments[1], arguments[0]);
	};

	this.setDeg = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setRad = function() {
		logError(arguments[1], arguments[0]);
	};

	this.getMode = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setLineWidth = function(lineWidth) {
		logError(arguments[1], arguments[0]);
	};

	this.getLineWidth = function() {
		logError(arguments[1], arguments[0]);
	};

	this.setFontSize = function(size) {
		logError(arguments[1], arguments[0]);
	};

	this.getFontSize = function() {
		logError(arguments[1], arguments[0]);
	};

	function debugLib(str, a) {
		logError(arguments[1], arguments[0]);
	}

	/**
	 *	Clears the canvas
	 *
	 *	@para {String} the background color
	 */
	this.clear = function(color) {
		logError(arguments[1], arguments[0]);
	};

	this.getColor = function() {
		logError(arguments[1], arguments[0]);
	};

	this.color = function(color1, color2, color3) {
		logError(arguments[1], arguments[0]);
	};

	/**
	 *	Prints text to the canvas
	 *
	 *	@para {number} the x coordinate in pixels
	 *	@para {number} the y coordinate in pixels
	 *	@para {String} the text to printed
	 */
	this.print = function(x, y, text) {
		logError(arguments[1], arguments[0]);
	};

	this.printLeft = function(x, y, text) {
		logError(arguments[1], arguments[0]);
	};

	this.printCenter = function(x, y, text) {
		logError(arguments[1], arguments[0]);
	};

	/**
	 *	Plots a point on the canvas
	 *
	 *	@para {number} the x coordinate in pixels
	 *	@para {number} the y coordinate in pixels
	 */
	this.plot = function(x, y) {
		logError(arguments[1], arguments[0]);
	};

	/**
	 *	Plots a point on the canvas
	 *
	 *	@para {Array} the x1 coordinate in pixels
	 */
	this.plotArray = function(points) {
		logError(arguments[1], arguments[0]);
	};

	/**
	 *	Draws a line on the canvas.
	 *
	 *	@para {number} the x1 coordinate in pixels
	 *	@para {number} the y1 coordinate in pixels
	 *	@para {number} the x2 (optional) coordinate in pixels
	 *	@para {number} the y2 (optional) coordinate in pixels
	 */
	this.line = function(x1, y1, x2, y2) {
		logError(arguments[1], arguments[0]);
	};
	/**
	 *	Draws arc on the canvas.
	 *
	 *	@para {number} the x1 coordinate in pixels
	 *	@para {number} the y1 coordinate in pixels
	 *	@para {number} the x2 (optional) coordinate in pixels
	 *	@para {number} the y2 (optional) coordinate in pixels
	 */
	this.arc = function(x, y, radius, a1, a2) {
		logError(arguments[1], arguments[0]);
	};

	this.fillArc = function(x, y, radius, a1, a2) {
		logError(arguments[1], arguments[0]);
	};

	this.circle = function(x, y, radius) {
		logError(arguments[1], arguments[0]);
	};

	this.fillCircle = function(x, y, radius) {
		logError(arguments[1], arguments[0]);
	};

	this.ellipse = function(x, y, r1, r2) {
		logError(arguments[1], arguments[0]);
	};

	this.fillEllipse = function(x, y, r1, r2) {
		logError(arguments[1], arguments[0]);
	};

	this.fillRect = function(x, y, width, height) {
		logError(arguments[1], arguments[0]);
	};

	this.polyLine = function(points) {
		logError(arguments[1], arguments[0]);
	};

	this.polygon = function(points) {
		logError(arguments[1], arguments[0]);
	};

	this.fillPoly = function(points) {
		logError(arguments[1], arguments[0]);
	};

}

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

/**
 * Print Object
 *
 * param {String} cname = graphics object id
 * param {Number} x = x co-ordinate of gfx object
 * param {Number} y = y co-ordinate of gfx object
 * param {Number} fontsize = desired font size
 */
function PrintObject(acontainer, acanvas, fontsize) {
	var canvas = acanvas,canvasName = canvas.id,
	container = acontainer,myLabels = [],
	labelCount = 0,fontSize = fontsize,
	canvasX = findPosition.getAbsPosLeft(acontainer),
	canvasY = findPosition.getAbsPosTop(acontainer);

	this.setFontSize = function(s) {
		fontSize = s;
	};

	this.getFontSize = function() {
		return (fontSize);
	};

	/* deletes all label elements */
	this.deleteLabelDivs = function() {
		var length = myLabels.length,i = 0;
		for ( i = 0; i < length; i++) {
			document.removeElement(myLabels[i]);
		}
		labelCount = 0;
	};

	this.hideLabels = function() {
		var length = myLabels.length;
		var i = 0;
		for ( i = 0; i < length; i++) {
			myLabels[i].style.display = 'none';
		}
	};

	this.showLabels = function() {
		var length = myLabels.length,i = 0;
		canvasX = findPosition.getAbsPosLeft(acontainer);
		canvasY = findPosition.getAbsPosTop(acontainer);
		for ( i = 0; i < length; i++) {
			myLabels[i].style.display = 'block';
		}
	};

	this.print = function(x, y, text) {
		var aName = canvasName + 'label' + labelCount;
		var label = makeLabel(aName);
		var style = label.style;
		x = x + canvasX;
		y = y + canvasY;
		myLabels[labelCount] = label;
		label.innerHTML = text;
		style.top = y + 'px';
		style.left = x + 'px';
		labelCount++;
	};

	this.printLeft = function(x, y, text) {
		var aName = canvasName + 'label' + labelCount;
		var label = makeLabel(aName);
		var style = label.style;
		x = x + canvasX - 30;
		y = y + canvasY;
		myLabels[labelCount] = label;
		label.innerHTML = text;
		style.textAlign = 'right';
		style.top = y + 'px';
		style.left = x + 'px';
		style.zIndex = 5;
		labelCount++;
	};

	this.printCenter = function(x, y, text) {
		var aName = canvasName + 'label' + labelCount;
		var width = (text.length * fontSize) / 3;
		var label = makeLabel(aName);
		var style = label.style;
		x = x + canvasX;
		y = y + canvasY;
		myLabels[labelCount] = label;

		label.innerHTML = text;
		style.textAlign = 'center';
		style.top = y + 'px';
		style.left = (x - width) + 'px';
		style.zIndex = 5;
		labelCount++;
	};

	/* create a div place it out of view */
	function makeLabel(id) {
		var obj = document.createElement("div");
		var style = obj.style;

		obj.id = id;
		style.fontSize = fontSize;
		obj.className = "newGraphLabel";
		container.appendChild(obj);
		return obj;
	}

}

/**
 * make GraphicsInterface() parent of CanvasObject
 */
CanvasObject.prototype = new GraphicsInterface();

/**
 *	graphics functions for canvas tag
 *	This object has been changed from the original to take advantage of the
 *	canvas capabilities I am assuming most Firefox, Opera and Chrome users
 *	tend to have the lastest browser release. M.G. 2012-09-15
 *
 *
 *	@constructor
 */
function CanvasObject() {
	var colors = [];
	var pen = 'black';
	var paper = 'blue';
	var border = 'black';
	var fillColor = 'black';
	var ctx = null;
	var gridctx = null;
	var container = null;
	var canvas = null;

	var width = 0;
	var height = 0;
	var mode = 'radian'// radians or degrees
	var direction = true;
	var PI2 = 2 * Math.PI;
	var PI180 = Math.PI/180;
	var debug = true;
	var shadows = true;
	var lineDrawWidth = 1;
	var shadowWidth = 2;
	var shadowX = 2;
	var shadowY = 3;
	var shadowAlpha = 0.35;
	var shadowColor = 'black';
	var font = 'sans';
	var fontSize = 10;
	var ascent = null;
	var textIO = null;

	/**
	 *	Attempts to initialize the canvas object.
	 *
	 *	param {String}	this id of the container to create a canvas tag in.
	 *	returns {Object} the canvas context or null
	 */
	this.init = function(id) {
		var myDiv = document.getElementById(id);
		ctx = null;
		//fool proofing.
		if (myDiv !== null) {
			width = myDiv.style.width;
			height = myDiv.style.height;

			width = parseInt(width.replace('px', ''));
			height = parseInt(height.replace('px', ''));
			
			canvas = document.createElement('canvas');
			container = myDiv;

			textIO = new PrintObject(container, canvas, fontSize);
			ctx = canvas.getContext('2d');
			if (ctx !== null) {
				var canvasX = findPosition.getAbsPosLeft(myDiv);
				var canvasY = findPosition.getAbsPosTop(myDiv);
				canvas.setAttribute('id', id + 'canvas');
				canvas.setAttribute('width', width + 'px');
				canvas.setAttribute('height', height + 'px');
				var style = canvas.style;
				style.position = 'absolute';
				style.top = '0px';
				style.left = '0px';
				style.zIndex = 1;
				ctx = canvas.getContext('2d');
				myDiv.appendChild(canvas);
			}
		}
		return (ctx);
	};
	/*-----------------------------CONGFIG FUNCTIONS------------------------------*/
	this.getCanvasId = function() {
		return canvas.getAttribute('id');
	};

	this.setCanvasId = function(aname) {
		canvas.setAttribute('id', aname);
		return this;
	};

	this.getHeight = function() {
		return (height);
	};

	this.getWidth = function() {
		return (width);
	};

	this.getCanvasX = function() {
		return (canvasX);
	};

	this.getCanvasY = function() {
		return (canvasY);
	};
	/**
	 *	Set to debug mode
	 */
	this.setDebug = function() {
		debug = true;
	};
	/**
	 *	Clears debug mode
	 */
	this.clearDebug = function() {
		debug = false;
	};

	/**
	 *	Turns on shadows and optionally sets the shadow offset
	 *
	 *	@para {Number} the [x] offset in pixels
	 *	@para {Number} the [y] offset in pixels
	 */
	this.setShadows = function(x, y) {
		shadows = true;
		shadowX = x || shadowX;
		shadowY = y || shadowY;
		return (this);
	};

	/**
	 *	Returns the shadows mode.
	 *
	 *	@returns {boolean} shadows on or off
	 */
	this.getShadows = function() {
		return (shadows);
	};

	this.setAlpha = function(alpha) {
		globalAlpha = alpha
		ctx.globalAlpha = alpha;
		return this;
	};

	this.getAlpha = function() {
		return (globalApha);
	};

	this.setDirection = function(dir) {
		direction = dir;
		return this;
	};

	this.getDirection = function(dir) {
		return direction;
	};

	this.save = function() {
		ctx.save();
		return this;
	};

	this.restore = function() {
		ctx.restore();
		return this;
	};

	this.setFillColor = function(color) {
		fillColor = color;
		ctx.fillStyle = color;
		return this;
	};

	this.getFillColor = function() {
		return (fillColor);
	};

	this.setShadowColor = function(color) {
		shadowColor = color;
		return this;
	};

	this.getShadowColor = function() {
		return (shadowColor);
	};

	this.getShadowColor = function() {
		return (shadowColor);
	};

	this.setShadowAlpha = function(alpha) {
		shadowAlpha = alpha;
		return this;
	};

	this.getShadowAlpha = function() {
		return (shadowAlpha);
	};

	this.clearShadows = function() {
		shadows = false;
		return this;
	};

	this.setShadowWidth = function(s) {
		shadowWidth = s || shadowWidth;
		return this;
	};

	this.setDeg = function() {
		mode = 'degree';
	};

	this.setRad = function() {
		mode = 'radian';
		return this;
	};

	this.hide = function(){
		canvas.style.visibility = 'hidden';
	};

	this.show = function(){
		canvas.style.visibility = 'visible';
	}

	/**
	 *	Returns the shadows mode.
	 *
	 *	@return {String} mode
	 */
	this.getMode = function() {
		return (mode);
	};

	this.setLineWidth = function(lineWidth) {
		lineDrawWidth = lineWidth;
		ctx.lineWidth = lineWidth;
		return this;
	};

	this.getLineWidth = function() {
		return (lineDrawWidth);
	};

	this.setFontSize = function(size) {
		textIO.setFontSize(size);
		return this;
	};

	this.getFontSize = function() {
		return (textIO.getFontSize());
	};

	function debugLib(str, a) {
		var length = a.length;
		for (var i = 0; i < length; i++) {
			str += ' ' + a.arguments[i];
		}
		console.log(str);
	}

	/*-----------------------------TEXT FUNCTIONS--------------------------------*/
	function deleteLabelDivs() {
		/* deletes all label elements */
		textIO.deleteLabelDivs();
	}


	this.hideLabels = function() {
		textIO.hideLabels();
		return this;
	};

	this.showLabels = function() {
		textIO.showLabels();
		return this;
	};

	this.print = function(x, y, text) {
		textIO.print(x, y, text);
	};

	this.printLeft = function(x, y, text) {
		textIO.printLeft(x, y, text);
	};

	this.printCentre = function(x, y, text) {
		textIO.printCenter(x, y, text);
	};

	this.printCenter = function(x, y, text) {
		textIO.printCenter(x, y, text);
	};

	/*-----------------------------GFX FUNCTIONS--------------------------------*/
	this.clear = function(color) {
		/* clear canvas */
		var length = this.clear.arguments.length;
		if (length > 0) {
			paper = color;
			canvas.style.backgroundColor = color;
		}
		ctx.clearRect(0, 0, width, height);
		deleteLabelDivs();
		return this;
	};

	this.getColor = function() {
		return (pen);
	};
	/**
	 *	Sets the application colours
	 *
	 *	@param {String} color1 is the pen colour
	 *	@param {String} [color2] is the paper colour
	 *	@param {String} [color3] is border colour
	 */
	this.color = function(color1, color2, color3) {
		pen = color1;
		ctx.strokeStyle = color1;
		if ( typeof color2 !== 'undefined') {
			paper = color2;
			canvas.style.backgroundColor = color2;
			if ( typeof color3 !== 'undefined') {
				border = color3;
				canvas.style.borderColor = color3;
			}
		}
		return this;
	};

	function shadowWithFill(callback) {
		if (shadows === true) {
			ctx.save();
			ctx.fillStyle = shadowColor;
			ctx.globalAlpha = 0.35;
			ctx.lineWidth = shadowWidth;
			callback();
			ctx.restore();
		}
	}

	function shadowWithStroke(callback) {
		if (shadows === true) {
			ctx.save();
			ctx.strokeStyle = shadowColor;
			ctx.globalAlpha = 0.35;
			ctx.lineWidth = shadowWidth;
			callback();
			ctx.restore();
		}
	}

	/**
	 *	Plots a point on the canvas.
	 *
	 *	@param {Integer} the x coordinate
	 *	@param {Integer} the y coordinate
	 */
	this.plot = function(x, y) {
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		shadowWithFill(function() {
			ctx.fillRect(x + shadowX, y + shadowY, lineDrawWidth, lineDrawWidth);
		});

		ctx.fillRect(x, y, lineDrawWidth, lineDrawWidth);
		ctx.restore();
		return this;
	};
	/**
	 *	Plots a series of points on the canvas.
	 *
	 *	@param {Array} points is an array of x and y coordinates
	 */
	this.plotArray = function(points) {
		var length = points.length - (points.length % 2);
		
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		if (length >= 2) {
			var shape = function(dx, dy) {
				for (var i = 0; i < length; i = i + 2) {
					var x = points[i];
					var y = points[i + 1];
					ctx.fillRect(x + dx, y + dy, lineDrawWidth, lineDrawWidth);
				}
			}
			shadowWithFill(function() {
				shape(shadowX, shadowY);
			});
			shape(0, 0);
		}
		ctx.restore();
		return this;
	};

	/**
	 *	Draws a line on the canvas.
	 *
	 *	@para {number} the x1 coordinate in pixels
	 *	@para {number} the y1 coordinate in pixels
	 *	@para {number} the x2 coordinate in pixels
	 *	@para {number} the y2 coordinate in pixels
	 */
	this.line = function(x1, y1, x2, y2) {

		var linus = function(dx, dy) {
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1 + dx, y1 + dy);
			ctx.lineTo(x2 + dx, y2 + dy);
			ctx.closePath();
			ctx.stroke();
			ctx.restore();
		}
		shadowWithStroke(function() {
			linus(shadowX, shadowY);
		});

		linus(0, 0);
		return this;
	};

	/**
	 *	Draws an arc on the canvas.
	 *	By default radians are used. However if the object is in degrees mode
	 *	the start and end angles will be converted to radians.
	 *	Also by default the direction is set true which means arcs will be drawn
	 *	clockwise. If direction is set to false the drawing will be anticlockwise.
	 *
	 *	@param {Intger} the x coordinate in pixels
	 *	@param {Intger} the y coordinate in pixels
	 *	@param {Intger} the radius in pixels
	 *	@param {Intger} the a1 start angle
	 *	@param {Intger} the a2 end angle
	 */
	this.arc = function(x, y, radius, startAngle, endAngle) {
		if (mode === 'degree') {
			startAngle *= PI180;
			endAngle *= PI180;
		}
		var shape = function(dx, dy) {
			ctx.beginPath();
			ctx.arc(x + dx, y + dy, radius, startAngle, endAngle, direction);
			ctx.stroke();
		};
		shadowWithStroke(function() {
			shape(shadowX, shadowY);
		});
		shape(0, 0);
		return this;
	};

	/**
	 *	Draws a filled arc on the canvas. This should always a sector ( a wedge of pie ),
	 *  it should never look like a segment.
	 *	By default radians are used. However if the object is in degrees mode
	 *	the start and end angles will be converted to radians.
	 *	Also by default the direction is set true which means arcs will be drawn
	 *	clockwise. If direction is set to false the drawing will be anticlockwise.
	 *
	 *	@param {Intger} the x coordinate in pixels
	 *	@param {Intger} the y coordinate in pixels
	 *	@param {Intger} the radius in pixels
	 *	@param {Intger} the a1 start angle
	 *	@param {Intger} the a2 end angle
	 */
	this.fillArc = function(x, y, radius, a1, a2) {
		if (mode === 'degree') {
			a1 = PI180 * a1;
			a2 = PI180 * a2;
		}

		shadowWithFill(fillArcShapeShadowWithFill);
		ctx.save();
		fillArcShape(0, 0)
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		return this;
	};

	function fillArcShape(dx,dy){
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.beginPath();
		ctx.arc(x + dx, y + dy, radius, a1, a2, direction);
		ctx.lineTo(x + dx, y + dy);
		ctx.closePath();
	 }

	function fillArcShapeShadowWithFill(){
		fillArcShape(shadowX, shadowY);
		ctx.fill();
	 }

	/**
	 *	Draws a circle on the canvas.
	 *	Since a circle is 2pi radians the drawing direction and angle mode are
	 *	irrelevant.
	 *
	 *	@param {Intger} the x coordinate in pixels
	 *	@param {Intger} the y coordinate in pixels
	 *	@param {Intger} the radius in pixels
	 */
	this.circle = function(x, y, radius) {

		shadowWithStroke(function() {
			cirleShape(x + shadowX, y + shadowY, radius);
		});

		ctx.save();
		cirleShape(x, y, radius);
		ctx.restore();
		return this;
	};

	function cirleShape(x, y, radius){
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, PI2, true);
		ctx.closePath();
		ctx.stroke();
	}

	/**
	 *	Draws a filled circle on the canvas.
	 *	Since a circle is 2pi radians the drawing direction and angle mode are
	 *	irrelevant.
	 *
	 *	@param {Intger} the x coordinate in pixels
	 *	@param {Intger} the y coordinate in pixels
	 *	@param {Intger} the radius in pixels
	 */
	this.fillCircle = function(x, y, radius) {
		shadowWithFill(function() {
			fillCircleShape(x+shadowX, y+shadowY, radius);
		});
		ctx.save();
		fillCircleShape(x, y, radius)
		ctx.stroke();
		return this;
	};

	function fillCircleShape(x, y, radius){
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, PI2, true);
		ctx.closePath();
		ctx.fill();
	};

	function drawEllipse(object) {
		var r1 = setter.r1, r2 = setter.r2;
		var x = setter.x, y = setter.y;

		if (arguments.length >= 4) {
			var radius = 0, sx = 0, sy = 0;
			if (r1 > r2) {
				sx = r1 / r2;
				sy = 1;
				radius = r2;
			} else {
				sx = 1;
				sy = r2 / r1;
				radius = r1;
			}

			var ellipse = function(config) {
				ctx.save();
				ctx.translate(x + config.dx, y + config.dy);
				ctx.scale(sx, sy);
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, PI2, true);
				ctx.closePath();
				if (config.fill) ctx.fill();
				if (config.stroke) ctx.stroke();
				ctx.restore();
			};
			if (fill) {
				shadowWithFill(function() {
					shape({ dx:shadowX, dy:shadowY, stroke:false, fill:true});
				});
				shape({ dx:0, dy:0, stroke:true, fill:true});	
			} else {
				shadowWithStroke(function() {
					shape({ dx:shadowX, dy:shadowY, stroke:true, fill:false});
				});
				shape({ dx:0, dy:0, stroke:true, fill:false});
			}
		}

	};

	/**
	 *	Draws an ellipse on the canvas. The horizontal and vertical
	 *	axises are used to calcule the eccentricity of ellipse.
	 *
	 *	@param {Intger} the x coordinate in pixels of the centre.
	 *	@param {Intger} the y coordinate in pixels of the centre.
	 *	@param {Intger} the r1 is the horizontal radius.
	 *	@param {Intger} the r2 is the vertical radius.
	 */
	this.ellipse = function(x, y, r1, r2) {
		var radius = 0, sx = 0, sy = 0;

		if (arguments.length >= 4) {
			var radius = 0, sx = 0, sy = 0;
			if (r1 > r2) {
				sx = r1 / r2;
				sy = 1;
				radius = r2;
			} else {
				sx = 1;
				sy = r2 / r1;
				radius = r1;
			}

			var shape = function(dx, dy) {
				ctx.save();
				ctx.translate(x + dx, y + dy);
				ctx.scale(sx, sy);
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, PI2, true);
				ctx.closePath();
				ctx.stroke();
				ctx.restore();
			};

		}
		return this;
	};

	/**
	 *	Draws a filled ellipse on the canvas. The horizontal and
	 *	vertical axises are used to calcule the eccentricity of ellipse.
	 *
	 *	@param {Intger} the x coordinate in pixels of the centre.
	 *	@param {Intger} the y coordinate in pixels of the centre.
	 *	@param {Intger} the r1 is the horizontal radius.
	 *	@param {Intger} the r2 is the vertical radius.
	 */
	this.fillEllipse = function(x, y, r1, r2) {
		var radius = 0, sx = 0, sy = 0;

		if (arguments.length >= 4) {
			if (r1 > r2) {
				sx = r1 / r2;
				sy = 1;
				radius = r2;
			} else {
				sx = 1;
				sy = r2 / r1;
				radius = r1;
			}

			var shape = function(dx, dy) {
				ctx.save();
				ctx.translate(x + dx, y + dy);
				ctx.scale(sx, sy);
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, PI2, true);
				ctx.closePath();
				ctx.stroke();
				ctx.restore();
			};
			var shape = function(dx, dy, stroke) {
				ctx.save();
				ctx.translate(x + dx, y + dy);
				ctx.scale(sx, sy);
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, PI2, true);
				ctx.closePath();
				if (fill) ctx.fill();
				if (stroke) ctx.stroke();
				ctx.restore();
			};
			shadowWithFill(function() {
				shape({ dx:shadowX, dy:shadowY, stroke:false, fill:true});
			});

			shape({ dx:0, dy:0, stroke:true, fill:true});
		}
		return this;
	};

	this.rect = function(x, y, width, height) {
		shadowWithStroke(function() {
			ctx.strokeRect(x + shadowX, y + shadowY, width, height);
		});
		ctx.strokeRect(x, y, width, height);
		return this;
	};

	this.fillRect = function(x, y, width, height) {
		shadowWithFill(function() {
			ctx.fillRect(x + shadowX, y + shadowY, width, height);
		});
		ctx.fillRect(x, y, width, height);
		ctx.strokeRect(x, y, width, height);
		return this;
	};

	function polyLineMakePath(x1, y1, x2, y2){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}

	this.polyLine = function(points) {
		var length = points.length - (points.length % 2);

		var drawLine = function(dx, dy) {
			var oldx = points[0] + sx;
			var oldy = points[1] + sy;
			for (var  i = 2; i < length; i = i + 2) {
				var x = points[i] + dx;
				var y = points[i + 1] + dy;
				polyLineMakePath(x, y, oldx, oldy);
				oldx = x;
				oldy = y;
			}
		};

		shadowWithStroke(function() {
			drawLine(shadowX, shadowY, 5);
		});
		drawLine(0, 0);
		return this;
	};

	function drawPolygon(points,fillPolygon) {
		var length = points.length - (points.length % 2);

		fillPolygon = ( length > 3 ) && ( fillPolygon || false );

		var polygon = function(dx, dy) {
			var x = points[0];
			var y = points[1];
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x, y);
			for (var i = 2; i < length; i = i + 2) {
				x = points[i];
				y = points[i + 1];
				ctx.lineTo(x + dx, y + dy);
			}
			ctx.closePath();
			if (fillPolygon) ctx.fill();
			ctx.stroke();
			ctx.restore();
		};
		if (fillPolygon) {
			shadowWithFill(function() {
				polygon(shadowX, shadowY);
			});
		} else {
			shadowWithStroke(function() {
				polygon(shadowX, shadowY);
			});	
		}
		polygon(0, 0);
	};

	this.polygon = function(points) {
		drawPolygon(points);
		return this;
	};

	this.fillPoly = function(points) {
		drawPolygon(points,true);
		return this;
	};
}