// Open Weather Map API
$(document).ready(function(){
	var lat;
	var lon; 
	var city; 
	var weatherType; 
	var kelvin; 
	var farenheit; 
	var celcius; 
	var windSpeed; 

	// Geolocation API getJSON Call
	$.getJSON("http://ip-api.com/json", function(data2){
		lat = data2.lat;
		lon = data2.lon;
		// console.log(lat);
		// console.log(lon);

		var tempSwap=true;

		// API URL - City ID
		// var api = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=63ae02059a0d63bb70b02197be629a8d"; // City ID

		// API URL - Geolocation --> removed id, and added lat & lon to URL
		var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=63ae02059a0d63bb70b02197be629a8d'; 
		console.log(api);	// prints API URL with correct geolocation 

		// API getJSON Call
		$.getJSON(api, function(data){
		// console.log(data.coord.lon);	// confirm APIs coordinates
		// console.log(data.coord.lat);	// confirm APIs coordinates 

		// City Name 
		city = data.name; 
		console.log(city);
		$('#city').html(city);

		// Weather Type
		weatherType = data.weather[0].description;
		// console.log(weatherType);
		$("#weatherType").html(weatherType);

		// Wind Speed
		windSpeed = data.wind.speed;
		windSpeed = (2.237*(windSpeed)).toFixed(0);	// converts windspeed from metric to United States Customary Units (USCU) --> miles per hour 
		// console.log(windSpeed);
		$("#windSpeed").html(windSpeed + " mph");

		// Kelvin
		kelvin = data.main.temp;

		// Farenheit
		// farenheit = (kelvin)*(9/5)-459.67; 
		farenheit = (kelvin*(9/5)-459.67).toFixed(0); // limits result to X places past the decimal point	
		$('#farenheit').html(farenheit + " &#8457;");

		// Celcius
		// celcius = kelvin-273; 
		celcius = (kelvin-237).toFixed(0); // limits result to X places past the decimal point 
		$('#celcius').html(celcius + " &#8451;");

		// Swap between Farenheit and Celcius 
		$("#farenheit").click(function(){
			if (tempSwap === false){
				$("#farenheit").html(farenheit + " &#8457;"); // add unicode character for Farenheit (W3 Schools has code)
				tempSwap = true;
			}else{
				$("#farenheit").html(celcius + " &#8451;"); // add unicode character for Celcius 
				tempSwap = false; 
			}
		})

		// Weather Icons
		// if (farenheit>60){
		// 	$('.star').addClass('sun');
		// 	$('.sky').addClass('rays');
		// };
		
		// if (weatherType === 'clear sky'){
		// 	// $('.star').addClass('sun');
		// 	// $('.sky').addClass('rays');
		// // } else if (weatherType === 'clouds'){
		// 	$('.star2').addClass('cloud');
		// 	$('.sky2').addClass('cloud');
		// 	// $('.sky').addClass('cloud');
		// }

		if (weatherType === 'sunny'){
			$('.star1').addClass('sun');
			$('.sky1').addClass('rays');
		}else if (weatherType === 'clouds'){
			$('.star2').addClass('cloud');
			$('sky2').addClass('cloud');
		}else if (weatherType === 'clear sky'){
			$('.star1').addClass('sun');
			$('.sky1').addClass('rays');
		};


	})
	});
});
