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
	showButtons();
}

function previous() {
	if (current > 0) {
		current--;
	}
	else {
		current = last;
	}
	updateButtons()
	resetTimer();
	show();
}

function next() {
	if (current < last) {
		current++;
	}
	else {
		current = first;
	}
	updateButtons()
	resetTimer();
	show();
}

function show() {
	if (none) {
		document.getElementById("simple-slider-center").innerHTML = "<img src='img/" + dir + images[current] + "' >";
		updateButtons()
	}
	else if (fade) {
		$('#next').attr("src","img/" + dir + images[current]).hide().fadeIn('slow');
		updateButtons()
	}
	else
		alert('Select a transition');
}

function goto(image_num) {
	current = image_num;
	updateButtons()
	resetTimer();
	show();
}

//This function displays the active button
function updateButtons() {
	//Reprints the button list, with the active button highlighted
	var button_list = '';
	for (var i = 0; i <= last; i++) {
		if (current==i)
			button_list += ' <span onclick="goto(' + i + ')"><b>[BTN]</b></span> ';
		else
			button_list += ' <span onclick="goto(' + i + ')">[BTN]</span> ';
		console.log('printed: '+i);
	}
	document.getElementById("simple-slider-buttons").innerHTML = button_list;
}

//This function just prints out the buttons
function showButtons() {
	var button_list = '';
	for (var i = 0; i <= last; i++) {
		if (current==i)
			button_list += ' <span onclick="goto(' + i + ')"><b>[BTN]</b></span> ';
		else
			button_list += ' <span onclick="goto(' + i + ')">[BTN]</span> ';
	}
	document.getElementById("simple-slider-buttons").innerHTML = button_list;
}

function resetTimer() {
	clearInterval(counter);
	counter = setInterval(timer, (time * 1000));
}

var counter = setInterval(timer, (time * 1000)); //1000 will  run it every 1 second

function timer() {
	if (current < last) {
		current++;
		show();
	}
	else {
		current = first;
		show();
	}
}0;
