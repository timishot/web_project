function handleClick(e){
	e.preventDefault();
	const colors = document.querySelectorAll(".color");
	colors.forEach((color)=>{
		color.style.animationPlayState = "running";
	});
	const lastcolor = colors[colors.length - 1];

	lastcolor.addEventListener("animationend", ()=>{
		setTimeout(()=>{
			console.log(e.target.href)
			window.location = e.target.href;
		}, 100)
	})
}