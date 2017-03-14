// document.getElementById("QuoteApp").innerHTML = generateQuote();


function generateQuotes() {

	// clear previously generated text
	// before generating more
	document.getElementById("quoteResults").innerHTML = "";
	
	// Capture the number of quotes requested
	// and store it in a variable.
	var numberQuotes = document.getElementById("textinput").value;

	var text = assembleText();
	
	insertDivs(numberQuotes, text);

}



function assembleText() {
	var fragments = ["to be", "or not", "to be"];
	var text = fragments[0] + " " + fragments[1] + " " + fragments[2];
	return text;
}


function insertDivs (numberQuotes, text) {
	for (var i = 0; i < numberQuotes; i++) {
		
		var textDiv = document.createElement('div');
		textDiv.setAttribute('class', "col-md-12 awesomequote");
		textDiv.append(text);
		
		var bootDiv = document.createElement('div')
		bootDiv.setAttribute('class', "col-md-4");
		bootDiv.appendChild(textDiv);

		var quoteArray = document.getElementById("quoteResults");
		quoteArray.appendChild(bootDiv);
	}
}