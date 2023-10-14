function asyncRetryWithDelay(action, maxRetries, delayMs){
	return action()
	.catch((error)=>{
		if (maxRetries > 0){
			console.log(`Retrying after ${delayMs}ms. ${maxRetries} retries left.`);
			return new Promise((resolve)=>setTimeout(resolve, delayMs)).then(()=>{
asyncRetryWithDelay(action, maxRetries-1, delayMs)
			});
		} else {
			throw error; //No more retries, rethrow the error
		}
	});
}

// Example usage:
function simulateAsyncAction() {
	return new Promise((resolve, reject)=>{
		const randomNumber = Math.random();
		if (randomNumber < 0.8){
			resolve('Success');
		} else {
			reject(new Error('Random error'));
		}
	});
}

asyncRetryWithDelay(simulateAsyncAction, 3, 1000)
.then((result)=>{
	console.log('Final result:', result);
})
.catch((error)=>{
	console.error('All retries exhausted.')
})