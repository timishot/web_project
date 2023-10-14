//Assuming connection is a map containing Arrays of connection
const connections = new Map();

connections.set("A", ["B", "C", "D"]);
connections.set("B", ["A", "C"]);
connections.set("C", ["A", "B"]);


const at = " ";

for (let next of connections.get(at) || []){
	console.log(`Connect to ${next}`);
}