// function readStorage(key){
// 	//simulating an asynchronous operation, such s reading from storage
// 	return new Promise((resolve, reject)=>{
// 		setTimeout(()=>{
// 			const data = localStorage.getItem(key);
// 			if (data !== null){
// 				resolve(data); // Resolve with the data if it exists
// 			}else{
// 				reject(new Error(`No data found for key: ${key}`));// Reject with an error if data is not found
// 			}
// 		}, 1000); //Simulating a delay
// 	});
// }


// // Usage example:
// readStorage('myData')
// .then((data)=>{
// 	console.log('Data read successfully:', data);
// })
// .catch((error)=>{
// 	console.error("Error reading data:", error.message);
// });

const fs = require('fs');

function readStorage(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Usage example:
readStorage('data.txt')
  .then((data) => {
    console.log('Data read successfully:', data);
  })
  .catch((error) => {
    console.error('Error reading data:', error.message);
  });