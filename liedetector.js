const lieDetectorTest = ()=>{
	let lies = 0;

	let stolenDiamod = { };
	if (stolenDiamod) {
		console.log("you stole the diamond");
		lies++;
	}
	let car = {
		KeysInPocket: null
	};

	if (car.keyInPocket){
		console.log("Uh oh, guess you stole the car!");
		lies++;
	}

	let foundYoutTheCrimScene = [ ];
	if (foundYoutTheCrimScene){
		console.log("A sure sign of guilt");
		lies++;
	}

	if (foundYoutTheCrimScene[0]) {
		console.log("Caught with a stolen item!");
		lies++;
	}

	let yourName = " ";
	if (yourName){
		console.log("Guess you lied about your name");
		lies++;
	}

	return lies;
}

let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies+ " lies!");

if (numberOfLies >= 3){
	console.log("Guilty as charged");
}

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
	alert("time" + presentableText);
}