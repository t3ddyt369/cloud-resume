window.addEventListener('DOMContentLoaded', (event) =>{
	getVisitCount();
})

const functionApiUrl = 'https://getresumecounter9.azurewebsites.net/api/GetResumeCounter9?code=8es4EDdFd-C_wLzR-pDU0HJ3QmrZBFQmiX-1nFk-OvPsAzFuJQ3x4A%3D%3D'
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
		
