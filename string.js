let emot = "XOxxOO";
let hugs = 0;
var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for (let i = 0; i < emot.length; i++){
	if (emot.charAt(i) === "X"){
		console.log(++hugs)
	}else if (emot.charAt == "o"){
		console.log(kisses++);
	}
}