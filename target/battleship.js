let view = {
	//this method takes a string message and display it in the message display area
	displayMessage: function(msg){
		let messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg
	},
	displayHit: function(location){
		let cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location){
		let cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
}


var ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
	     { locations: ["32", "33", "34"], hits: ["", "", ""] },
	{ locations: ["63", "64", "65"], hits: ["", "", "hit"] }];

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("Tap tap, is this thing on?");

// Event listener for keydown
document.addEventListener("keydown", function(event) {
	if (event.key === "a") {
	  document.body.style.backgroundColor = "aquamarine";
	}
});
      
// Event listener for keyup (optional)
document.addEventListener("keyup", function(event) {
	if (event.key === "a") {
	  document.body.style.backgroundColor = "";
	}
});
      