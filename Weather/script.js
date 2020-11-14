var api_key = "841647bb43bb97965922c6f29c63501b",
 	locationEl = document.getElementById('location'),
 	tempEl = document.getElementById('temp'),
 	weatherEl = document.getElementById('weather'),
 	weatherImgEl = document.getElementById('weather-img');

// --- Fetch Request ---

fetch('http://ip-api.com/json').then(res => {
	return res.json();
}).then(location => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${api_key}&units=metric`).then(res => {
		return res.json();
	}).then(data => {
		locationEl.innerHTML = `The weather in ${data.name}`;
		tempEl.innerHTML = `${data.main.temp}&deg; C`;
		weatherEl.innerHTML = `${data.weather[0].description}`;
		weatherImgEl.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
	})
})
