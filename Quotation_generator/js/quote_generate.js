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
	"to catch 'em all",
	"to live in the moment",
	"to reach for the stars",
	"to face the wind",
	"to give a mouse a cookie",
	"to paint with all the colors of the wind",
	"like a dainty duck or deer",
	"like snakes in a plane",
	"like a box of chocolates",
	"like a rolling stone",
	"like water off a duck",
	"it happens",
	"that is the question",
	"monkeys fall from trees",
	"everybody gets a car",
	"it never works",
	"someone has poisoned the water hole",
	"silly ol' bear",
	"How does it feel?",
	"Can you dig it?",
	"What is it worth?"
]

function getRadioVal(form, name) {
	var val;
	// get list of radio buttons with specified name
	var radios = form.elements[name];

	// loop through the list of radio buttons
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

function assembleEnlightenedText() {
	var text = "";
	var positions = [];
	for (var i = 0; i < 3; i++) {
		var randomIndex = Math.floor((Math.random() * quoteFrags.length));
		positions[i] = quoteFrags[randomIndex];
		// text += quoteFrags[randomIndex] + " ";
	}
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
