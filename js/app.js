// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variable
-------------------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'say something.';
var speakButton = document.querySelector('#playback');
var surprice = document.querySelector('#textToSpeak');

//Individual buttons
var purple = document.querySelector('#purple');
var skyblue = document.querySelector('#sky-blue');
var green = document.querySelector('#green');
var orange = document.querySelector('#orange');
var pink = document.querySelector('#pink');

//Array for the individual button
var noun = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "dance with", "saw", "doesnt like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
var speak = '';


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
function randomValueFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function purpleBtnPress() {
	var speaker = randomValueFromArray(noun);
	speak += speaker;
	speakNow(speaker);
}

function skyBlueBtnPress() {
	var speaker = randomValueFromArray(noun);
	speak += speaker;
	speakNow(speaker);
}

function greenBtnPress() {
	var speaker = randomValueFromArray(noun);
	speak += speaker;
	speakNow(speaker);
}

function orangeBtnPress() {
	var speaker = randomValueFromArray(noun);
	speak += speaker;
	speakNow(speaker);
}

function pinkBtnPress() {
	var speaker = randomValueFromArray(noun);
	speak += speaker;
	speakNow(speaker);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
surprice.onclick = function () {
	var firstValue = randomValueFromArray(noun);
	var secondValue = randomValueFromArray(verbs);
	var thirdValue = randomValueFromArray(adjectives);
	var fourthValue = randomValueFromArray(nouns);
	var fifthValue = randomValueFromArray(settings);

	textToSpeak = firstValue + "          " + secondValue + "          " + thirdValue + "          "
		+ fourthValue + "          " + fifthValue;
	speakNow(textToSpeak);
}

speakButton.onclick = function () {
	if (speak === '') {
		textToSpeak = 'press any of these button to create a story';
		speakNow(textToSpeak);
	}
	else {
		textToSpeak = speak;
		speakNow(textToSpeak);
		speak = '';
	}
}
purple.addEventListener('click', purpleBtnPress);
skyblue.addEventListener('click', skyBlueBtnPress);
green.addEventListener('click', greenBtnPress);
orange.addEventListener('click', orangeBtnPress);
pink.addEventListener('click', pinkBtnPress);
