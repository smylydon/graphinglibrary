graphinglibrary
===============

I originally wrote this in 2007/2008 to learn Object Oriented JavaScript, there are many things I would do differently if I was to write this today.
It used Canvas on FireFox and Webkit browsers, and VML on Internet Explorer. I recently went over the code mostly to add comments.

CanvasLib.js 	-- This file should be first, it has some prototypes for the Array Object, a template object for each drawing Object. It also has the
				CanvasObject itself, as stated I used the facade pattern so all the drawing objects have a common interface and therefore can be
				swapped out.
				
VML.js			-- This works on IE6-8, however I've stopped work on it.
SVG.js			-- this was added last year, it is based on VML.js

scaleLib.js		-- A simple object that works out base 10 scales for x and y vertices. No logarithmic scales yet.

graph.js		-- this contains the GraphObject which is logic for drawing the graphs. At the moment only bar graphs and line graphs are available;
				also the graphs can be drawn horizontally or vertically.

graphtypes.js	-- test code that draws a line graph and bar graph.

...


