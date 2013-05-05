/* finds the highest number in an arrays */
Array.prototype.mgGetMax = function () {
    var max = null;
    var length = this.length;
    var i = 0;
    var temp = null;
    if (length === 0) {
        return null;
    }
    for (i = 0; i < length; i++) {
        temp = this[i];
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};

/* finds the smallest number in an array */
Array.prototype.mgGetMin = function () {
    var min = null;
    var length = this.length;
    var i = 0;
    var temp = null;
    if (length === 0) {
        return null;
    }
    for (i = 0; i < length; i++) {
        temp = this[i];
        if (temp < min) {
            min = temp;
        }
    }
    return min;
};

/*for a multi-dimensional array finds element with most entries*/
Array.prototype.mgGetMaxElements = function () {
    var length = this.length;
    var data = null;
    var max = null;
    var temp = 0;
    if (length == 0) {
        return null;
    }
    for (i = 0; i < length; i++) {
        data = this[i];
        temp = data.length;
        if ((temp > max) || (max === null)) {
            max = temp;
        }
    }
    return (max);
};

/**/
Array.prototype.mgGetMax2D = function () {
    var length = this.length;
    var data = null;
    var max = null;
    var temp = 0;
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
Array.prototype.mgGetMin2D = function () {
    var length = this.length;
    var data = null;
    var min = null;
    var temp = 0;
    if (length == 0) {
        return null;
    }
    for (i = 0; i < length; i++) {
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
    function Error(caller, callee) {
        alert('Error call to a function that is not implemented:\nCaller: ' + arguments[1] + '\nCallee: ' + arguments[0]);
    }

    this.init = function () {
        //alert(arguments.callee+'');
        Error(arguments[1], arguments[0]);
    };

    /**
     *	get the canvas id
     *
     *	@return {String} the canvas id
     */
    this.getCanvasId = function () {
        Error(arguments[1], arguments[0]);
    };

    this.getHeight = function () {
        Error(arguments[1], arguments[0]);
    };

    this.getWidth = function () {
        Error(arguments[1], arguments[0]);
    };

    this.getCanvasX = function () {
        Error(arguments[1], arguments[0]);
    };

    this.getCanvasY = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setDebug = function () {
        Error(arguments[1], arguments[0]);
    };

    this.clearDebug = function () {

    };

    this.setShadows = function (x, y) {
        Error(arguments[1], arguments[0]);
    };

    this.getShadows = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setAlpha = function (alpha) {
        Error(arguments[1], arguments[0]);
    };

    this.getAlpha = function () {
        Error(arguments[1], arguments[0]);
    };

    this.save = function () {
        Error(arguments[1], arguments[0]);
    };

    this.restore = function () {
        Error(arguments[1], arguments[0]);
    };

    this.hideLabels = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setFillColor = function (color) {
        Error(arguments[1], arguments[0]);
    };

    this.getFillColor = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setShadowColor = function (color) {
        Error(arguments[1], arguments[0]);
    };
    this.getShadowColor = function () {
        Error(arguments[1], arguments[0]);
    };

    this.getShadowColor = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setShadowAlpha = function (alpha) {

    };
    this.getShadowAlpha = function () {
        Error(arguments[1], arguments[0]);
    };

    this.clearShadows = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setShadowWidth = function (s) {
        Error(arguments[1], arguments[0]);
    };

    this.setDeg = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setRad = function () {
        Error(arguments[1], arguments[0]);
    };

    this.getMode = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setLineWidth = function (lineWidth) {
        Error(arguments[1], arguments[0]);
    };

    this.getLineWidth = function () {
        Error(arguments[1], arguments[0]);
    };

    this.setFontSize = function (size) {
        Error(arguments[1], arguments[0]);
    };

    this.getFontSize = function () {
        Error(arguments[1], arguments[0]);
    };

    function debugLib(str, a) {
        Error(arguments[1], arguments[0]);
    }

    /**
     *	Clears the canvas
     *
     *	@para {String} the background color
     */
    this.clear = function (color) {
        Error(arguments[1], arguments[0]);
    };

    this.getColor = function () {
        Error(arguments[1], arguments[0]);
    };

    this.color = function (color1, color2, color3) {
        Error(arguments[1], arguments[0]);
    };


    /**
     *	Prints text to the canvas
     *
     *	@para {number} the x coordinate in pixels
     *	@para {number} the y coordinate in pixels
     *	@para {String} the text to printed
     */
    this.print = function (x, y, text) {
        Error(arguments[1], arguments[0]);
    };

    this.printLeft = function (x, y, text) {
        Error(arguments[1], arguments[0]);
    };

    this.printCenter = function (x, y, text) {
        Error(arguments[1], arguments[0]);
    };

    /**
     *	Plots a point on the canvas
     *
     *	@para {number} the x coordinate in pixels
     *	@para {number} the y coordinate in pixels
     */
    this.plot = function (x, y) {
        Error(arguments[1], arguments[0]);
    };

    /**
     *	Plots a point on the canvas
     *
     *	@para {Array} the x1 coordinate in pixels
     */
    this.plotArray = function (points) {
        Error(arguments[1], arguments[0]);
    };

    /**
     *	Draws a line on the canvas.
     *
     *	@para {number} the x1 coordinate in pixels
     *	@para {number} the y1 coordinate in pixels
     *	@para {number} the x2 (optional) coordinate in pixels
     *	@para {number} the y2 (optional) coordinate in pixels
     */
    this.line = function (x1, y1, x2, y2) {
        Error(arguments[1], arguments[0]);
    };
    /**
     *	Draws arc on the canvas.
     *
     *	@para {number} the x1 coordinate in pixels
     *	@para {number} the y1 coordinate in pixels
     *	@para {number} the x2 (optional) coordinate in pixels
     *	@para {number} the y2 (optional) coordinate in pixels
     */
    this.arc = function (x, y, radius, a1, a2) {
        Error(arguments[1], arguments[0]);
    };

    this.fillArc = function (x, y, radius, a1, a2) {
        Error(arguments[1], arguments[0]);
    };

    this.circle = function (x, y, radius) {
        Error(arguments[1], arguments[0]);
    };

    this.fillCircle = function (x, y, radius) {
        Error(arguments[1], arguments[0]);
    };

    this.ellipse = function (x, y, r1, r2) {
        Error(arguments[1], arguments[0]);
    };

    this.fillEllipse = function (x, y, r1, r2) {
        Error(arguments[1], arguments[0]);
    };

    this.fillRect = function (x, y, width, height) {
        Error(arguments[1], arguments[0]);
    };

    this.polyLine = function (points) {
        Error(arguments[1], arguments[0]);
    };

    this.polygon = function (points) {
        Error(arguments[1], arguments[0]);
    };

    this.fillPoly = function (points) {
        Error(arguments[1], arguments[0]);
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
    createObject: function (id, type) {

        var canvas = null;
        var gfx = null;
        //type = 'canvas'
        switch (type) {
            case 'svg':
                gfx = new SVGObject();
                gfx.init(id);
                break;
            case 'vml':
                gfx = new VMLObject();
                gfx.init(id);
                //gfx = null;
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
var BrowserInfo = new function () {
        var browserName = navigator.appName;
        var browserVersion = parseFloat(navigator.appVersion);
        var browser = null;

        if (browserName == 'Microsoft Internet Explorer') {
            if (browserVersion < 4.0) {
                browser = 'ie4';
            } else {
                browser = 'ie5';
            }
        } else {
            browser = 'ff';
        }

        this.getBrowser = function () {
            return (browser);
        }
    };

var findPosition = (function () {
    /**
	http://www.codingforums.com/showthread.php?t=11799
	*/
    return {
        getAbsPos: function (oId, tl) {
            var o = (typeof oId === 'String') ? document.getElementById(oId) : oId;
            return (tl === 'top') ? getAbsPosTop(o) : getAbsPosLeft(o);
        },

        getAbsPosTop: function (element) {
            var obj = element,
                val = 0;
            while (obj && obj.nodeName !== "body") {
                val += parseInt((obj.offsetTop), 10);
                obj = obj.parentNode;
                break;
            }
            return val;
        },

        getAbsPosLeft: function (element) {
            var obj = element,
                val = 0;
            while (obj && obj.nodeName !== "body") {
                val += parseInt((obj.offsetLeft), 10);
                obj = obj.parentNode;
                break;
            }
            return val;
        }
    };
})();

/**
 * Print Object
 *
 * param {String} cname = graphics object id
 * param {Number} x = x co-ordinate of gfx object
 * param {Number} y = y co-ordinate of gfx object
 * param {Number} fontsize = desired font size
 */
function PrintObject(acontainer, acanvas, fontsize) {
    var canvas = acanvas;
    var canvasName = canvas.id;
    var container = acontainer;
    var myLabels = [];
    var labelCount = 0;
    var fontSize = fontsize;
    var canvasX = findPosition.getAbsPosLeft(acontainer);
    var canvasY = findPosition.getAbsPosTop(acontainer);

    this.setFontSize = function (s) {
        fontSize = s;
    };

    this.getFontSize = function () {
        return (fontSize);
    };

    /* deletes all label elements */
    this.deleteLabelDivs = function () {
        var length = myLabels.length;
        var i = 0;
        for (i = 0; i < length; i++) {
            document.removeElement(myLabels[i]);
        }
        labelCount = 0;
    };

    this.hideLabels = function () {
        var length = myLabels.length;
        var i = 0;
        for (i = 0; i < length; i++) {
            myLabels[i].style.display = 'none';
        }
    };

    this.showLabels = function () {
        var length = myLabels.length;
        var i = 0;
        canvasX = findPosition.getAbsPosLeft(acontainer);
        canvasY = findPosition.getAbsPosTop(acontainer);
        for (i = 0; i < length; i++) {
            myLabels[i].style.display = 'block';
        }
    };

    this.print = function (x, y, text) {
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

    this.printLeft = function (x, y, text) {
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

    this.printCenter = function (x, y, text) {
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
        style.position = 'absolute';
        style.zIndex = 10;
        style.color = 'black';
        style.visibilty = 'visible';
        style.display = 'block';
        style.top = -500 + 'px';
        style.left = -500 + 'px';
        style.fontSize = fontSize;
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
    var gridCanvas = null;
    var crosshairsCanvas = null;

    var width = 0;
    var height = 0;
    var mode = 'radian' // radian or degrees
    var direction = true;
    var PI2 = 2 * Math.PI;
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
    this.init = function (id) {
        var myDiv = document.getElementById(id);
        ctx = null; //fool proofing.
        if (myDiv !== null) {
            width = myDiv.style.width;
            height = myDiv.style.height;

            width = parseInt(width.replace('px', ''));
            height = parseInt(height.replace('px', ''));
            canvas = document.createElement('canvas');
            gridCanvas = document.createElement('canvas');
            crosshairsCanvas = document.createElement('canvas');
            container = myDiv;
            canvas.style.zIndex = 100;

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
                ctx = canvas.getContext('2d');
                myDiv.appendChild(canvas);
            }
        }
        return (ctx);
    };
    /*-----------------------------CONGFIG FUNCTIONS------------------------------*/
    this.getCanvasId = function () {
        return canvas.getAttribute('id');
    };

    this.setCanvasId = function (aname) {
        canvas.setAttribute('id', aname);
        return this;
    };

    this.getHeight = function () {
        return (height);
    };

    this.getWidth = function () {
        return (width);
    };

    this.getCanvasX = function () {
        return (canvasX);
    };

    this.getCanvasY = function () {
        return (canvasY);
    };
    /**
     *	Set to debug mode
     */
    this.setDebug = function () {
        debug = true;
    };
    /**
     *	Clears debug mode
     */
    this.clearDebug = function () {
        debug = false;
    };

    /**
     *	Turns on shadows and optionally sets the shadow offset
     *
     *	@para {Number} the [x] offset in pixels
     *	@para {Number} the [y] offset in pixels
     */
    this.setShadows = function (x, y) {
        shadows = true;
        if (typeof x != 'undefined') {
            shadowX = x;
        }
        if (typeof y != 'undefined') {
            shadowY = y;
        }
        return (this);
    };

    /**
     *	Returns the shadows mode.
     *
     *	@returns {boolean} shadows on or off
     */
    this.getShadows = function () {
        return (shadows);
    };

    this.setAlpha = function (alpha) {
        globalAlpha = alpha
        ctx.globalAlpha = alpha;
        return this;
    };

    this.getAlpha = function () {
        return (globalApha);
    };

    this.setDirection = function (dir) {
        direction = dir;
        return this;
    };

    this.getDirection = function (dir) {
        return direction;
    };

    this.save = function () {
        ctx.save();
        return this;
    };

    this.restore = function () {
        ctx.restore();
        return this;
    };

    this.setFillColor = function (color) {
        fillColor = color;
        ctx.fillStyle = color;
        return this;
    };

    this.getFillColor = function () {
        return (fillColor);
    };

    this.setShadowColor = function (color) {
        shadowColor = color;
        return this;
    };

    this.getShadowColor = function () {
        return (shadowColor);
    };

    this.getShadowColor = function () {
        return (shadowColor);
    };

    this.setShadowAlpha = function (alpha) {
        shadowAlpha = alpha;
        return this;
    };

    this.getShadowAlpha = function () {
        return (shadowAlpha);
    };

    this.clearShadows = function () {
        shadows = false;
        return this;
    };

    this.setShadowWidth = function (s) {
        if (typeof s !== 'undefined') {
            shadowWidth = s;
        }
        return this;
    };

    this.setDeg = function () {
        mode = 'degree';
    };

    this.setRad = function () {
        mode = 'radian';
        return this;
    };

    /**
     *	Returns the shadows mode.
     *
     *	@return {String} mode
     */
    this.getMode = function () {
        return (mode);
    };

    this.setLineWidth = function (lineWidth) {
        lineDrawWidth = lineWidth;
        ctx.lineWidth = lineWidth;
        return this;
    };

    this.getLineWidth = function () {
        return (lineDrawWidth);
    };

    this.setFontSize = function (size) {
        textIO.setFontSize(size);
        return this;
    };

    this.getFontSize = function () {
        return (textIO.getFontSize());
    };

    function debugLib(str, a) {
        var length = a.length;
        for (var i = 0; i < length; i++) {
            str += ' ' + a.arguments[i];
        }
        alert(str);
    }

    /*-----------------------------TEXT FUNCTIONS--------------------------------*/
    function deleteLabelDivs() {
        /* deletes all label elements */
        textIO.deleteLabelDivs();
    }

    this.hideLabels = function () {
        textIO.hideLabels();
        return this;
    };

    this.showLabels = function () {
        textIO.showLabels();
        return this;
    };

    this.print = function (x, y, text) {
        textIO.print(x, y, text);
    };

    this.printLeft = function (x, y, text) {
        textIO.printLeft(x, y, text);
    };

    this.printCentre = function (x, y, text) {
        textIO.printCenter(x, y, text);
    };

    this.printCenter = function (x, y, text) {
        textIO.printCenter(x, y, text);
    };
    /*-----------------------------GFX FUNCTIONS--------------------------------*/
    this.clear = function (color) {
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

    this.getColor = function () {
        return (pen);
    };
    /**
     *	Sets the application colours
     *
     *	@param {String} color1 is the pen colour
     *	@param {String} [color2] is the paper colour
     *	@param {String} [color3] is border colour
     */
    this.color = function (color1, color2, color3) {
        pen = color1;
        ctx.strokeStyle = color1;
        if (typeof color2 !== 'undefined') {
            paper = color2;
            canvas.style.backgroundColor = color2;
            if (typeof color3 !== 'undefined') {
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
    this.plot = function (x, y) {
        ctx.save();
        ctx.fillStyle = ctx.strokeStyle;
        shadowWithFill(function () {
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
    this.plotArray = function (points) {
        var x = 0;
        var y = 0;
        var oldx = 0;
        var oldy = 0;
        var i = 0;

        var length = points.length - (points.length % 2);
        ctx.save();
        ctx.fillStyle = ctx.strokeStyle;
        if (length >= 2) {
            var shape = function (dx, dy) {
                for (i = 0; i < length; i = i + 2) {
                    x = points[i];
                    y = points[i + 1];
                    ctx.fillRect(x + dx, y + dy, lineDrawWidth, lineDrawWidth);
                }
            }
            shadowWithFill(function () {
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
    this.line = function (x1, y1, x2, y2) {

        var linus = function (dx, dy) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x1 + dx, y1 + dy);
            ctx.lineTo(x2 + dx, y2 + dy);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }

        shadowWithStroke(function () {
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
    this.arc = function (x, y, radius, a1, a2) {
        if (mode === 'degree') {
            a1 = (Math.PI / 180) * a1;
            a2 = (Math.PI / 180) * a2;
        }
        var shape = function (dx, dy) {
            ctx.beginPath();
            ctx.arc(x + dx, y + dy, radius, a1, a2, direction);
            ctx.stroke();
        };
        shadowWithStroke(function () {
            shape(shadowX, shadowY);
        });
        shape(0, 0);
        return this;
    };

    /**
     *	Draws a filled arc on the canvas. This should always a sector, it should
     *	never look like a segment.
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
    this.fillArc = function (x, y, radius, a1, a2) {
        if (mode === 'degree') {
            a1 = (Math.PI / 180) * a1;
            a2 = (Math.PI / 180) * a2;
        }

        var shape = function (dx, dy) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.beginPath();
            ctx.arc(x + dx, y + dy, radius, a1, a2, direction);
            ctx.lineTo(x + dx, y + dy);
            ctx.closePath();
        };

        shadowWithFill(function () {
            shape(shadowX, shadowY);
            ctx.fill();
        });
        ctx.save();
        shape(0, 0)
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        return this;
    };

    /**
     *	Draws a circle on the canvas.
     *	Since a circle is 2pi radians the drawing direction and angle mode are
     *	irrelevant.
     *
     *	@param {Intger} the x coordinate in pixels
     *	@param {Intger} the y coordinate in pixels
     *	@param {Intger} the radius in pixels
     */
    this.circle = function (x, y, radius) {

        shadowWithStroke(function () {
            ctx.beginPath();
            ctx.arc(x + shadowX, y + shadowY, radius, 0, PI2, true);
            ctx.closePath();
            ctx.stroke();
        });

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, PI2, true);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        return this;
    };

    /**
     *	Draws a filled circle on the canvas.
     *	Since a circle is 2pi radians the drawing direction and angle mode are
     *	irrelevant.
     *
     *	@param {Intger} the x coordinate in pixels
     *	@param {Intger} the y coordinate in pixels
     *	@param {Intger} the radius in pixels
     */
    this.fillCircle = function (x, y, radius) {
        shadowWithFill(function () {
            ctx.beginPath();
            ctx.arc(x + shadowX, y + shadowY, radius, 0, PI2, true);
            ctx.closePath();
            ctx.fill();
        });
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, PI2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        return this;
    };

    /**
     *	Draws an ellipse filled arc on the canvas. The horizontal and vertical
     *	axises are used to calcule the eccentricity of ellipse.
     *
     *	@param {Intger} the x coordinate in pixels of the centre.
     *	@param {Intger} the y coordinate in pixels of the centre.
     *	@param {Intger} the r1 is the horizontal radius.
     *	@param {Intger} the r2 is the vertical radius.
     */
    this.ellipse = function (x, y, r1, r2) {
        var length = arguments.length;
        var radius = 0;
        var sx = 0;
        var sy = 0;

        if (length >= 4) {

            if (r1 > r2) {
                sx = r1 / r2;
                sy = 1;
                radius = r2;
            } else {
                sx = 1;
                sy = r2 / r1;
                radius = r1;
            }

            var shape = function (dx, dy) {
                ctx.save();
                ctx.translate(x + dx, y + dy);
                ctx.scale(sx, sy);
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, PI2, true);
                ctx.closePath();
                ctx.stroke();
                ctx.restore();
            };
            shadowWithStroke(function () {
                shape(shadowX, shadowY);
            });
            shape(0, 0);
        }
        return this;
    };

    /**
     *	Draws a filled ellipse filled arc on the canvas. The horizontal and
     *	vertical axises are used to calcule the eccentricity of ellipse.
     *
     *	@param {Intger} the x coordinate in pixels of the centre.
     *	@param {Intger} the y coordinate in pixels of the centre.
     *	@param {Intger} the r1 is the horizontal radius.
     *	@param {Intger} the r2 is the vertical radius.
     */
    this.fillEllipse = function (x, y, r1, r2) {
        var length = arguments.length;
        var radius = 0;
        var sx = 0;
        var sy = 0;

        if (length >= 4) {
            if (r1 > r2) {
                sx = r1 / r2;
                sy = 1;
                radius = r2;
            } else {
                sx = 1;
                sy = r2 / r1;
                radius = r1;
            }

            var shape = function (dx, dy) {
                ctx.translate(x + dx, y + dy);
                ctx.scale(sx, sy);
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, PI2, true);
                ctx.closePath();
            };
            shadowWithFill(function () {
                ctx.save();
                shape(shadowX, shadowY);
                ctx.fill();
                ctx.restore();
            });
            ctx.save();
            shape(0, 0);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
        return this;
    };

    this.rect = function (x, y, width, height) {
        shadowWithStroke(function () {
            ctx.strokeRect(x + shadowX, y + shadowY, width, height);
        });
        ctx.strokeRect(x, y, width, height);
        return this;
    };

    this.fillRect = function (x, y, width, height) {
        shadowWithFill(function () {
            ctx.fillRect(x + shadowX, y + shadowY, width, height);
        });
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
        return this;
    };

    this.polyLine = function (points) {
        var x = 0;
        var y = 0;
        var oldx = 0;
        var oldy = 0;
        var i = 0;
        var length = points.length - (points.length % 2);

        var makePath = function (x1, y1, x2, y2) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };

        var linus = function (sx, sy) {
            oldx = points[0] + sx;
            oldy = points[1] + sy;
            for (i = 2; i < length; i = i + 2) {
                x = points[i] + sx;
                y = points[i + 1] + sy;
                makePath(x, y, oldx, oldy);
                oldx = x;
                oldy = y;
            }
        };

        shadowWithStroke(function () {
            linus(shadowX, shadowY, 5);
        });
        linus(0, 0);
        return this;
    };

    this.polygon = function (points) {
        var x = 0;
        var y = 0;
        var i = 0;

        var length = points.length - (points.length % 2);
        var shape = function (dx, dy) {
            x = points[0];
            y = points[1];

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, y);
            for (i = 2; i < length; i = i + 2) {
                x = points[i];
                y = points[i + 1];
                ctx.lineTo(x + dx, y + dy);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
        shadowWithStroke(function () {
            shape(shadowX, shadowY);
        });
        shape(0, 0);
        return this;
    };

    this.fillPoly = function (points) {
        var stroke = false;
        var x = 0;
        var y = 0;
        var i = 0;

        var length = points.length - (points.length % 2);
        if (length > 3) {
            var shape = function (dx, dy) {
                x = points[0];
                y = points[1];
                ctx.beginPath();
                ctx.moveTo(x, y);
                for (i = 2; i < length; i = i + 2) {
                    x = points[i];
                    y = points[i + 1];
                    ctx.lineTo(x + dx, y + dy);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            };
            shadowWithFill(function () {
                shape(shadowX, shadowY);
            });
            shape(0, 0);
        }
        return this;
    };
}