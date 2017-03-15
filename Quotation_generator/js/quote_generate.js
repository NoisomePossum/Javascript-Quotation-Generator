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
	insertDivs(numberQuotes);

}

quoteFrags = [
	"to live in the moment",
	"to face the wind",
	"to reach for the stars",
	"monkeys fall from trees",
	"to give a mouse a cookie",
	"To be or not to be", 
	"That is the question", 
	"Ain't it?"
	
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
	var text = "";
	for (var i = 0; i < 3; i++) {
		var randomIndex = Math.floor((Math.random() * quoteFrags.length));
		text += quoteFrags[randomIndex] + " ";
	}
	// var text = quoteFrags[0] + " " + quoteFrags[1] + " " + quoteFrags[2];
	return text;
}


function insertDivs (numberQuotes) {

	if (numberQuotes < 3) {
		colWidth = 12 / numberQuotes;
	}
	else {
		colWidth = 4;
	}
	
	for (var i = 0; i < numberQuotes; i++) {

		var text = assembleText();
		// var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo consequatur, quidem tempora hic laborum, ea sapiente quis. Quas nulla laborum distinctio voluptatibus ipsum impedit sequi laboriosam esse, aspernatur fugiat.";
		
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
