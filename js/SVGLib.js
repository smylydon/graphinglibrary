SVGObject.prototype = new GraphicsInterface();

function SVGObject() {
    "use strict";
    var colors = [];
    var pen = 'black';
    var paper = 'blue';
    var border = 'black';
    var fillColor = 'black';
    var ctx = null;
    var container = null;
    var canvas = null;
    var canvasX = 0;
    var canvasY = 0;
    var width = 0;
    var height = 0;
    var mode = 'radian'; // radian or degrees
    var direction = true;
	var PI2 = 2 * Math.PI;
	var PI180 = Math.PI/180;
    var debug = true;
    var shadows = true;
    var globalAlpha = 1;
    var lineDrawWidth = 1;
    var shadowWidth = 2;
    var shadowX = 2;
    var shadowY = 3;
    var shadowAlpha = '0.35';
    var shadowColor = 'black';
    var font = 'sans';
    var fontSize = 16;
    var ascent = null;
    var chordSettings = [1, 5, false, false];
    var chordsOn = true;
    var saveObject = [];
    var p = null;

    this.init = function (id) {
        var canvasholder = document.getElementById(id);
        width = canvasholder.style.width;
        height = canvasholder.style.height;
        canvasX = canvasholder.style.left;
        canvasY = canvasholder.style.top;
        width = width.replace('px', '');
        height = height.replace('px', '');
        canvasX = parseInt(canvasX.replace('px', ''), 10);
        canvasY = parseInt(canvasY.replace('px', ''), 10);
        if (isNaN(canvasX)) {
            canvasX = 0;
        }
        if (isNaN(canvasY)) {
            canvasY = 0;
        }

        var cleft = 0, ctop = 0, obj = canvasholder;
        cleft = parseInt((obj.style.marginLeft).replace('px', ''), 10);
        ctop = parseInt((obj.style.marginTop).replace('px', ''), 10);
        while (obj != document) {
            cleft += obj.offsetLeft;
            ctop += obj.offsetTop;
            obj = obj.parentNode;
        }
        if (isNaN(cleft)) {
            cleft = 0;
        }
        if (isNaN(ctop)) {
            ctop = 0;
        }
        canvasX += cleft;
        canvasY += ctop;

        if (canvasholder !== null) {
            canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");

            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            canvas.setAttribute('version', '1.2');
            canvas.setAttribute('style', 'overlow:hidden;position:absolute;top:0;left:0');
            canvasholder.appendChild(canvas);
            p = new PrintObject(canvasholder, canvas, fontSize);
        }
    };

    this.hide = function(){
        canvas.style.visibility = 'hidden';
    };

    this.show = function(){
        canvas.style.visibility = 'visible';
    }
    this.getCanvasId = function () {
        return (canvas.id);
    };

    this.setCanvasId = function (aname) {
        canvas.setAttribute("id", aname);
        return this;
    };

    this.getCanvasX = function () {
        return (canvasX);
    };

    this.getCanvasY = function () {
        return (canvasY);
    };
    this.getColor = function () {
        return (pen);
    };

    this.getHeight = function () {
        return (height);
    };

    this.getWidth = function () {
        return (width);
    };

    this.setDebug = function () {
        debug = true;
    };

    this.clearDebug = function () {
        debug = false;
    };

    this.setShadows = function (x, y) {
        shadows = true;
        if (typeof x != 'undefined') {
            shadowX = x;
        }
        if (typeof y != 'undefined') {
            shadowY = y;
        }
        return this;
    };

    this.getShadows = function () {
        return (shadows);
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
        return this;
    };

    this.setRad = function () {
        mode = 'radian';
        return this;
    };

    this.getMode = function () {
        return (mode);
    };

    this.setLineWidth = function (width) {
        lineDrawWidth = width;
        return this;
    };

    this.getLineWidth = function () {
        return (lineDrawWidth);
    };

    this.clear = function (color) {
        canvas.innerHTML = '';
        if (typeof color !== 'undefined') {
            canvas.style.backgroundColor = color;
            paper = color;
        }
        deleteLabelDivs();
        return this;
    };

    this.setFontSize = function (size) {
        p.setFontSize(size);
        return this;
    };

    this.getFontSize = function () {
        return (p.getFontSize());
    };

    this.color = function (color1, color2, color3) {
        pen = color1;

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

    function deleteLabelDivs() {
        //deletes all label elements
        p.deleteLabelDivs();
        return this;
    }

    this.hideLabels = function () {
        p.hideLabels();
        return this;
    };

    this.showLabels = function () {
        p.showLabels();
        return this;
    };

    this.print = function (x, y, text) {
        p.print(x, y, text);
        return this;
    };

    this.printLeft = function (x, y, text) {
        p.printLeft(x, y, text);
        return this;
    };

    this.printCenter = function (x, y, text) {
        p.printCenter(x, y, text);
        return this;
    };

    this.plot = function (x, y, color) {
        this.fillRect(x, y, lineDrawWidth, lineDrawWidth);
        return this;
    };

    this.plotArray = function (points) {
        var x = 0, y = 0, i = 0;
        var aWidth = lineDrawWidth;
        var bWidth = shadowWidth;

        var length = points.length;

        if (length >= 2) {
            for (i = 0; i < length; i = i + 2) {
                x = points[i];
                y = points[i + 1];
                this.fillRect(x, y, aWidth, aWidth);
            }
        }
        return this;
    };

    this.line = function (x1, y1, x2, y2, color) {
        var attributes = { x1:x1, y1:y1, x2:x2, y2:y2, color:color };
        var setter = { name:'line', styles:{ fill:'none' } , attributes:attributes};

        if (shadows === true) {
            var attributes2 = {
                x1: x1 + shadowX,
                y1: y1 + shadowY,
                x2: x2 + shadowX,
                y2: y2 + shadowY
            },
            setter2 = MNS.extend(setter,{});

            setter2.attributes = attributes2;
            makeAShadow(setter2);
        }
        makeAShape(setter);
        return this;
    };

    /*
        #
        #   Convert an elliptical arc based around a central point
        #   to an elliptical arc parameterized for SVG.
        #
        #   Input is a list containing:
        #       center x coordinate
        #       center y coordinate
        #       x-radius of ellipse
        #       y-radius of ellipse
        #       beginning angle of arc in degrees
        #       arc extent in degrees
        #       x-axis rotation angle in degrees
        #
        #   Output is a list containing:
        #
        #       x-coordinate of beginning of arc
        #       y-coordinate of beginning of arc
        #       x-radius of ellipse
        #       y-radius of ellipse
        #       large-arc-flag as defined in SVG specification
        #       sweep-flag  as defined in SVG specification
        #       x-coordinate of endpoint of arc
        #       y-coordinate of endpoint of arc
        #
        */
    function convert_to_svg(cx, cy, rx, ry, theta1, delta, phi) {
        var theta2 = delta + theta1;
        var cos = Math.cos, sin = Math.sin;
        var cos_phi = cos(phi), sin_phi = sin(phi), sin_mphi = sin(-phi);
        var cos_theta1 = cos(theta1), sin_theta1 = sin(theta1);
        var cos_theta2 = cos(theta2), sin_theta2 = sin(theta2);

        var x0 = cx + cos_phi * rx * cos_theta1 + sin_mphi * ry * sin_theta1;
        var y0 = cy + sin_phi * rx * cos_theta1 + cos_phi * ry * sin_theta1;

        var x1 = cx + cos_phi * rx * cos_theta2 + sin_mphi * ry * sin_theta2;
        var y1 = cy + sin_phi * rx * cos_theta2 + cos_phi * ry * sin_theta2;

        var large_arc = (delta > Math.PI) ? 1 : 0;
        var sweep = (delta > 0) ? 1 : 0;

        return [x0, y0, rx, ry, phi, large_arc, sweep, x1, y1];
    }

    this.arc = function (x, y, radius, a1, a2, color, outline) {
        var a = convert_to_svg(x, y, radius, radius, a1, a2 - a1, 0);
        var path = makeAShape('path', 'none');
        var s = "M " + a[0] + " " + a[1]; // Moveto initial point
        s += " A " + a[2] + " " + a[3]; //# Arc command and radii,
        s += " " + a[4]; //# angle of rotation,
        s += " " + a[5]; //# the "large-arc" flag,
        s += " " + a[6]; //# the "sweep" flag,
        s += " " + a[7] + " " + a[8]; //# and the endpoint
        path.setAttribute("d", s);
        return this;
    };

    this.fillArc = function (x, y, radius, a1, a2, fill, outline) {
        return this;
    };

    function setAttributes(object,attributes) {
        for(var property in attributes) {
            object.setAttribute(property,attributes[property])
        }
    };

    function makeAnimation(attributes) {
        var anim = document.createElementNS("http://www.w3.org/2000/svg", 'animate');
        attributes.dur = '1000ms';
        attributes.fill = 'freeze';
        setAttributes(anim,attributes);
        attributes.shape.appendChild(anim);
    };

    function getDefaultStyles(object) {
        var styles = { fill:'none', stroke: pen, opacity:globalAlpha, 'stroke-width':lineDrawWidth};
        return MNS.extend(styles,object);
    };

    function getShadowStyles(object) {
        var styles = getDefaultStyles({ stroke:shadowColor, opacity:shadowAlpha});
        return MNS.extend(styles,object);
    };

    function makeAShape(shape) {
        var shadow = shape.shadow || false,
            aShape = document.createElementNS("http://www.w3.org/2000/svg", shape.name),
            style = '',
            styles = !shadow ?  getDefaultStyles(shape.styles):
                                getShadowStyles(shape.styles);
        for(var property in styles) {
            style += property+':'+styles[property]+';';
        }
        aShape.setAttribute('style',style);
        setAttributes(aShape,shape.attributes);
        canvas.appendChild(aShape);
        return aShape;
    }

    function makeAShadow(shape) {
        shape.shadow = true;
        var object = makeAShape(shape);
        shape.shadow = false;
        return object;
    }

    function circles(cx, cy, radius, fill) {
        var attributes = { cx:cx , cy: cy , r:radius};
        var setter = { name:'circle', styles:{ fill:fill } , attributes:attributes};

        if (shadows === true) {
            var attributes2 = MNS.extend(attributes, {
                cx: cx + shadowX,
                cy: cy + shadowY
            });
            var setter2 = MNS.extend(setter,{ });
            setter2.attributes = attributes2;
            makeAShadow(setter2);
        }

        makeAShape(setter);
    }

    this.circle = function (x, y, radius) {
        circles(x, y, radius, 'none');
        return this;
    };

    this.fillCircle = function (x, y, radius) {
        circles(x, y, radius, fillColor);
        return this;
    };

    function ellipses(cx, cy, rx, ry, fill) {
        var attributes = { cx:cx , cy: cy, rx:rx, ry:ry };
        var setter = { name:'ellipse', styles:{ fill:fill } , attributes:attributes};

        if (shadows === true) {
            var attributes2 = MNS.extend(attributes, {
                cx: cx + shadowX,
                cy: cy + shadowY
            });
            var setter2 = MNS.extend(setter,{ });
            setter2.attributes = attributes2;
            makeAShadow(setter2);
        }
        makeAShape(setter);
    }

    this.ellipse = function (x, y, r1, r2) {
        ellipses(x, y, r1, r2, 'none');
        return this;
    };

    this.fillEllipse = function (x, y, r1, r2) {
        ellipses(x, y, r1, r2, fillColor);
        return this;
    };

    function rectangle(x, y, aWidth, aHeight, fill, animate) {
        var attributes = { x:x, y:y, width:aWidth, height:aHeight, fill:fill };
        var setter = { name:'rect', styles:{ fill:fill } , attributes:attributes};

        if (shadows === true) {
            var attributes2 = MNS.extend(attributes, {
                x: x + shadowX,
                y: y + shadowY
            });
            var setter2 = MNS.extend(setter,{ });
            setter2.attributes = attributes2;
            makeAShadow(setter2);
        }
        var aRect = makeAShape(setter);

        if(animate && aHeight>=1){
            aRect.setAttribute('y', y+aHeight-1);
            aRect.setAttribute('height', 1);
            //makeAnimation(attributeName,from,to,shape)
            makeAnimation({attributeName:'y', from:y+aHeight-1, to:y, shape:aRect});
            makeAnimation({attributeName:'height', from:1, to:aHeight, shape:aRect});
        }else{
            aRect.setAttribute('y', y);
            aRect.setAttribute('height', aHeight);
        }
    }

    this.rect = function (x, y, aWidth, aHeight) {
        rectangle(x, y, aWidth, aHeight, 'none');
        return this;
    };

    this.fillRect = function (x, y, aWidth, aHeight,animate) {
        rectangle(x, y, aWidth, aHeight, fillColor,animate);
        return this;
    };

    function polygons(name, points, fill) {
        var mypoints1 = '', mypoints2 = '';
        for (var i = 0, length=points.length; i < length; i += 2) {
            var x = points[i],
                y = points[i + 1];
            mypoints1 += (x + ',' + y + ' ');
            mypoints2 += (x + shadowX) + ',' + (y + shadowY) + ' ';
        }
        var setter = { name:name, styles:{ fill:fill } , attributes:{ points:mypoints1 }};

        if (shadows === true) {
            var attributes2 ={
                points:mypoints2
            };
            var setter2 = MNS.extend(setter,{ });
            setter2.attributes = attributes2;
            makeAShadow(setter);
        }
        makeAShape(setter);
        return this;
    }

    this.polyLine = function (points) {
        polygons('polyline', points, 'none');
        return this;
    };

    this.polygon = function (points) {
        polygons('polygon', points, 'none');
        return this;
    };

    this.fillPoly = function (points) {
        polygons('polygon', points, fillColor);
        return this;
    };

    this.save = function () {
        saveObject.push(pen);
        saveObject.push(paper);
        saveObject.push(border);
        saveObject.push(fillColor);
        saveObject.push(width);
        saveObject.push(height);
        saveObject.push(mode);
        saveObject.push(direction);
        saveObject.push(debug);
        saveObject.push(shadows);
        saveObject.push(lineDrawWidth);
        saveObject.push(shadowWidth);
        saveObject.push(shadowX);
        saveObject.push(shadowY);
        saveObject.push(shadowColor);
        saveObject.push(font);
        saveObject.push(fontSize);
        saveObject.push(ascent);
        saveObject.push(globalAlpha);
        saveObject.push(shadowAlpha);
        return this;
    };

    this.restore = function () {
        shadowAlpha = saveObject.pop();
        globalAlpha = saveObject.pop();
        ascent = saveObject.pop();
        fontSize = saveObject.pop();
        font = saveObject.pop();
        shadowColor = saveObject.pop();
        shadowY = saveObject.pop();
        shadowX = saveObject.pop();
        shadowWidth = saveObject.pop();
        lineDrawWidth = saveObject.pop();
        shadows = saveObject.pop();
        debug = saveObject.pop();
        direction = saveObject.pop();
        mode = saveObject.pop();
        height = saveObject.pop();
        width = saveObject.pop();
        fillColor = saveObject.pop();
        border = saveObject.pop();
        paper = saveObject.pop();
        pen = saveObject.pop();
        return this;
    };

    this.setAlpha = function (alpha) {
        globalAlpha = alpha;
    };

    this.getAlpha = function () {
        return globalAlpha;
    };

    this.setFillColor = function (color) {
        fillColor = color;
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

    this.setShadowAlpha = function (alpha) {
        shadowAlpha = alpha;
        return this;
    };

    this.getShadowAlpha = function () {
        return shadowAlpha;
    };
}