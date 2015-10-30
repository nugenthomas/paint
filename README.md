Paint
=====

Use the reference guide for working with DOM elements:
http://p5js.org/reference/#/libraries/p5.dom

Steps to creating a new brush:

* Add it to the dropdown menu in setup()
* Create a new function for drawing it
* Detect if the dropdown equals your new brush in draw()
* If so, call your new function from the draw() function


To create a new input option you need to:

* create the html element (input, button, select, slider) 
* create a global variable for it
* save it to that global variable in the setup() function
* attach an event listener
* Use its value to do something in the draw() function


Assignment
-----------

**Make the clear button work**

Take a look at how the save button is set up. I've given you the HTML already so all you only need to edit the sketch.js file to get it to work.

**Make 3 new brushes**

Add 3 new options to the brush type drop-down. They can use shapes or images.

**Paint bucket**

Make a paint bucket function that fills the entire canvas with one color. (It will have to cover any existing drawing on the canvas.)

**Create an eraser**

Tips: It's easiest to add this as a brush type. If you use the same color as the background it can look like you're erasing when you're technically painting over the image.