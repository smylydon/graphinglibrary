function GraphObject(aCanvasName) {
    var canvas = null;
    var dataColors = [
        '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
        '#ff3333', '#33ff33', '#3333ff', '#ffff33', '#ff33ff', '#33ffff',
        '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
        '#cc0000', '#00cc00', '#0000cc', '#cccc00', '#cc00cc', '#00cccc',
        '#990000', '#009900', '#000099', '#999900', '#990099', '#009999',
        '#330000', '#003300', '#000033', '#333300', '#330033', '#003333']; //default colours
    var dataLines = [12, 13, 14, 15, 16, 17]; //stroke colour order
    var dataFill = [6, 7, 8, 9, 10, 11, 12]; //fill colour order
    var dataXaxis = null; //x values
    var dataYaxis = null; //y values
    var dataLabels = null; //labels
    var gfx = null; //pointer to graphics library
    var chordGFx = null;
    var gridGfx = null;
    var axesGfx = null;
    var originX = 0;
    var originY = 0; 
    var minimumX = 0;
    var minimumY = 0;
    var maximumX = 0;
    var maximumY = 0;
    var factor = Math.pow(10, 6); //used to correct javascript bug with small numbers

    var areaChart = false; //area chart true or false
    var plotPolyMode = false; //line or dot plot

    var chordSettings = [1, 5, false, false]; //chord/node style

    var gridX = [];
    var gridY = [];
    var groupOn = true;
    var gridColor = 3;

    var paddingXAlpha = 0.03;
    var paddingXBeta = 0.97;
    var paddingYAlpha = 0.03;
    var paddingYBeta = 0.97;
    var orientation = 'v';
    var scalex = new ScaleObject();
    var scaley = new ScaleObject();

    scaley.noFlip = false;
    scalex.paddingAlpha = paddingXAlpha;
    scalex.paddingBeta = paddingXBeta;
    scaley.paddingAlpha = paddingYAlpha;
    scaley.paddingBeta = paddingYBeta;

    gridGfx = GraphicsFactory.createObject(aCanvasName, 'svg');

    if (gridGfx !== null) {
        gridGfx.setCanvasId(aCanvasName + 'gridcanvas');

        gfx = GraphicsFactory.createObject(aCanvasName, 'svg');
        gfx.clearDebug();

        scalex.fullLength = gfx.getWidth();
        scaley.fullLength = gfx.getHeight();

        chordGFx = GraphicsFactory.createObject(aCanvasName, 'svg');
        chordGFx.setCanvasId(aCanvasName + 'chordcanvas');
        
        axesGfx = GraphicsFactory.createObject(aCanvasName, 'svg');
        axesGfx.setCanvasId(aCanvasName + 'axescanvas');
    } else {
        alert('Error : Unable to create canvas object.');
    }

    function log(x) {
        return Math.log(x) * Math.LOG10E;
    }

    this.getContext = function () {
        return (gfx);
    };

    this.getChord = function () {
        return chordSettings;
    };

    this.setChord = function (values) {
        chordSettings = values;
        return (this);
    };

    this.turnGridOn = function () {
        gridGfx.show();
        return (this);
    };

    this.turnGridOff = function () {
        gridGfx.show();
        return (this);
    };

    this.turnChordsOn = function () {
        chordGFx.show();
        return (this);
    };

    this.turnChordsOff = function () {
        chordGFx.hide();
        return (this);
    };

    this.setFontSize = function (x) {
        gfx.setFontSize(x);
        return (this);
    };

    this.hideLabels = function () {
        gfx.hideLabels();
        return (this);
    };

    this.showLabels = function () {
        gfx.showLabels();
        return (this);
    };


    this.setCustomAxis = function (custom, step, start, finish) {
        if (custom==='x' || custom==='y') {
            var scaler = (custom === 'x') ? scalex : scaley;
            step = Math.floor(step * factor);
            start = Math.floor(start * factor);
            finish = Math.floor(finish * factor);

            scaler.customScale = true;
            scaler.customStep = step;
            scaler.customStart = start;
            scaler.customEnd = finish;
        }
        return (this);
    };

    this.disableCustomAxis = function (custom) {
        switch(custom.toLowerCase()) {
            case 'x':
                scalex.customScale = false;
                break;
            case 'y':
                scaley.customScale = false;
                break;
            case 'xy':
            case 'yx':
            case 'undefined':
                scalex.customScale = false;
                scaley.customScale = false;
            break;
        }
        return (this);
    };

    this.setCanvas = function (aCanvas) {
        gfx = aCanvas;
        gfx.clearDebug();

        scalex.fullLength = gfx.getWidth();
        scaley.fullLength = gfx.getHeight();
        return (this);
    };

    this.setXdata = function (data) {
        data1 = data;
        return (this);
    };

    this.setYdata = function (data) {
        data2 = data;
        return (this);
    };

    this.setPieData = function (dataA, dataB) {
        data1 = dataA;
        data2 = dataB;
        return (this);
    };

    this.setXYData = function (dataX, dataY) {
        dataXaxis = dataX;
        dataYaxis = dataY;
        return (this);
    };

    this.setLabelsX = function (data) {
        scalex.customLabels = data;
        scalex.customLabelsOn = true;
        return (this);
    };

    this.setLabelsY = function (data) {
        scaley.customLabels = data;
        scaley.customLabelsOn = true;
        return (this);
    };

    this.setLabelsXY = function (dataX, dataY) {
        scalex.customLabels = dataX;
        scaley.customLabels = dataY;
        scalex.customLabelsOn = true;
        scaley.customLabelsOn = true;
        return (this);
    };

    //clear canvas
    this.clear = function (color) {
        gfx.clear(color ? color : 'white');
        return (this);
    };

    function test() {
        var i = 0, j = 0, w = 28, c = 0;
        var k = 32 * 6, l = 0;
        gfx.clearShadows();
        for (j = 0; j < 6; j++) {
            for (i = 0; i < k; i += 32) {
                gfx.setFillColor(dataColors[c]);
                gfx.color(dataColors[c]);
                gfx.fillRect(i, l, w, w);
                c++;
            }
            l += 32;
        }
    }

    this.execute = function (parameters) {
        var plotMode = true, areaMode = false, axisMode = true;

        if (parameters.length <= 0) {
            alert('Bad parameters list!!!!');
            return '0xff';
        }
        gfx.clear();
        switch (parameters[0]) {
            case 'vb':
                barGraphVertical(parameters);
                break;
            case 'hb':
                barGraphHorizontal(parameters);
                break;
            case 'lg':

                if (parameters.length > 1) {
                    plotMode = parameters[1];
                }
                if (parameters.length > 2) {
                    areaMode = parameters[2];
                }
                if (parameters.length > 3) {
                    axisMode = parameters[3];
                }

                lineGraph(plotMode, areaMode);
                drawAxis(axisMode);
                break;
            case 't':
                test();
                break;
        }
        return '0x00';
    };

    function getScaleAndOrigin() {
        gridX = [];
        gridY = [];

        originX = scalex.origin;
        minimumX = scalex.minCord;
        maximumX = scalex.maxCord;

        originY = scaley.origin;
        minimumY = scaley.minCord;
        maximumY = scaley.maxCord;
    };

    function drawGrid(shadows) {

        shadows = shadows || true;
        gridGfx.color(dataColors[gridColor]);
        gridGfx.clearShadows();
        gridGfx.save();
        gridGfx.setLineWidth(1);
        gridGfx.setAlpha(0.35);
        
        gridGfx.line(minimumX, minimumY, maximumX, minimumY);
        gridGfx.line(minimumX, minimumY, minimumX, maximumY);

        gridGfx.line(minimumX, maximumY, maximumX, maximumY);
        gridGfx.line(maximumX, minimumY, maximumX, maximumY);
        
        var length = gridX.length;
        for (var i = 0; i < length; i++) {
            var deltaX = gridX[i];
            gridGfx.line(deltaX, minimumY, deltaX, maximumY);
        }

        length = gridY.length;
        for (var j = 0; j < length; j++) {
            var deltaY = gridY[j];
            gridGfx.line(minimumX, deltaY, maximumX, deltaY);
        }

        gridGfx.restore();
        if (shadows === true) {
            gridGfx.setShadows();
        }
    };

    function xGridCoordinates() {
        var countend = scalex.scaleCount + 1,
            scale = scalex.scale,
            tickX = scalex.scale;
            scaleMin = scalex.scaleMin,
            scaleDelta = scalex.scaleDelta,
            deltaX = scalex.origin,
            base = Math.floor(scalex.scaleMin * factor) / factor;

        for (var i = 0; i <= countend; i++) {
            deltaX = (scale * base) + originX;
            gridX.push(deltaX);
            delta += tickX;
            base = Math.floor((scaleMin + scaleDelta * i) * factor) / factor;
        }
    };

    function xGridCoordinatesCustomAxis() {
        var countstart = scalex.customStart,
            count = scalex.customStep,
            countend = ((scalex.customEnd - countstart) / count),
            base = countstart,
            scale = scalex.scale;

        for (var i = 0; i <= countend; i++) {
            deltaX = originX + (Math.floor(scale * base) / factor);
            gridX.push(deltaX);
            base = base + count;
        }
    };

    function yGridCoordinates() {
        var scale = scaley.scale,
            scaleMin = scaley.scaleMin,
            scaleDelta = scaley.scaleDelta,
            countend = scaley.scaleCount + 1,
            tickY = scale,
            deltaY = scaley.origin,
            base = Math.floor(scaleMin * factor) / factor;

        for (var j = 0; j <= countend; j++) {
            deltaY = originY - (scale * base);
            gridY.push(deltaY);
            deltaY -= tickY;
            base = Math.floor((scaleMin + scaleDelta * j) * factor) / factor;
        }
    };

    function yGridCoordinatesCustomAxis() {
        var countstart = scaley.customStart,
            count = scaley.customStep,
            countend = ((scaley.customEnd - countstart) / count) + 1,
            scale = scaley.scale,
            base = countstart;

        for (var j = 0; j < countend; j++) {
            deltaY = originY - Math.floor(scale * base) / factor;
            gridY.push(deltaY);
            base = base + count;
        }
    };

    function drawLinePlotGrid() {

        getScaleAndOrigin();

        if (scaley.customScale === false) {
            yGridCoordinates();
        } else {
            yGridCoordinatesCustomAxis
        }

        if (scalex.customScale === false) {
            xGridCoordinates();
        } else {
            xGridCoordinatesCustomAxis();
        }

        drawGrid(gfx.getShadows());
    };

    function calculateBarCoordiates(barSpacing, groups, axis) {
        var gridCoordinates,origin;

        if (axis.toLowerCase() == 'x') {
            gridCoordinates = gridX;
            origin = originX;
        } else {
            gridCoordinates = gridY;
            origin = originY;
        }

        var base = origin + (barSpacing / 2);
        for (var i = 0; i < groups; i++) {
            gridCoordinates.push(base);
            base = base + barSpacing;
        }
    };

    function yBarGridCoordinates(barSpacing, groups) {
        if (scaley.customScale === false) {
            yGridCoordinates();
            calculateBarCoordiates(barSpacing,groups,'y');
        }
    };
    
    function xBarGridCoordinates(barSpacing, groups) {
        if ((scalex.customScale === false) && (gridXOn === true)) {
            xGridCoordinates();
            calculateBarCoordiates(barSpacing,groups,'x');
        }
    };

    function drawBarGrid(barSpacing, groups) {

        getScaleAndOrigin();

        if (orientation === 'v') {
            yBarGridCoordinates(barSpacing,groups);
        } else {
            xBarGridCoordinates(barSpacing,groups);
        }

        drawGrid(gfx.getShadows());
    }

///////////////////////////////////////////////////////////////////////////////
    function drawXAxisTicks() {
        var originYplusFive = originY + 5;
        var length = gridX.length;
        for (var i = 0; i < length; i++) {
            var deltaX = gridX[i];
            axesGfx.line(deltaX, originYplusFive, deltaX, originY);
        }
    };

    function drawYAxisTicks() {
        var length = gridY.length;
        var originXminusFive = originX - 5;
        for (var i = 0; i < length; i++) {
            deltaY = gridY[i];
            axesGfx.line(originXminusFive , deltaY, originX, deltaY);
        }
    };

    function drawXAxisCustomLabels() {
        var length = scalex.customLabels.length,
            customLabels = scalex.customLabels,
            originYplusTen = originY + 10;

        for (var i = 0; i < length; i++) {
            deltaX = gridX[i];
            axesGfx.printCenter(deltaX, originYplusTen , customLabels[i]);
        }
    };

    function drawYAxisCustomLabels() {
        var halfFontHeight = gfx.getFontSize() / 2,
            length = scaley.customLabels.length,
            customLabels = scaley.customLabels,
            originXminusTen = originX - 10;

        for (var i = 0; i < length; i++) {
            deltaY = gridY[i];
            axesGfx.printLeft(originXminusTen, deltaY - halfFontHeight, customLabels[i] + '');
        }
    };

    function drawXAxisCallbackFactory(condition) {
        var originYplusTen = originY+10,
            callback = null;

        condition = Math.floor(log(condition));

        if (condition >= 0) {
            callback = function (deltaX,value) {
                axesGfx.printCenter(deltaX, originYplusTen, value + '');
            }
        } else {
            var fixer = -1 * condition;
            callback = function (deltaX,value) {
                axesGfx.printCenter(deltaX, originYplusTen, value.toFixed(fixer) + '');
            }
        }
        return callback;
    };

    function drawXAxisNormalScale() {
        var countend = scalex.scaleCount + 1,
            scale = scalex.scale,
            scaleMin = scalex.scaleMin,
            scaleDelta = scalex.scaleDelta,
            deltaX = originX,
            base = Math.floor(scaleMin * factor) / factor,
            callback = drawXAxisCallbackFactory(scaleDelta);

        for (var i=0; i <= countend; i++) {
            deltaX = originX + (scale * base);
            if (base !== 0) {
                callback(deltaX,base);
            }
            base = Math.floor((scaleMin + scaleDelta * i) * factor) / factor;
        }
    };

    function drawXAxisCustomScale() {
        var countstart = scalex.customStart,
            count = scalex.customStep,
            countend = ((scalex.customEnd - countstart) / count),
            scaleMin = scalex.scaleMin,
            deltaX = originX,
            base = countstart,
            callback = drawXAxisCallbackFactory(count / factor);

        for (var i=0; i <= countend; i++) {
            deltaX = gridX[i];
            if (base !== 0) {
                callback(deltaX,base /factor);
            }
            base = Math.floor(base + count);
        }
    };

    function drawXAxis() {
        if (scalex.customLabelsOn === true) {
            drawXAxisCustomLabels();
        } else {
            if (scalex.customScale === false) {
                drawXAxisNormalScale(); 
            } else {
                drawXAxisCustomScale();
            }
        }
    };

    function drawYAxisCallbackFactory(condition) {
        var originXminusTen = originX-10,
            halfFontHeight = gfx.getFontSize() / 2;
            callback = null;

        condition = Math.floor(log(condition));

        if (condition >= 0) {
            callback = function (deltaY,value) {
                axesGfx.printLeft(originXminusTen, deltaY - halfFontHeight, value + '');
            }
        } else {
            var fixer = -1 * condition;
            callback = function (deltaY,value) {
                axesGfx.printLeft(originXminusTen, deltaY - halfFontHeight, value.toFixed(fixer) + '');
            }
        }
        return callback;
    };

    function drawYAxisNormalScale() {
        var countend = scaley.scaleCount + 1,
            scaleMin = scaley.scaleMin,
            scaleDelta = scaley.scaleDelta,
            deltaY = originY,
            base = Math.floor(scaleMin * factor) / factor,
            callback = drawYAxisCallbackFactory(scaleDelta);

        for (var i=0; i <= countend; i++) {
            deltaY = gridY[i];
            if (base !== 0) {
                callback(deltaY,base);
            }
            base = Math.floor((scaleMin + scaleDelta * i) * factor) / factor;
        }
    };

    function drawYAxisCustomScale() {
        var countstart = scaley.customStart,
            count = scaley.customStep,
            countend = ((scaley.customEnd - countstart) / count) + 1,
            scale = scaley.scale,
            base = countstart,
            value = 0;
            callback = drawYAxisCallbackFactory(count / factor);

        for (var i=0; i < countend; i++) {
            deltaY = originY - Math.floor(scale * base) / factor;
            if (base !== 0) {
                value = base / factor;
                callback(deltaY,base);
            }
            base = Math.floor(base + count);
        }
    };

    function drawYAxis() {
        // insert labels    
        if (scaley.customLabelsOn === true) {
            drawYAxisCustomLabels();
        } else {
            if (scaley.customScale === false) {
                drawYAxisNormalScale();
            } else {
                drawYAxisCustomScale();
            }
        }
    };

    /**
    * Draws the x and y axes.
    *
    * param {boolean} showTicks determines if the axes are label or not.
    * return {void}
    */
    function drawAxis(showTicks) {
        axesGfx.clearShadows();

        axesGfx.color(dataColors[0]);                           // set colour to black
        axesGfx.line(minimumX, originY, maximumX, originY);     // draw the x axis

        axesGfx.line(originX, minimumY, originX, maximumY);     // draw the y axis
        axesGfx.circle(originX, originY, 5, dataColors[0]);     // a small circle about the origin

        if (showTicks) {
            // Draw the scale ( ticks )
            drawXAxisTicks();
            drawYAxisTicks();

            // Place labels next to the ticks.
            drawYAxis();
            drawXAxis();
        }
    };

///////////////////////////////////////////////////////////////////////////////
    function showChords(points) {
        var radius = chordSettings[1],
            length = points.length - (points.length % 2);

        chordGFx.save();
        chordGFx.color(gfx.getColor());

        var circlePoint = function(callback){
            for (var i = 0; i < length; i = i + 2) {
                var x = points[i];
                var y = points[i + 1];
                callback(x, y, radius);
            }
        };

        var rectPoint = function(callback){
            var radius2 = radius + radius;
            for (var i = 0; i < length; i = i + 2) {
                var x = points[i] - radius;
                var y = points[i + 1] - radius;
                callback(x, y, radius2, radius2);
            }
        }
        var filler = 5;
        switch (chordSettings[0]) {
            case 1:
                circlePoint(chordGFx.circle);
                break;
            case 2:
                chordGFx.setFillColor(dataColors[filler]);
                circlePoint(chordGFx.fillCircle);
                break;
            case 3:
                chordGFx.setFillColor(color);
                circlePoint(chordGFx.fillCircle);
                break;
            case 4:
                rectPoint(chordGFx.rect);
                break;
            case 5:
                chordGFx.setFillColor(dataColors[filler]);
                rectPoint(chordGFx.fillRect);
                break;
            case 6:
                chordGFx.setFillColor(color);
                rectPoint(chordGFx.fillRect);
                break;
        }
        chordGFx.restore();
    };

    function barGraphVertical(parameters) {
        var length1 = 0, length2 = 0;
        var width = 0;
        var barHeight = 0, barWidth = 0;
        var baseX = 0, barSpacing = 0;
        var groups = dataYaxis.length; //number of results
        var count = dataYaxis.mgGetMaxElements(); //max elements
        var dataBars = [];
        var ymax = dataYaxis.mgGetMax2D(); //heighest point
        var ymin = dataYaxis.mgGetMin2D(); //lowest point
        var x1, x2, y1 = 0, y2 = 0;
        var data1;
        var groupOn = parameters[1];

        orientation = 'v'; //<---vertical bars

        originY = scaley.origin;
        minimumY = scaley.minCord;
        maximumY = scaley.maxCord;

        gridXOn = false;
        gfx.clearShadows();

        length1 = gfx.getWidth();
        baseX = (length1 * paddingXAlpha);
        length1 = (length1 * (paddingXBeta - paddingXAlpha));

        scaley.makeScale(ymax, ymin);
        scale2 = scaley.scale;
        originY = scaley.origin;

        originX = x2 = baseX;
        scalex.origin = originX;
        minimumX = scalex.minCord = baseX;
        maximumX = scalex.maxCord = length1 + baseX;

        if (groupOn === true) {
            barSpacing = (length1 / ((groups + 0.5) * (count)));
            width = ((length1 / ((groups) * (count))) * groups);
            x2 = x2 + (barSpacing / 4);
        } else {
            barSpacing = (length1 / ((groups) * (count)));
            width = (barSpacing * groups);
        }

        barWidth = barSpacing - 1;
        length3 = groups - 1;

        drawBarGrid(width, count);

        for (var j = 0; j < groups; j++) {
            data1 = dataYaxis[j];
            length2 = data1.length;
            x1 = x2;

            gfx.setFillColor(dataColors[dataFill[j]]);
            gfx.color(dataColors[dataFill[j]]);
            for (var i = 0; i < length2; i++) {
                y1 = scaley.origin - (data1[i] * scale2);
                barHeight = y1 - originY;
                if (barHeight < 0) {
                    y2 = originY + barHeight;
                    barHeight *= -1;
                } else {
                    y2 = originY;
                }
                gfx.fillRect(x1 + 1, y2, barWidth - 1, barHeight,true);
                x1 += width;
            }
            x2 += barSpacing;
        }
        drawAxis(true, 'vb');
    }

    function barGraphHorizontal(parameters) {
        var length1 = 0, length2 = 0;
        var width = 0, barHeight = 0, barWidth = 0;
        var baseY = 0, barSpacing = 0;
        var groups = dataYaxis.length;
        var count = dataYaxis.mgGetMaxElements();
        var dataBars = [];
        var y1, y2, x1 = 0, x2 = 0;
        var i, j;
        var data1;
        var groupOn = parameters[1];

        orientation = 'h'; //<---vertical bars

        originX = scaley.origin;
        minimumX = scaley.minCord;
        maximumX = scaley.maxCord;

        gfx.clearShadows();

        length1 = gfx.getHeight();
        baseY = (length1 * paddingXAlpha);
        length1 = (length1 * (paddingXBeta - paddingXAlpha));

        scalex.makeScale(dataYaxis.mgGetMax2D(), dataYaxis.mgGetMin2D());
        scale2 = scalex.scale;
        originX = scaley.origin;

        originY = y2 = baseY;
        scaley.origin = originY;
        minimumY = scaley.minCord = baseY;
        maximumY = scaley.maxCord = length1 + baseY;

        if (groupOn === true) {
            barSpacing = (length1 / ((groups + 0.5) * (count)));
            height = ((length1 / ((groups) * (count))) * groups);
            y2 = y2 + (barSpacing / 4);
        } else {
            barSpacing = (length1 / ((groups) * (count)));
            height = (barSpacing * groups);
        }

        barHeight = barSpacing - 2;

        drawBarGrid(height, count);

        for (j = groups - 1; j >= 0; j--) {
            data1 = dataYaxis[j];
            length2 = data1.length;
            y1 = y2;
            gfx.setFillColor(dataColors[dataFill[j]]);
            gfx.color(dataColors[dataFill[j]]);
            for (i = 0; i < length2; i++) {
                x1 = originX + (data1[i] * scale2);
                barWidth = x1 - originX;
                if (barWidth < 0) {
                    x2 = originX + barWidth;
                    barWidth *= -1;
                } else {
                    x2 = originX;
                }
                gfx.fillRect(x2, y1 + 1, barWidth, barHeight - 1);
                y1 += height;
            }
            y2 += barSpacing;
        }
        originY = maximumY;
        drawAxis(true, 'hb');
    }

    function finishDrawingLine(i,dataLines,dataPoly) {
        gfx.setShadowColor('#000000');
        gfx.setAlpha(0.35);
        gfx.setLineWidth(1);
        gfx.clearShadows();
        gfx.setFillColor(dataColors[dataFill[i]]);
        gfx.fillPoly(dataPoly);
        gfx.setShadows();
        gfx.setLineWidth(1);
        gfx.setAlpha(1.00);
        gfx.color(dataColors[dataLines[i]]); 
    };

    function lineGraph(plotPolyMode, areaMode) {
        plotPolyMode = plotPolyMode || false;
        areaMode = areaMode || false;

        scaley.makeScale(dataYaxis.mgGetMax2D(), dataYaxis.mgGetMin2D());
        scalex.makeScale(dataXaxis.mgGetMax2D(), dataXaxis.mgGetMin2D());

        drawLinePlotGrid(); 

        for (var i = 0, length = dataXaxis.length; i < length; i++) {
            var x = 0, y = 0;
            var dataLine = [], dataPoly = [];
            var data1 = dataXaxis[i], data2 = dataYaxis[i];

            for (var j = 0, length2 = data1.length; j < length2; j++) {
                x = scalex.origin + (data1[j] * scalex.scale);
                y = scaley.origin - (data2[j] * scaley.scale);
                dataLine.push(x);
                dataLine.push(y);
                if (areaMode) {
                    dataPoly.push(x);
                    dataPoly.push(y);
                }
            }

            dataPoly.push(x);
            dataPoly.push(scaley.origin);
            dataPoly.push(dataPoly[0]);
            dataPoly.push(scaley.origin);
            gfx.save();
            finishDrawingLine(i,dataLines,dataPoly);
            plotPolyMode ? gfx.polyLine(dataLine) : gfx.plotArray(dataLine);
            showChords(dataLine);
            gfx.restore();
        }
    };

    function pieChart(cx, cy, type) {
        var length = data.length;
        var total = 0;
        var startAngle = 0.75 * PI2;
        var angle1 = startAngle, angle2 = startAngle;

        if (length <= 2) {
            return;
        }

        for (i = 0; i < length; i++) {
            total += data1[i];
            pieData[i] = null;
        }

        for (i = 0; i < length; i++) {
            angle2 = angle1 + ((data[i] / total) * PI2);
            gfx.fillArc(cx, cy, angle1, angle2, fill);
            angel1 = angle2;
        }
    }
}