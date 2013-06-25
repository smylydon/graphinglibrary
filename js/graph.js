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
    var Ox = 0; //x origin
    var Oy = 0; //y origin
    var mx = 0; //minimum x
    var my = 0; //minimum y
    var Mx = 0; //max x
    var My = 0; //max y
    var factor = Math.pow(10, 6); //used to correct javascript bug with small numbers

    var areaChart = false; //area chart true or false
    var ThreeDee = false; //draw in 3d
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
    var scalex = new scaleObject();
    var scaley = new scaleObject();
    var titleObject = [];
    var legendObject = [];

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
        step = Math.floor(step * factor);
        start = Math.floor(start * factor);
        finish = Math.floor(finish * factor);

        if (custom === 'x') {
            scalex.customScale = true;
            scalex.customStep = step;
            scalex.customStart = start;
            scalex.customEnd = finish;
        }

        if (custom === 'y') {
            scaley.customScale = true;
            scaley.customStep = step;
            scaley.customStart = start;
            scaley.customEnd = finish;
        }
        return (this);
    };

    this.disableCustomAxis = function (custom) {
        custom = custom.toLowerCase;
        if (custom === 'x') {
            scalex.customScale = false;
        }
        if (custom === 'y') {
            scaley.customScale = false;
        }
        if ((custom === 'xy') || (custom === 'yx') || (typeof custom === 'undefined')) {
            scalex.customScale = false;
            scaley.customScale = false;
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

    function drawLinePlotGrid() {
        var loopcount = 0;
        var dd = 0;
        var delta = 0;
        var base = 0;
        var count = 0;
        var countstart = 0;
        var countend = 0;
        var scale = 0;
        var shadows = gfx.getShadows();
        var scaleMin = 0;
        var scaleDelta = 0;
        var multiplier = factor;

        gridX = [];
        gridY = [];

        Ox = scalex.origin;
        mx = scalex.minCord;
        Mx = scalex.maxCord;

        Oy = scaley.origin;
        my = scaley.minCord;
        My = scaley.maxCord;

        if (scaley.customScale === false) {
            scale = scaley.scale;
            scaleMin = scaley.scaleMin;
            scaleDelta = scaley.scaleDelta;
            countend = scaley.scaleCount + 1;

            delta = scale;
            dd = scaley.origin;
            base = Math.floor(scaleMin * multiplier) / multiplier;

            for (loopcount = 0; loopcount <= countend; loopcount++) {
                dd = Oy - (scale * base);
                gridY.push(dd);
                dd -= delta;
                base = Math.floor((scaleMin + scaleDelta * loopcount) * multiplier) / multiplier;
            }

        } else {
            countstart = scaley.customStart;
            count = scaley.customStep;
            countend = ((scaley.customEnd - countstart) / count) + 1;
            scale = scaley.scale;
            base = countstart;

            for (loopcount = 0; loopcount < countend; loopcount++) {
                dd = Oy - Math.floor(scale * base) / factor;
                gridY.push(dd);
                base = base + count;
            }
        }

        if (scalex.customScale === false) {
            countend = scalex.scaleCount + 1;
            scale = scalex.scale;
            delta = scalex.scale;
            scaleMin = scalex.scaleMin;
            scaleDelta = scalex.scaleDelta;
            dd = scalex.origin;
            base = Math.floor(scalex.scaleMin * multiplier) / multiplier;

            for (loopcount = 0; loopcount <= countend; loopcount++) {
                dd = (scale * base) + Ox;
                gridX.push(dd);
                dd += delta;
                base = Math.floor((scaleMin + scaleDelta * loopcount) * multiplier) / multiplier;
            }

        } else {
            countstart = scalex.customStart;
            count = scalex.customStep;
            countend = ((scalex.customEnd - countstart) / count);
            base = countstart;
            scale = scalex.scale;

            for (loopcount = 0; loopcount <= countend; loopcount++) {
                dd = Ox + (Math.floor(scale * base) / multiplier);
                gridX.push(dd);
                base = base + count;
            }
        }

        gridGfx.color(dataColors[gridColor]);
        gridGfx.clearShadows();
        gridGfx.save();
        gridGfx.setLineWidth(1);
        gridGfx.setAlpha(0.35);
        
        gridGfx.line(mx, my, Mx, my);
        gridGfx.line(mx, my, mx, My);

        gridGfx.line(mx, My, Mx, My);
        gridGfx.line(Mx, my, Mx, My);
        

       // if (gridXOn === true) {
            countend = gridX.length;
            for (loopcount = 0; loopcount < countend; loopcount++) {
                dd = gridX[loopcount];
                gridGfx.line(dd, my, dd, My);
            }
       // }

        //if (gridYOn === true) {
            countend = gridY.length;
            for (loopcount = 0; loopcount < countend; loopcount++) {
                dd = gridY[loopcount];
                gridGfx.line(mx, dd, Mx, dd);
            }
       // }
        gridGfx.restore();
        if (shadows === true) {
            gridGfx.setShadows();
        }
    }

    function drawBarGrid(barSpacing, groups) {
        //used for bar graph gridding
        var loopcount = 0;
        var dd = 0;
        var delta = 0;
        var base = 0;
        var count = 0;
        var countstart = 0;
        var countend = 0;
        var scale = 0;
        var scaleMin = 0;
        var scaleDelta = 0;
        var multiplier = factor;

        gridX = [];
        gridY = [];

        Ox = scalex.origin;
        mx = scalex.minCord;
        Mx = scalex.maxCord;

        Oy = scaley.origin;
        my = scaley.minCord;
        My = scaley.maxCord;

        if (orientation === 'v') {
            if (scaley.customScale === false) {
                scale = scaley.scale;
                scaleMin = scaley.scaleMin;
                scaleDelta = scaley.scaleDelta;
                countend = scaley.scaleCount + 1;

                delta = scale;
                dd = scaley.origin;
                base = Math.floor(scaleMin * multiplier) / multiplier;

                for (loopcount = 0; loopcount <= countend; loopcount++) {
                    dd = Oy - (scale * base);
                    gridY.push(dd);
                    dd -= delta;
                    base = Math.floor((scaleMin + scaleDelta * loopcount) * multiplier) / multiplier;
                }
                base = Ox + (barSpacing / 2);
                for (loopcount = 0; loopcount < groups; loopcount++) {
                    gridX.push(base);
                    //alert(base);
                    base = base + barSpacing;
                }
            }
        } else {
            if ((scalex.customScale === false) && (gridXOn === true)) {
                countend = scalex.scaleCount + 1;
                scale = scalex.scale;
                delta = scalex.scale;
                scaleMin = scalex.scaleMin;
                scaleDelta = scalex.scaleDelta;
                dd = scalex.origin;
                base = Math.floor(scalex.scaleMin * multiplier) / multiplier;

                for (loopcount = 0; loopcount <= countend; loopcount++) {
                    dd = (scale * base) + Ox;
                    gridX.push(dd);
                    dd += delta;
                    base = Math.floor((scaleMin + scaleDelta * loopcount) * multiplier) / multiplier;
                }
                base = Oy + (barSpacing / 2);
                for (loopcount = 0; loopcount < groups; loopcount++) {
                    gridY.push(base);
                    //alert(base);
                    base = base + barSpacing;
                }
            }
        }

            gridGfx.color(dataColors[gridColor]);
            gridGfx.save();
            gridGfx.clearShadows();
            gridGfx.setLineWidth(1);
            gridGfx.setAlpha(0.35);
            gridGfx.line(mx, my, Mx, my);
            gridGfx.line(mx, my, mx, My);

            gridGfx.line(mx, My, Mx, My);
            gridGfx.line(Mx, my, Mx, My);

            countend = gridX.length;
            //if (gridXOn === true) {
                for (loopcount = 0; loopcount < countend; loopcount++) {
                    dd = gridX[loopcount];
                    gridGfx.line(dd, my, dd, My);
                }
           // }

            countend = gridY.length;
            //if (gridYOn === true) {
                for (loopcount = 0; loopcount < countend; loopcount++) {
                    dd = gridY[loopcount];
                    gridGfx.line(mx, dd, Mx, dd);
                }
            //}
            gridGfx.restore();
    }
    /**
    *   Draws the x and y axes.
    */
    function drawAxis(demark) {
        var loopcount = 0;
        var dd = 0, delta = 0, base = 0;
        var count = 0, countstart = 0, countend = 0;
        var scale = 0, scaleMin = 0, scaleDelta = 0;
        var multiplier = factor;
        var shadows = gfx.getShadows();
        var fix = false, fixer = 0;
        var vert = gfx.getFontSize() / 2;


        axesGfx.clearShadows();

        axesGfx.color(dataColors[0]);
        axesGfx.line(mx, Oy, Mx, Oy);                   // draw the x axis

        axesGfx.line(Ox, my, Ox, My);                   // draw the y axis
        axesGfx.circle(Ox, Oy, 5, dataColors[0]);       // a small circle about the origin

        //demark=false;

        if (demark) {

            countend = gridX.length;
            for (loopcount = 0; loopcount < countend; loopcount++) {
                dd = gridX[loopcount];
                axesGfx.line(dd, Oy + 5, dd, Oy);
            }

            countend = gridY.length;
            for (loopcount = 0; loopcount < countend; loopcount++) {
                dd = gridY[loopcount];
                axesGfx.line(Ox - 5, dd, Ox, dd);
            }

            // insert labels	
            if (scaley.customLabelsOn === true) {
                countend = scaley.customLabels.length;
                for (loopcount = 0; loopcount < countend; loopcount++) {
                    dd = gridY[loopcount];
                    axesGfx.printLeft(Ox - 10, dd - vert, scaley.customLabels[loopcount] + '');
                }
            } else {
                if (scaley.customScale === false) {
                    countstart = scalex.customStart;
                    count = scalex.customStep;
                    countend = scaley.scaleCount + 1;
                    scaleMin = scaley.scaleMin;
                    scaleDelta = scaley.scaleDelta;
                    dd = Oy;

                    base = Math.floor(scaley.scaleMin * multiplier) / multiplier;
                    loopcount = 0;
                    fixer = Math.floor(log(scaleDelta));
                    fix = false;
                    if (fixer >= 0) {
                        fix = false;
                    } else {
                        fix = true;
                        fixer = -1 * fixer;
                    }
                    while (loopcount <= countend) {
                        dd = gridY[loopcount];
                        if (base !== 0) {
                            if (fix === false) {
                                axesGfx.printLeft(Ox - 10, dd - vert, base + '');
                            } else {
                                axesGfx.printLeft(Ox - 10, dd - vert, base.toFixed(fixer) + '');
                            }
                        }
                        dd -= delta;
                        base = Math.floor((scaleMin + scaleDelta * loopcount) * multiplier) / multiplier;
                        loopcount++;
                    }
                } else {
                    countstart = scaley.customStart;
                    count = scaley.customStep;
                    countend = ((scaley.customEnd - countstart) / count) + 1;
                    scale = scaley.scale;
                    base = countstart;
                    loopcount = 0;

                    fixer = Math.floor(log(count / multiplier));
                    fix = false;

                    if (fixer >= 0) {
                        fix = false;
                    } else {
                        fix = true;
                        fixer = -1 * fixer;
                    }

                    while (loopcount < countend) {
                        dd = Oy - Math.floor(scale * base) / multiplier;
                        if (base !== 0) {
                            //gfx.printLeft(Ox-10,dd-vert,(base/multiplier)+'');
                            value = base / multiplier;
                            if (fix === false) {
                                axesGfx.printLeft(Ox - 10, dd - vert, value + '');
                            } else {
                                axesGfx.printLeft(Ox - 10, dd - vert, value.toFixed(fixer) + '');
                            }
                        }
                        base = Math.floor(base + count);
                        loopcount++;
                    }
                }
            }

            if (scalex.customLabelsOn === true) {
                countend = scalex.customLabels.length;
                for (loopcount = 0; loopcount < countend; loopcount++) {
                    dd = gridX[loopcount];
                    //axesGfx.printLeft(Ox-10,dd-vert,scalex.customLabels[loopcount]+'');
                    axesGfx.printCenter(dd, Oy + 10, scalex.customLabels[loopcount]);
                }
            } else {
                if (scalex.customScale === false) {
                    countend = scalex.scaleCount + 1;
                    base = Math.floor(scalex.scaleMin * multiplier) / multiplier;
                    scale = scalex.scale;
                    scaleMin = scalex.scaleMin;
                    scaleDelta = scalex.scaleDelta;
                    delta = scale;
                    dd = Ox;
                    fixer = Math.floor(log(scaleDelta));
                    fix = false;
                    if (fixer >= 0) {
                        fix = false;
                    } else {
                        fix = true;
                        fixer = -1 * fixer;
                    }
                    loopcount = 0;
                    while (loopcount <= countend) {
                        dd = Ox + (scale * base);
                        if (base !== 0) {
                            if (fix === false) {
                                axesGfx.printCenter(dd, Oy + 10, base + '');
                            } else {
                                axesGfx.printCenter(dd, Oy + 10, base.toFixed(fixer) + '');
                            }
                        }
                        dd += delta;
                        base = Math.floor((scaleMin + scaleDelta * loopcount) * multiplier) / multiplier;
                        loopcount++;
                    }
                } else {
                    countstart = scalex.customStart;
                    count = scalex.customStep;
                    countend = ((scalex.customEnd - countstart) / count);
                    scale = scalex.scale;
                    base = countstart;

                    loopcount = 0;
                    fixer = Math.floor(log(count / multiplier));
                    fix = false;
                    if (fixer >= 0) {
                        fix = false;
                    } else {
                        fix = true;
                        fixer = -1 * fixer;
                    }
                    while (loopcount <= countend) {
                        dd = gridX[loopcount];
                        if (base !== 0) {
                            value = base / multiplier;
                            if (fix === false) {
                                axesGfx.printCenter(dd, Oy + 10, value + '');
                            } else {
                                axesGfx.printCenter(dd, Oy + 10, value.toFixed(fixer) + '');
                            }
                        }
                        base = Math.floor(base + count);
                        loopcount++;
                    }
                }
            }
        }
    }

    function showChords(points) {
        var x = 0, y = 0, i = 0, radius = chordSettings[1];
        var type = chordSettings[0], color = gfx.getColor();
        var filler = 5;
        var length = points.length - (points.length % 2);

        chordGFx.save();
        chordGFx.color(color);

        var circlePoint = function(callback){
            for (i = 0; i < length; i = i + 2) {
                x = points[i];
                y = points[i + 1];
                callback(x, y, radius);
            }
        };

        var rectPoint = function(callback){
            var radius2 = radius + radius;
            for (i = 0; i < length; i = i + 2) {
                x = points[i] - radius;
                y = points[i + 1] - radius;
                callback(x, y, radius2, radius2);
            }
        }

        switch (type) {
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
        var i, j;
        var data1;
        var groupOn = parameters[1];

        orientation = 'v'; //<---vertical bars

        Oy = scaley.origin;
        my = scaley.minCord;
        My = scaley.maxCord;

        gridXOn = false;
        gfx.clearShadows();

        length1 = gfx.getWidth();
        baseX = (length1 * paddingXAlpha);
        length1 = (length1 * (paddingXBeta - paddingXAlpha));


        scaley.makeScale(ymax, ymin);
        scale2 = scaley.scale;
        Oy = scaley.origin;

        Ox = x2 = baseX;
        scalex.origin = Ox;
        mx = scalex.minCord = baseX;
        Mx = scalex.maxCord = length1 + baseX;

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


        for (j = 0; j < groups; j++) {
            data1 = dataYaxis[j];
            length2 = data1.length;
            x1 = x2;

            gfx.setFillColor(dataColors[dataFill[j]]);
            gfx.color(dataColors[dataFill[j]]);
            for (i = 0; i < length2; i++) {
                y1 = scaley.origin - (data1[i] * scale2);
                barHeight = y1 - Oy;
                if (barHeight < 0) {
                    y2 = Oy + barHeight;
                    barHeight *= -1;
                } else {
                    y2 = Oy;
                }
                gfx.fillRect(x1 + 1, y2, barWidth - 1, barHeight);
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
        var xmax = dataYaxis.mgGetMax2D();
        var xmin = dataYaxis.mgGetMin2D();
        var y1, y2, x1 = 0, x2 = 0;
        var i, j;
        var data1;
        var groupOn = parameters[1];

        orientation = 'h'; //<---vertical bars

        Ox = scaley.origin;
        mx = scaley.minCord;
        Mx = scaley.maxCord;

       // gridYOn = false;
      //  gridXOn = true;
        gfx.clearShadows();

        length1 = gfx.getHeight();
        baseY = (length1 * paddingXAlpha);
        length1 = (length1 * (paddingXBeta - paddingXAlpha));

        scalex.makeScale(xmax, xmin);
        scale2 = scalex.scale;
        Ox = scaley.origin;

        Oy = y2 = baseY;
        scaley.origin = Oy;
        my = scaley.minCord = baseY;
        My = scaley.maxCord = length1 + baseY;

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
                x1 = Ox + (data1[i] * scale2);
                barWidth = x1 - Ox;
                if (barWidth < 0) {
                    x2 = Ox + barWidth;
                    barWidth *= -1;
                } else {
                    x2 = Ox;
                }
                gfx.fillRect(x2, y1 + 1, barWidth, barHeight - 1);
                y1 += height;
            }
            y2 += barSpacing;
        }
        Oy = My;
        drawAxis(true, 'hb');
    }

    function lineGraph(plotPolyMode, areaMode) {
        var length = 0, length2 = 0, length3 = 0;
        var xmax = dataXaxis.mgGetMax2D();
        var xmin = dataXaxis.mgGetMin2D();
        var ymax = dataYaxis.mgGetMax2D();
        var ymin = dataYaxis.mgGetMin2D();
        var scale1 = 0, scale2 = 0;
        var dataLine = [], dataPoly = [];
        var data1 = [], data2 = [];
        var x = 0, y = 0, i = 0, j = 0, color = 0;

        plotPolyMode = plotPolyMode || false;
        areaMode = areaMode || false;

        length2 = dataXaxis.length;

        scaley.makeScale(ymax, ymin);
        scale2 = scaley.scale;

        scalex.makeScale(xmax, xmin);
        scale1 = scalex.scale;

        drawLinePlotGrid(); /*Draw grid and make calculations */

        for (j = 0; j < length2; j++) {
            data1 = dataXaxis[j];
            data2 = dataYaxis[j];

            length = data1.length;

            for (i = 0; i < length; i++) {
                x = scalex.origin + (data1[i] * scale1);
                y = scaley.origin - (data2[i] * scale2);
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
            gfx.setShadowColor('#000000');
            gfx.setAlpha(0.35);
            gfx.setLineWidth(1);
            gfx.clearShadows();
            gfx.setFillColor(dataColors[dataFill[j]]);
            gfx.fillPoly(dataPoly);
            gfx.setShadows();
            gfx.setLineWidth(1);
            gfx.setAlpha(1.00);
            color = dataColors[dataLines[j]];

            //plotPolyMode=true;
            if (plotPolyMode) {
                gfx.color(color);
                gfx.polyLine(dataLine);
            } else {
                gfx.color(color);
                gfx.plotArray(dataLine);
            }

            showChords(dataLine);

            gfx.restore();
            dataLine = [];
            dataPoly = [];
        }
    }

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