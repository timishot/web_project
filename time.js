let bombTimer = setTimeout(() => {
	console.log("BOOM!");
	}, 500);
	if (Math.random() < 0.5) { // 50% chance
		console.log("Defused.");
		clearTimeout(bombTimer);
}


let ticks = 0;
let clock = setInterval(()=>{
	console.log("ticks", ticks++);
	if (ticks== 100){
		clearInterval(clock);
		console.log("stop")
	}
}, 0.01);