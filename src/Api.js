export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'feb99593b7msh14485d138055071p1904bbjsn0f937632ab3a',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

// Forecast Api
export const ForecastApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'feb99593b7msh14485d138055071p1904bbjsn0f937632ab3a',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

fetch('https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/', ForecastApiOptions)
	.then(response => response.json())
	.then(response => (response))
	.catch(err => console.error(err));