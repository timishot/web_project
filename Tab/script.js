function asTabs(node) {
	// Get all child elements of the node
	const tabs = Array.from(node.children);
      
	// Create tab buttons and append them to the node
	tabs.forEach((tab, index) => {
	  const button = document.createElement('button');
	  button.textContent = tab.getAttribute('data-tabname');
	  node.insertBefore(button, tab);
	});
      
	// Function to show the selected tab and hide others
	function showTab(index) {
	  tabs.forEach((tab, i) => {
	    if (i === index) {
	      tab.style.display = '';
	    } else {
	      tab.style.display = 'none';
	    }
	  });
      
	  // Style the selected tab button differently
	  const buttons = node.querySelectorAll('button');
	  buttons.forEach((button, i) => {
	    if (i === index) {
	      button.classList.add('selected');
	    } else {
	      button.classList.remove('selected');
	    }
	  });
	}
      
	// Add event listeners to the buttons to switch tabs
	node.addEventListener('click', (event) => {
	  if (event.target.tagName === 'BUTTON') {
	    const index = Array.from(node.children).indexOf(event.target);
	    showTab(index);
	  }
	});
      
	// Initialize the interface with the first tab as visible
	showTab(0);
}
      
      // Call the asTabs function with the tab container element
      const tabContainer = document.getElementById('tabContainer');
      asTabs(tabContainer);