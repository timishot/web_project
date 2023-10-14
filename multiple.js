
const myPromise = new Promise((resolve, reject) => {
	// Simulating an asynchronous operation
	setTimeout(() => {
	  resolve("Promise resolved!");
	}, 1000);
});
      
// Adding the first callback using .then()
myPromise.then((result) => {
	console.log("First callback:", result);
});
      
// Adding the second callback using .then()
myPromise.then((result) => {
	console.log("Second callback:", result);
});
      
// Adding a callback after the Promise has settled
myPromise.then((result) => {
	console.log("Third callback (added after the Promise settled):", result);
});
      // Simulating an asynchrounh