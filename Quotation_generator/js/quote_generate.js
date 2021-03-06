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
	var typeQuote = getRadioVal(document.getElementById("quoteForm"), "radios");

	// Reveal the picture corrpesponding to the quote type selected
	showPic(typeQuote);

	// Generate text and insert divs into the page
	insertDivs(numberQuotes, typeQuote);

}

quoteFrags = [
	"to be the best",
	"to catch 'em all",
	"to shave the whales",
	"to boldly go where no man has gone before",
	"to live in the moment",
	"to reach for the stars",
	"to feel the good vibrations",
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
	"is it ok?",
	"how does it feel?",
	"can you dig it?",
	"what is it worth?"
];

/**********************************************************
String treatment functions for use in other functions
***********************************************************/
function getRandomIndex(array) {
	return Math.floor(Math.random() * array.length);
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

function showPic(type) {

	var div = document.getElementById("typePic");
	div.innerHTML = "";

	var img = document.createElement("img");
	// img.src = "../images/" + type + ".jpg";
	
	img.onload = function () {
		div.appendChild(img);
	};

	img.src = "images/" + type + ".jpg";

}


function assembleTrumpText() {
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
	
	/**************************************************
		Check type of position 3 fragment
	***************************************************/

	// If fragment in pos3 is of type "like"
	if (findFirstWord(positions[2]) == "like") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "we're just") + " folks.";
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = positions[2] = positions[2].replace(findFirstWord(positions[2]), "watch out for") + ". Scary.";
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "there's gotta be") + ".";
		}
		else {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "what about") + "?";
		}	
	}
	// If fragment in pos3 is of type "to"
	else if (findFirstWord(positions[2]) == "to") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = "some people say it's crazy " + positions[2] + ". Trust me. It's not crazy.";
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "and Mexico is gonna");
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "we can always") + ".";
		}
		else {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "it's like we") + ".";
		}
	}
	// If fragment in pos3 is of type "question"
	else if (findLastChar(positions[2]) == "?") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = "i'm like " + positions[2];
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = "well now, " + positions[2];
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = "well now, " + positions[2];
		}
		else {
			// just leave it the same
		}
	}
	// Fragment in pos3 is of type "statement"
	else {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] += " anyway.";
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

	/**************************************************
		Check type of position 2 fragment
	***************************************************/

	// If fragment in pos2 is of type "like"
	if (findFirstWord(positions[1]) == "like") {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "you've never seen anything like this:");
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "on top of") + ".";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "we're gonna") + ".";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "we're gonna have") + ". Gonna be the greatest.";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "everybody saw") + ". It was disgusting.";
		}
		else {
			positions[0] += ".";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "like, wouldn't it be great if we had") + "?";
		}	
	}
	// If fragment in pos2 is of type "to"
	else if (findFirstWord(positions[1]) == "to") {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] = "you've never seen anything " + positions[0] + ".";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "we gotta") + ".";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "we're gonna") + ",";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "and Mexico is gonna") + ".";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[0] = positions[0].slice(0, -1);
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "if I can't even") + " and I'm the president?";
		}
		else {
			positions[0] += ".";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "Such a disaster, folks. That's why we gotta") + ".";
		}
	}
	// If fragment in pos2 is of type "question"
	else if (findLastChar(positions[1]) == "?") {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] = "you've never seen anything " + positions[0] + ". Totally overrated.";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "every time we") + " we lose.";
			positions[1] += " I wanna win, folks.";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[1] = "seriously, " + positions[1];
		}
		else {
			positions[0] += ". So sad!";
		}
	}
	// Fragment in pos2 is of type "statement"
	else {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] = "you've never seen anything " + positions[0] + ". So sad!";
			positions[1] += ".";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "we gotta") + " folks.";
			positions[1] = "I mean, I think " + positions[1] + " and I'm, like, a really smart guy.";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[0] = positions[0].slice(0, -1);
			positions[1] = "if " + positions[1] + "? Such a disaster!";
		}
		else {
			positions[0] += ".";
			positions[1] = "Ok? I said it. " + capitalizeFirstLetter(positions[1]) + ". Believe me.";
		}

	}

	// Moves the end punctuation of fragment 2
	// To the end of fragment 3 if they form a complete sentence
	if (findFirstWord(positions[2]) == "and") {
		var punctuation = findLastChar(positions[1]);
		if (punctuation != ",") {
			positions[1] = positions[1].slice(0, -1);
			positions[2] = positions[2] + punctuation;
		}
	}


	// Checks positions 2 and 3 for previous fragment's punctuation
	for (var i = 1; i < positions.length; i++) {

		previousFragment = positions[i - 1];

		var punctuation = findLastChar(previousFragment);

		// If the previous fragment ends the sentence
		if (/[.?!]/i.test(punctuation)) {
			// capitalize the first letter of the current fragment
			positions[i] = capitalizeFirstLetter(positions[i]);
		}
	}

	// Capitalizes first letter of phrase before assembly.
	positions[0] = capitalizeFirstLetter(positions[0]);

	var text = positions[0] + " " + positions[1] + " " + positions[2];
	return text;

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
	
	/**************************************************
		Check type of position 3 fragment
	***************************************************/

	// If fragment in pos3 is of type "like"
	if (findFirstWord(positions[2]) == "like") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "we are naught but") + ".";
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = positions[2] = positions[2].replace(findFirstWord(positions[2]), "we must watch out for") + ".";
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "there will always be") + ".";
		}
		else {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "what about") + "?";
		}	
	}
	// If fragment in pos3 is of type "to"
	else if (findFirstWord(positions[2]) == "to") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "it is enough to") + ".";
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "and then we");
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "we can always") + ".";
		}
		else {
			positions[2] = positions[2].replace(findFirstWord(positions[2]), "it seems as though we") + ".";
		}
	}
	// If fragment is pos3 is of type "question"
	else if (findLastChar(positions[2]) == "?") {
		if (findFirstWord(positions[1]) == "like") {
			positions[2] = "it begs the question: " + positions[2];
		}
		else if (findFirstWord(positions[1]) == "to") {
			positions[2] = "well now, " + positions[2];
		}
		else if (findLastChar(positions[1]) == "?") {
			positions[2] = "well now, " + positions[2];
		}
		else {
			// just leave it the same
		}
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

	/**************************************************
		Check type of position 2 fragment
	***************************************************/

	// If fragment in pos2 is of type "like"
	if (findFirstWord(positions[1]) == "like") {
		if (findFirstWord(positions[0]) == "like") {
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "faced with") + ",";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "we must");
			positions[1] = positions[1] + ".";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[1] = positions[1].slice(findFirstWord(positions[1]));
			positions[1] = capitalizeFirstLetter(positions[1]) + "?";
		}
		else {
			positions[1] = positions[1] + ".";
		}	
	}
	// If fragment in pos2 is of type "to"
	else if (findFirstWord(positions[1]) == "to") {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] += ",";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "we must") + ".";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "if we") + ",";
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "we must") + ".";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[0] = positions[0].slice(0, -1);
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "if we") + "?";
		}
		else {
			positions[1] = positions[1].replace(findFirstWord(positions[1]), "unless we") + ".";
		}
	}
	// If fragment is pos2 is of type "question"
	else if (findLastChar(positions[1]) == "?") {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] = "life is " + positions[0] + ".";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "if we") + ",";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[1] = "seriously, " + positions[1];
		}
		else {
			positions[0] = positions[0] + ".";
		}
	}
	// Fragment in pos2 is of type "statement"
	else {
		if (findFirstWord(positions[0]) == "like") {
			positions[0] += ",";
			positions[1] += ".";
		}
		else if (findFirstWord(positions[0]) == "to") {
			positions[0] = positions[0].replace(findFirstWord(positions[0]), "we must") + ",";
			positions[1] = "even if " + positions[1] + ".";
		}
		else if (findLastChar(positions[0]) == "?") {
			positions[0] = positions[0].slice(0, -1);
			positions[1] = "if " + positions[1] + "?";
		}
		else {
			positions[1] = "when " + positions[1] + ".";
		}

	}

	// Moves the end punctuation of fragment 2
	// To the end of fragment 3 if they form a complete sentence
	if (findFirstWord(positions[2]) == "and") {
		var punctuation = findLastChar(positions[1]);
		if (punctuation != ",") {
			positions[1] = positions[1].slice(0, -1);
			positions[2] = positions[2] + punctuation;
		}
	}


	// Checks positions 2 and 3 for previous fragment's punctuation
	for (var i = 1; i < positions.length; i++) {

		previousFragment = positions[i - 1];

		var punctuation = findLastChar(previousFragment);

		// If the previous fragment ends the sentence
		if (/[.?!]/i.test(punctuation)) {
			// capitalize the first letter of the current fragment
			positions[i] = capitalizeFirstLetter(positions[i]);
		}
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
			text = assembleTrumpText();
		}
		
		// Creates the div  that holds the text and controls style
		// For the text (background, font etc.)
		var textDiv = document.createElement("div");
		textDiv.setAttribute("class", "col-md-12 awesomequote");
		textDiv.append(text);
		
		// Creates the divs that hold the text divs
		// Putting  a div inside a div in this way makes it possible
		// to have "margins" in between the divs without affecting their width
		var bootDiv = document.createElement("div");
		bootDiv.setAttribute("class", "col-sm-12 col-md-" + colWidth);
		bootDiv.appendChild(textDiv);

		var quoteArray = document.getElementById("quoteResults");
		quoteArray.appendChild(bootDiv);
	}
}
