var images = new Array();

//Add your images here
//Image source must be in the img/ directory
images[0] = "image_01.jpg";
images[1] = "image_02.jpg";
images[2] = "image_03.jpg";
images[3] = "image_04.jpg";
images[4] = "image_05.jpg";

//Time in Seconds
var time = 3;

var current = 0;
var first = 0;
var last = images.length-1;

window.onload = function() {
	document.getElementById("simple-slider-center").innerHTML = "<img src='img/" + images[current] + "' >";
}

function previous() {
	if (current > 0) {
		current--;
	}
	else {
		current = last;
	}
	show();
}

function next() {
	if (current < last) {
		current++;
	}
	else {
		current = first;
	}
	show();
}

function show() {
	//This just changes the image
	document.getElementById("simple-slider-center").innerHTML = "<img src='img/" + images[current] + "' >";
}

var counter = setInterval(timer, (time * 1000)); //1000 will  run it every 1 second

function timer()
{
	if (current < last) {
		current++;
		document.getElementById("simple-slider-center").innerHTML = "<img src='img/" + images[current] + "' >";
	}
	else {
		current = first;
		document.getElementById("simple-slider-center").innerHTML = "<img src='img/" + images[current] + "' >";
	}
}0;
