const numTrailElements = 10;

const trailElements = [];
//create nd append trail elements to the body
for (i = 0; i < numTrailElements; i++){
	const trailElement = document.createElement("div");
	trailElement.className = 'trail';
	document.body.appendChild(trailElement);
	trailElements.push(trailElement);
}

//function to move the trail element with mousemove
const moveTrailElements = (event)=>{
	mouseX = event.clientX; 
	mouseY = event.clientY;

	for(i = numTrailElements - 1; i > 0; i--){
		const prevX = trailElements[i - 1].style.left || "0px";
		const prevY = trailElements[i - 1].style.top || "0px";

		trailElements[i].style.left = prevX;
		trailElements[i].style.top = prevY;
	}

	trailElements[0].style.left = mouseX + "px";
	trailElements[0].style.top = mouseY + "px";

}

//add a mouse move eventlisterner to move the trail element

document.addEventListener('mousemove', moveTrailElements);