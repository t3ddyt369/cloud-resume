window.addEventListener('DOMContentLoaded', (event) =>{
	getVisitCount();
})

const functionApiUrl = 'https://git-resume-counter.azurewebsites.net/api/GetResumeCounter?code=a-vtEfCNU7_oRO2f-GgGR6igyxTFHb6K9wFt4GAygvgVAzFuOk4GPA%3D%3D'
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
	let count = 30;
	fetch(functionApiUrl).then(response => {
		return response.json()
	}).then(response =>{
		console.log("Website called function API.");
		count = reponse.count;
		document.getElementById("counter").innerText = count;
	}).catch(function(error){
		console.log(error);
	});
	return count;
}
		