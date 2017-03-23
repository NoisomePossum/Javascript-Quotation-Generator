// main function
function generateQuotes() {
	// clear previously generated text
	// before generating more
	document.getElementById("quoteResults").innerHTML = "";
	
	// Capture the number of quotes requested
	// and store it in a variable.
	var numberQuotes = document.getElementById("textinput").value;

	// Capture the type of quote selected
	// and put it in a variable
	var typeQuote = getRadioVal(document.getElementById('quoteForm'), 'radios');

	// Generate text and insert divs into the page
	insertDivs(numberQuotes, typeQuote);

}

quoteFrags = [
	"to be the best",
	"to catch 'em all",
	"to boldly go where no man has gone before",
	"to live in the moment",
	"to reach for the stars",
	"to get to the other side",
	"to face the wind",
	"to give a mouse a cookie",
	"to paint with all the colors of the wind",
	"to pay for it",
	"like another brick in the wall",
	"like a dainty duck or deer",
	"like snakes in a plane",
	"like a box of chocolates",
	"like a rolling stone",
	"like water off a duck",
	"like silly ol' bears",
	"it happens",
	"that is the answer",
	"monkeys fall from trees",
	"everybody gets a car",
	"it never works",
	"someone poisons the water hole",
	"how does it feel?",
	"can you dig it?",
	"what is it worth?"
]

/**********************************************************
String treatment functions for use in other functions
***********************************************************/
function getRandomIndex(array) {
	return Math.floor((Math.random() * array.length));
}

function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function findFirstWord(string) {
	var firstWord = string.substr(0, string.indexOf(" "));
	return firstWord;
}

function findLastChar(string) {
	var lastChar = string.charAt(string.length - 1);
	return lastChar;
}


/***********************************************************
Functions for defining components of main function
************************************************************/

function getRadioVal(form, name) {
	var val;
	// gets list of radio buttons with specified name
	var radios = form.elements[name];

	// loops through the list of radio buttons
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			val = radios[i].value;
			break;
		}
	}

	return val;
}


function assembleText() {
	// var text = "";
	// for (var i = 0; i < 3; i++) {
	// 	var randomIndex = Math.floor((Math.random() * quoteFrags.length));
	// 	text += quoteFrags[randomIndex] + " ";
	// }
	// return text;
	var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo consequatur, quidem tempora hic laborum, ea sapiente quis. Quas nulla laborum distinctio voluptatibus ipsum impedit sequi laboriosam esse, aspernatur fugiat.";
	return text;

}

enlightenedFrags = {
	"replaceTo" : [
		"we must",
		"if we can"
	]
}

function assembleEnlightenedText() {
	var text = "";

	// Stores the three fragments in the order that they will be assembled
	var positions = [];

	// Randomly selects a quote fragment for each index in positions
	for (var i = 0; i < 3; i++) {
		var randomIndex = getRandomIndex(quoteFrags);
		positions[i] = quoteFrags[randomIndex];
	}

	// Sets variables that allow for referencing the fragments immediately
	// before and after the current fragment.
	var previousFragment = "";
	var previousIndex = 0;
	var nextFragment = "";

	

	// Change the third pos based on the sentence type of pos immediately before it
	// Check type of pos3
	// If fragment in pos3 is of type "like"
	if (findFirstWord(positions[2]) == "like") {
	if (findFirstWord(positions[1]) == "like") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "we are naught but");
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = positions[2] = positions[2].replace(findFirstWord(positions[2]), "we must watch out for");
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "there will always be");
		}
		else {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "what of") + "?";
		}	
	}
	// If fragment in pos3 is of type "to"
	else if (findFirstWord(positions[2]) == "to") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "it is enough to");
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "and then you");
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "you can always");
		}
		else {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "it seems as though we");
		}
	}
	// If fragment is pos3 is of type "question"
	else if (findLastChar(positions[2]) == "?") {

	}
	// Fragment in pos3 is of type "statement"
	else {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] += ", after all.";
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] += " anyway.";
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = "what if " + positions[2] + " again?";
		}
		else {
			positions[2] = "naturally, " + positions[1] + ".";
		}

	}

	// Check type of pos2

	// Perform treatment of text based on above


	// Modify sentence fragments based on contents and surrounding text
	for (var i = 0; i < positions.length; i++) {

		if (i > 0) {
			previousFragment = positions[previousIndex];
			previousIndex ++;
		}

		if (i < 2) {
			nextFragment = positions[ i + 1];
		}

		var firstWord = findFirstWord(positions[i]);

		// if (firstWord == "to") {
		// 	var randomIndex = getRandomIndex(enlightenedFrags.replaceTo);
		// 	positions[i] = positions[i].replace(firstWord, enlightenedFrags.replaceTo[randomIndex]);
		// }




		// Check next fragment for type to see if it makes a coherent sentence.
		// Add punctuation if it does not.

		// Add comma to end of like unless next frag starts a sentence.
		// if (firstWord == "like") {}


		// Check previous fragment for end punctuation and act accordingly
		// var regex = /[?.!]/i;
		// if (regex.test(previousFragment.charAt(previousFragment.length - 1))) {
		// 	positions[i] = capitalizeFirstLetter(positions[i]);
		// }

	}

	// Capitalizes first letter of phrase before assembly.
	positions[0] = capitalizeFirstLetter(positions[0]);

	var text = positions[0] + " " + positions[1] + " " + positions[2];
	return text;
}


function insertDivs (numberQuotes, typeQuote) {

	// Divide full screen width by # of divs if less than 3
	// This prevents having off-centered appearance with 2 or less.
	if (numberQuotes < 3) {
		colWidth = 12 / numberQuotes;
	}
	else {
		colWidth = 4;
	}
	
	for (var i = 0; i < numberQuotes; i++) {

		var text = "";

		if (typeQuote == "enlightened") {
			text = assembleEnlightenedText();
		}
		else {
			text = assembleText();
		}
		// var text = assembleText();
		// var text = assembleEnlightenedText();
		
		
		var textDiv = document.createElement('div');
		textDiv.setAttribute('class', "col-md-12 awesomequote");
		textDiv.append(text);
		
		var bootDiv = document.createElement('div')
		bootDiv.setAttribute('class', "col-sm-12 col-md-" + colWidth);
		bootDiv.appendChild(textDiv);

		var quoteArray = document.getElementById("quoteResults");
		quoteArray.appendChild(bootDiv);
	}
}
