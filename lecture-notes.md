Lecture Notes
===============


Nested If statements
--------------------
Sometimes you want to check if something is true before you check if something else is true. 
To do this you can put if statments inside of if statements:

    if(mouseIsPressed){
    
    	if(brushType == "standard"){
    		//do something
    	} else if (brushType == "spray"){
    		//do something
    	} else if(brushType == "opaque"){
    		//do something
    	}
    
    }

This saves you the trouble of having to check if mouseIsPressed in every if statment.

    if(mouseIsPressed && brushType == "standard"){
    		//do something
    	} else if (mouseIsPressed && brushType == "spray"){
    		//do something
    	} else if(mouseIsPressed && brushType == "opaque"){
    		//do something
    	}

DOM elements vs p5 elements
---------------------------
In p5 you can create and edit HTML elements. It's important to know the difference between these HTML (aka DOM) elements, and p5 canvas elements. When you use shapes like ellipse you are drawing onto a canvas. When you say `createButton()` you are creating an HTML element. 

The great thing about DOM elements is that you can attach event listeners to them. This way you can detect if something clicked on that specific element. With canvas elements you only know if a mouse was clicked, you don't know if that particular ellipse was clicked. 


Sometimes its best to create an HTML element by writing the HTML in the .html file, but sometimes its more helpful to create the element with javascript. In this assignment, the drop-down menu of brushes is better to create with javascript because it makes it easier to add options to it.

In javascript it looks like this. See how it makes it easy for me to then attach an event listener to it:

    brushPicker = createSelect();
    brushPicker.parent("brushType")
    brushPicker.option('paint brush');
    brushPicker.option('spray can');
    brushPicker.option('image');
    brushPicker.changed(changeBrush);

If I wrote this in plain HTML I would say this (but there would be no event listener attached):

    <div class="brushType">
    	<select>
    		<option>paint brush</option>
    		<option>spray can</option>
    		<option>image</option>
    	</select>
    </div>

Cursor
------
You can customize what your cursor looks like. There are some standard ones you can use, or you can upload an image to use. 

Standar options: 
`cursor(CROSS);`

Using an image:
`cursor("path/to/image.jpg");`
(You don't have to do loadImage or preload for this)


Saving your drawing
--------------------
p5 makes it easy to download an image of your canvas. All you have to do is:

`save(drawingCanvas, "myDrawing.jpg");`

Where drawingCanvas is the variable you saved your canvas to, and "myDrawing.jpg" is the file name you want to save it as.




