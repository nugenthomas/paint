//============================
//  Paint
//============================

var drawingCanvas
var colorPicker;
var slider;
var clearButton;
var saveButton;
var brushPicker;
var brushType;

var pumpkin;
var eraser;
var splatter;



function preload(){
    pumpkin = loadImage("images/pumpkin.png");
    eraser = loadImage("images/eraser.png");
    splatter = loadImage("images/splatter.png");
    star = loadImage ("images/star.png");
    spray = loadImage ("images/spray.png");
    enzo = loadImage ("images/enzo.png");
    imageMode(CENTER);
    
}


function setup() {

    //Make the canvas and then insert it into a div
    drawingCanvas = createCanvas(800, 480);
    drawingCanvas.parent('drawingContainer');
    background("white");
    
    //set up the color picker
    colorPicker = select("#ColorPicker");
    
    //set up the paintbrush width slider
    slider = createSlider(1, 70, 10);
    slider.parent('brushSize');

    //set up the save button
    saveButton = select('.saveButton');
    saveButton.mouseClicked(saveFunction);

    //set up the clear button
    clearButton = select('.clearButton');
    clearButton.mouseClicked(clearFunction);

    //set up the brush type
    brushPicker = createSelect();
    brushPicker.parent("brushType")
    brushPicker.option('Paint Brush');
    brushPicker.option('Splatter Brush');
    brushPicker.option ('Star Brush');
    brushPicker.option ('Calligraphy Brush');
    brushPicker.option('Spray Can');
    brushPicker.option ('Eraser');
    brushPicker.option ('Paint Bucket');
    brushPicker.changed(changeBrush);
    brushType = brushPicker.value();
}

function draw() {
    
    if (mouseIsPressed) {
        if (brushType == "Spray Can"){
            cursor("images/spray.png");
            sprayCan();
        } else if(brushType == "Paint Brush"){
            cursor(CROSS);
            standardStroke(); 
        } else if(brushType == "Splatter Brush"){
            cursor("images/gun.png");
            drawImage(); 
        } else if(brushType == "Eraser"){
            cursor("images/eraser.png");
            eraseImage();
        } else if (brushType == "Star Brush"){
            cursor("images/wand.png");
            drawImages();
        } else if (brushType == "Paint Bucket"){
            cursor("images/bucket.png");
            fillImages();
        } else if (brushType == "Calligraphy Brush"){
            cursor("images/brush.png");
            drawBrush();
        }
    } 
}

//--------------------------
// Brushes
//--------------------------
function eraseImage(){

    strokeWeight(slider.value());
    stroke("#FFFFFF");
    line(pmouseX, pmouseY, mouseX, mouseY);

}

function fillImages(){
    background("#"+colorPicker.value());
}

function drawBrush(){
    image(enzo, mouseX, mouseY, slider.value(), slider.value());
}
function standardStroke(){
    //set the size of the brush from the slider
    strokeWeight(slider.value());

    //use the hex code for the stroke color
    stroke("#"+colorPicker.value());
    //If you want to use the RGB values instead you can do so like this:
    //(useful if you want to add opacity with RGBA)
    // stroke(colorPicker.elt.color.rgb[0]*255, 
    //         colorPicker.elt.color.rgb[1]*255, 
    //         colorPicker.elt.color.rgb[2]*255
    //         );

    //pmouseX and pmouseY give you the previous mouse position
    line(pmouseX, pmouseY, mouseX, mouseY);

}

function sprayCan(){
    var sliderVal = slider.value();
    stroke( "#"+colorPicker.value() );

    //draw points in a grid that is the size of the brush slider
    //and draw those points 4 pixes from each other

    for (var x = 0; x < sliderVal; x+=4){
        for (var y = 0; y < sliderVal; y+=4){
            point(mouseX+x, mouseY+y);
        }
    }    
}

function drawImage(){
    //draw the image where the mouse is and set the size to the brush size
    image(splatter,mouseX,mouseY, slider.value(), slider.value());

}

function drawImages(){

    image(star,mouseX,mouseY, slider.value(), slider.value());

}

//--------------------------
// Event Listeners
//--------------------------

function changeBrush(){
    brushType = brushPicker.value();
}


function saveFunction() {
    save(drawingCanvas, "myDrawing.jpg");
}

function clearFunction() {
    clear(drawingCanvas);
    background("white");

}
