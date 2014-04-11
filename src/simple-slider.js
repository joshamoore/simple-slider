var images = new Array();

//Add your images here
//Image source default is img directory
images[0] = "image_01.jpg";
images[1] = "image_02.jpg";
images[2] = "image_03.jpg";
images[3] = "image_04.jpg";
images[4] = "image_05.jpg";

//Time in Seconds
var time = 3;
//Image directory - Default is img
var dir = '';
//Set one transition to true
var none = true;
var fade = false;

var current = 0;
var first = 0;
var last = images.length-1;

window.onload = function() {
	show();
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
	if (none)
		document.getElementById("simple-slider-center").innerHTML = "<img src='img/" + dir + images[current] + "' >";
	else if (fade)
		$('#next').attr("src","img/" + dir + images[current]).hide().fadeIn('slow');
	else
		alert('Select a transition');
}

var counter = setInterval(timer, (time * 1000)); //1000 will  run it every 1 second

function timer()
{
	if (current < last) {
		current++;
		show();
	}
	else {
		current = first;
		show();
	}
}0;
