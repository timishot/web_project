async function fetchUserData(){
	const response = await fetch('https://example.com/userdata');
	const data = await response.json();
	console.log("Tomi")
	return data;
	
}


console.log("Timi")

async function fetchDataAndLog() {
  try {
    const userData = await fetchUserData();
    console.log("Tomi");
    console.log(userData); // Log the fetched data
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndLog();