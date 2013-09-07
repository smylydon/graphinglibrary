

var MNS = {};
var PainterFactory = (function(){

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

	var shapeCommand = { animate:null, layer:0, events:null, x:0, y:0, color:'black', fill:false, fillColor:'#aaaaaa'};

	var circleCommand = MNS.extend(shapeCommand,{ name:'circle', r:0 });
	var arcCommand = MNS.extend(circleCommand,{ name:'arc', a1:0, a2:0, mode:'radians',direction:true })
	var ellipseCommand = MNS.extend(shapeCommand,{ name:'ellipse', r1:0,r2:0,});
	var lineCommand = MNS.extend(shapeCommand,{name:'line', x2:0, y2:0})
	var polygonCommand = MNS.extend(shapeCommand,{name:'polygon',points:[]});
	var polylineCommand = MNS.extend(polygonCommand,{name:'polyline',close:false })
	var plotCommand = MNS.extend(shapeCommand,{name:'plot'});
	var plotArrayCommand = MNS.extend(polygonCommand,{name:'plotArray'})
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



