// let link = document.querySelector("a");
// link.addEventListener("click", event => {
// 	alert("Nope.");
// 	event.preventDefault();
// });

// document.getElementById('myButton').addEventListener('click', function(event) {
// 	// Access event properties
// 	alert('Event type:' + event.type);
// 	alert('Target element:'+ event.target.nodeName);
// 	alert('Current element:' + event.currentTarget);
      
// 	// Prevent the default behavior
// 	event.preventDefault();
      
// 	// Stop event propagation
// 	event.stopPropagation();
// });

// window.addEventListener("mouseover", event => {
// 	let dot = document.createElement("div");
// 	dot.className = "dot";
// 	dot.style.left = (event.pageX - 4) + "px";
// 	dot.style.top = (event.pageY - 4) + "px";
// 	document.body.appendChild(dot);
// });

// document.addEventListener("click", function(event) {
// 	alert("pagey: "+ event.pageY + " clienty:" + event.clientY);
// });

const element = document.getElementById("myElement");
const rect = element.getBoundingClientRect();

console.log("Top:", rect.top);
console.log("Left:", rect.left);
console.log("Width:", rect.width);
console.log("Height:", rect.height);