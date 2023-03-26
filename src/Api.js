export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'feb99593b7msh14485d138055071p1904bbjsn0f937632ab3a',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));