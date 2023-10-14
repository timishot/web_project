const myPromise = new Promise((resolve, reject) =>{
	setTimeout(()=>{
		resolve("promise Resolved!");
	});
});

myPromise.then((result)=>{
	console.log("First callback:", result);
	return "Value from first callback";
})
.then((result)=>{
	console.log("Second callback:", result);
	return new Promise((resolve) =>{
		setTimeout(()=>{
			resolve("Inner Promise resolved!");
		}, 1000);
	});
})
.then((result)=>{
	console.log("Third callback:", result);
});