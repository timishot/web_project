// Number of trail elements to create
const numTrailElements = 10;

// Array to hold the trail elements
const trailElements = [];

// Create and append trail elements to the body
for (let i = 0; i < numTrailElements; i++) {
  const trailElement = document.createElement('div');
  trailElement.className = 'trail';
  document.body.appendChild(trailElement);
  trailElements.push(trailElement);
}

// Function to move the trail elements with the mouse pointer
function moveTrailElements(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  for (let i = numTrailElements - 1; i > 0; i--) {
    const prevX = trailElements[i - 1].style.left || '0px';
    const prevY = trailElements[i - 1].style.top || '0px';

    trailElements[i].style.left = prevX;
    trailElements[i].style.top = prevY;
  }

  trailElements[0].style.left = mouseX + 'px';
  trailElements[0].style.top = mouseY + 'px';
}

// Add a mousemove event listener to move the trail elements
document.addEventListener('mousemove', moveTrailElements);
