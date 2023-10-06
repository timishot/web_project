const navLinks = document.getElementById('navLinks');
const cancel = document.getElementById('remove');
const menuicon = document.getElementById('menu');

menuicon.addEventListener('click', showMenu)

cancel.addEventListener('click', hideMenu)

function showMenu(){
	navLinks.style.right = "0";
}

function hideMenu(){
	navLinks.style.right = "-300px"
}

