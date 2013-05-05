VMLObject.prototype = new GraphicsInterface();

function VMLObject() {
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
    var debug = true;
    var shadows = true;
    var globalAlpha = 1;
    var lineDrawWidth = 1;
    var shadowWidth = 2;
    var shadowX = 2;
    var shadowY = 3;
    var shadowAlpha = '35%';
    var shadowColor = 'black';
    var font = 'sans';
    var fontSize = 16;
    var ascent = null;
    var chordSettings = new Array(1, 5, false, false);
    var chordsOn = true;
    var saveObject = [];
    var p = null;

    this.init = function (id) {
        canvas = document.getElementById(id);
        width = canvas.style.width;
        height = canvas.style.height;
        canvasX = canvas.style.left;
        canvasY = canvas.style.top;
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
        //alert(canvasX+"--"+canvasY);
        var cleft = 0;
        var ctop = 0;
        var obj = canvas;
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
        //alert(cleft+"--3--"+ctop);
        canvasX += cleft;
        canvasY += ctop;

        if (canvas !== null) {
            // add VML namespace
            document.namespaces.add("v", "urn:schemas-microsoft-com:vml");

            // add CSS rule
            var style = document.createStyleSheet();
            style.addRule('v\\:*', "behavior: url(#default#VML);");
            p = new PrintObject(id, canvasX, canvasY, fontSize);
        }
    };

    this.getCanvasId = function () {
        return (canvas.id);
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
    };

    this.getShadows = function () {
        return (shadows);
    };

    this.clearShadows = function () {
        shadows = false;
    };

    this.setShadowWidth = function (s) {
        if (typeof s !== 'undefined') {
            shadowWidth = s;
        }
    };

    this.setDeg = function () {
        mode = 'degree';
    };

    this.setRad = function () {
        mode = 'radian';
    };
    this.getMode = function () {
        return (mode);
    };
    this.setLineWidth = function (width) {
        lineDrawWidth = width;
    };

    this.getLineWidth = function () {
        return (lineDrawWidth);
    };

    this.clear = function (color) {
        canvas.innerHTML = '';
        if (typeof color !== 'undefined') {
            canvas.backgroundColor = color;
            paper = color;
        }
        deleteLabelDivs();
    };

    this.setFontSize = function (size) {
        p.setFontSize(size);
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
    };

    function deleteLabelDivs() {
        //deletes all label elements
        p.deleteLabelDivs();
    }

    this.hideLabels = function () {
        p.hideLabels();
    };

    this.showLabels = function () {
        p.showLabels();
    };

    this.print = function (x, y, text) {
        p.print(x, y, text);
    };

    this.printLeft = function (x, y, text) {
        p.printLeft(x, y, text);
    };

    this.printCentre = function (x, y, text) {
        p.printCenter(x, y, text);
    };

    this.printCenter = function (x, y, text) {
        p.printCenter(x, y, text);
    };

    this.plot = function (x, y, color) {
        alert('no plot');
    };

    this.plotArray = function (points) {
        var length = 0;
        var x = 0;
        var y = 0;
        var oldx = 0;
        var oldy = 0;
        var i = 0;
        var aWidth = lineDrawWidth;
        var bWidth = shadowWidth;
        var style = null;

        length = points.length - (points.length % 2);

        if (length > 2) {
            var aRect = function (x, y) {
                var bRect = document.createElement('v:rect');
                style = aRect.style;
                style.position = 'absolute';
                style.top = (x + shadowX + canvasX) + 'px';
                style.left = (y + shadowY + canvasY) + 'px';
                style.width = aWidth;
                style.height = aWidth;
                aRect.strokeColor = shadowColor;
                aRect.fillcolor = shadowColor;
                aRect.stroke.opacity = shadowAlpha;
                aRect.stroke.weight = shadowWidth;
                canvas.appendChild(bRect);
            };

            var cRect = function (x, y) {
                x += canvasX;
                y += canvasY;
                dRect = document.createElement('v:rect');
                canvas.appendChild(dRect);
                style = aRect.style;
                style.position = 'absolute';
                style.top = x + 'px';
                style.left = y + 'px';
                style.width = bWidth;
                style.height = bWidth;
                aRect.strokeColor = pen;
                aRect.fillcolor = fillColor;
                aRect.stroke.opacity = globalAlpha;
                aRect.stroke.weight = lineDrawWidth;
            };

            if (shadows === true) {
                for (i = 0; i < length; i = i + 2) {
                    x = points[i];
                    y = points[i + 1];
                    aRect(x, y);
                }
                ctx.restore();
            }

            for (i = 0; i < length; i = i + 2) {
                x = points[i];
                y = points[i + 1];
                cRect(x, y);
            }
        }
    };

    this.line = function (x1, y1, x2, y2, color) {
        var aline = null;
        x1 += canvasX;
        x2 += canvasX;
        y1 += canvasY;
        y2 += canvasY;
        if (shadows === true) {
            aline = document.createElement('v:line');
            canvas.appendChild(aline);
            aline.from = (x1 + shadowX) + ',' + (y1 + shadowY);
            aline.to = (x2 + shadowX) + ',' + (y2 + shadowY);
            aline.strokeColor = shadowColor;
            aline.stroke.opacity = shadowAlpha;
            aline.stroke.weight = shadowWidth;
        }
        aline = document.createElement('v:line');
        canvas.appendChild(aline);
        aline.from = x1 + ',' + y1;
        aline.to = x2 + ',' + y2;
        aline.strokeColor = pen;
        aline.stroke.opacity = globalAlpha;
        aline.stroke.weight = lineDrawWidth;
    };

    this.arc = function (x, y, radius, a1, a2, color, outline) {
        alert('no arc');
    };

    this.fillArc = function (x, y, radius, a1, a2, fill, outline) {
        alert('no fillarc');
    };

    this.circle = function (x, y, radius) {
        x += canvasX;
        y += canvasY;
        var anOval = null;
        var diameter = radius + radius;
        var rx = x - radius;
        var ry = y - radius;
        var style = null;

        if (shadows === true) {
            anOval = document.createElement('v:oval');
            style = anOval.style;
            style.position = 'absolute';
            style.left = rx + shadowX;
            style.top = ry + shadowY;
            style.width = diameter;
            style.height = diameter;
            anOval.filled = false;
            anOval.strokeColor = shadowColor;
            anOval.stroke.opacity = shadowAlpha;
            anOval.stroke.weight = shadowWidth;
            canvas.appendChild(anOval);
        }
        anOval = document.createElement('v:oval');
        style = anOval.style;
        style.position = 'absolute';
        anOval.filled = false;
        style.left = rx;
        style.top = ry;
        style.width = diameter;
        style.height = diameter;
        anOval.strokeColor = pen;
        anOval.stroke.opacity = globalAlpha;
        anOval.stroke.weight = lineDrawWidth;
        canvas.appendChild(anOval);
    };

    this.fillCircle = function (x, y, radius) {
        x += canvasX;
        y += canvasY;
        var anOval = null;
        var diameter = radius + radius;
        var rx = x - radius;
        var ry = y - radius;
        var style;
        if (shadows === true) {
            anOval = document.createElement('v:oval');
            style = anOvale.style;
            style.position = 'absolute';
            style.left = rx + shadowX;
            style.top = ry + shadowY;
            style.width = diameter;
            style.height = diameter;
            anOval.strokeColor = shadowColor;
            anOval.fillColor = shadowColor;
            anOval.stroke.opacity = shadowAlpha;
            anOval.stroke.weight = shadowWidth;
            canvas.appendChild(anOval);
        }
        anOval = document.createElement('v:oval');
        style = anOvale.style;
        style.position = 'absolute';
        style.left = rx;
        style.top = ry;
        style.width = diameter;
        style.height = diameter;
        anOval.strokeColor = pen;
        anOval.fillColor = fillColor;
        anOval.stroke.opacity = globalAlpha;
        anOval.stroke.weight = lineDrawWidth;
        canvas.appendChild(anOval);
    };

    this.ellipse = function (x, y, r1, r2) {
        alert('no ellipse');
    };

    this.fillEllipse = function (x, y, r1, r2, color) {
        alert('no fillellipse');
    };

    this.rect = function (x, y, aWidth, aHeight) {
        x += canvasX;
        y += canvasY;
        var aRect = null;
        var style = null;
        if (shadows === true) {
            aRect = document.createElement('v:rect');
            style = aRect.style;
            style.position = 'absolute';
            aRect.filled = false;
            style.left = (x + shadowX) + 'px';
            style.top = (y + shadowY) + 'px';
            style.width = aWidth;
            style.height = aHeight;
            aRect.strokeColor = shadowColor;
            aRect.stroke.opacity = shadowAlpha;
            aRect.stroke.weight = shadowWidth;
            canvas.appendChild(aRect);
        }
        aRect = document.createElement('v:rect');
        style = aRect.style;
        style.position = 'absolute';
        aRect.filled = false;
        style.left = x + 'px';
        style.top = y + 'px';
        style.width = aWidth;
        style.height = aHeight;
        aRect.strokeColor = pen;
        aRect.stroke.opacity = globalAlpha;
        aRect.stroke.weight = lineDrawWidth;
        canvas.appendChild(aRect);
    };

    this.fillRect = function (x, y, aWidth, aHeight) {
        x += canvasX;
        y += canvasY;
        var aRect = null;
        var style = null;
        if (shadows === true) {
            aRect = document.createElement('v:rect');
            style = aRect.style;
            style.position = 'absolute';
            style.left = (x + shadowX) + 'px';
            style.top = (y + shadowY) + 'px';
            style.width = aWidth;
            style.height = aHeight;
            aRect.strokeColor = shadowColor;
            aRect.fillColor = shadowColor;
            aRect.stroke.opacity = shadowAlpha;
            aRect.stroke.weight = shadowWidth;
            canvas.appendChild(aRect);
        }
        aRect = document.createElement('v:rect');
        style = aRect.style;
        style.position = 'absolute';
        style.left = x + 'px';
        style.top = y + 'px';
        style.width = aWidth;
        style.height = aHeight;
        aRect.strokeColor = pen;
        aRect.fillColor = fillColor;
        aRect.stroke.opacity = globalAlpha;
        aRect.stroke.weight = lineDrawWidth;
        canvas.appendChild(aRect);
    };

    this.polyLine = function (points) {
        var aPoly = null;
        var length = points.length;
        var i = 0;
        var mypoints = '';
        if (shadows === true) {
            aPoly = document.createElement('v:polyline');
            canvas.appendChild(aPoly);
            aPoly.stroke.weight = shadowWidth;
            for (i = 0; i < length; i += 2) {
                x = (points[i] + shadowX + canvasX) + 'px,';
                y = (points[i + 1] + shadowY + canvasY) + 'px,';
                mypoints += x + y;
            }
            aPoly.strokeColor = shadowColor;
            aPoly.filled = false;
            aPoly.points.value = mypoints;
            aPoly.stroke.opacity = shadowAlpha;
        }
        aPoly = document.createElement('v:polyline');
        mypoints = '';
        canvas.appendChild(aPoly);
        aPoly.stroke.weight = lineDrawWidth;
        for (i = 0; i < length; i += 2) {
            x = (points[i] + canvasX) + 'px,';
            y = (points[i + 1] + canvasY) + 'px,';
            mypoints += x + y;
        }
        aPoly.strokeColor = pen;
        aPoly.filled = false;
        aPoly.points.value = mypoints;
        aPoly.stroke.opacity = globalAlpha;
    };

    this.fillPoly = function (points) {
        var aPoly = null;
        var length = points.length;
        var i = 0;
        var mypoints = '';
        if (shadows === true) {
            aPoly = document.createElement('v:polyline');
            canvas.appendChild(aPoly);
            aPoly.stroke.weight = shadowWidth;
            for (i = 0; i < length; i += 2) {
                x = (points[i] + shadowX + canvasX) + 'px,';
                y = (points[i + 1] + shadowY + canvasY) + 'px,';
                mypoints += x + y;
            }
            aPoly.strokeColor = shadowColor;
            aPoly.fillColor = shadowColor;
            aPoly.points.value = mypoints;
            aPoly.stroke.opacity = shadowAlpha;
        }
        aPoly = document.createElement('v:polyline');
        mypoints = '';
        canvas.appendChild(aPoly);
        aPoly.fill.opacity = globalAlpha;
        aPoly.stroke.weight = lineDrawWidth;
        for (i = 0; i < length; i += 2) {
            x = (points[i] + canvasX) + 'px,';
            y = (points[i + 1] + canvasY) + 'px,';
            mypoints += x + y;
        }
        aPoly.strokeColor = pen;
        aPoly.fillColor = fillColor;
        aPoly.points.value = mypoints;
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
    };

    this.setAlpha = function (alpha) {
        globalAlpha = alpha * 100 + '%';
    };

    this.getAlpha = function () {
        var a = globalAlpha.replace('%', '');
        a = parseInt(a,10) / 100;
        return (a);
    };

    this.setFillColor = function (color) {
        fillColor = color;
    };

    this.getFillColor = function () {
        return (fillColor);
    };

    this.setShadowColor = function (color) {
        shadowColor = color;
    };

    this.getShadowColor = function () {
        return (shadowColor);
    };

    this.setShadowAlpha = function (alpha) {
        shadowAlpha = (alpha * 100) + '%';
    };

    this.getShadowAlpha = function () {
        var a = shadowAlpha.replace('%', '');
        a = parseInt(a,10) / 100;
        return (a);
    };
}