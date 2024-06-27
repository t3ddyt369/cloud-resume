window.addEventListener('DOMContentLoaded', (event) =>{
	getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
	let count = 30;
	fetch(functionApi).then(response => {
		return response.json()
	}).then(response =>{
			console.log("Website called function API.");
			count = reponse.count;
			document.getElementById("counter").innerText = count;
		}).catch(function(err){
		console.log(error);
	});
	return count;
}
		