document.addEventListener('DOMContentLoaded', function() {
    var weather_button = document.getElementById("weather_button");

    var cities = [
            {"city": "New York", "latitude": 40.7128, "longitude": -74.0060},
            {"city": "Los Angeles", "latitude": 34.0522, "longitude": -118.2437},
            {"city": "Houston", "latitude": 29.7604, "longitude": -95.3698},
            {"city": "Miami", "latitude": 25.7617, "longitude": -80.1918},
            {"city": "London", "latitude": 51.5074, "longitude": -0.1278},
            {"city": "Paris", "latitude": 48.8566, "longitude": 2.3522},
            {"city": "Tokyo", "latitude": 35.6895, "longitude": 139.6917},
            {"city": "Sydney", "latitude": -33.8688, "longitude": 151.2093},
            {"city": "Cape Town", "latitude": -33.9249, "longitude": 18.4241},
            {"city": "Karachi", "latitude": 24.8607, "longitude": 67.0011},
            {"city": "Lahore", "latitude": 31.5497, "longitude": 74.3436},
            {"city": "Faisalabad", "latitude": 31.4504, "longitude": 73.1350},
            {"city": "Rawalpindi", "latitude": 33.6844, "longitude": 73.0479},
            {"city": "Multan", "latitude": 30.1575, "longitude": 71.5249},
            {"city": "Gujranwala", "latitude": 32.1877, "longitude": 74.1945},
            {"city": "Peshawar", "latitude": 34.0151, "longitude": 71.5249},
            {"city": "Quetta", "latitude": 30.1798, "longitude": 66.9750},
            {"city": "Islamabad", "latitude": 33.6844, "longitude": 73.0479},
            {"city": "Sialkot", "latitude": 32.4927, "longitude": 74.5310},
            {"city": "Rome", "latitude": 41.9028, "longitude": 12.4964},
            {"city": "Moscow", "latitude": 55.7558, "longitude": 37.6176},
            {"city": "Beijing", "latitude": 39.9042, "longitude": 116.4074},
            {"city": "Seoul", "latitude": 37.5665, "longitude": 126.9780},
            {"city": "Bangkok", "latitude": 13.7563, "longitude": 100.5018},
            {"city": "Sydney", "latitude": -33.8688, "longitude": 151.2093},
            {"city": "Mexico City", "latitude": 19.4326, "longitude": -99.1332},
            {"city": "São Paulo", "latitude": -23.5505, "longitude": -46.6333},
            {"city": "Cairo", "latitude": 30.0444, "longitude": 31.2357},
            {"city": "Johannesburg", "latitude": -26.2041, "longitude": 28.0473},
            {"city": "Dubai", "latitude": 25.2769, "longitude": 55.2963},
            {"city": "Singapore", "latitude": 1.3521, "longitude": 103.8198},
            {"city": "New Delhi", "latitude": 28.6139, "longitude": 77.2090},
            {"city": "Mumbai", "latitude": 19.0760, "longitude": 72.8777},
    ];

    weather_button.addEventListener("click", function() {
        var input = document.getElementById("userInput").value;
        var city = cities.find(city => city.city.toLowerCase() === input.toLowerCase());
        
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=c153479685c47f1b34a83591f3b1acbe`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    var temperature = (data.main.temp - 273.15).toFixed(2) + "°C";
                    var description = data.weather[0].description;
                
                    document.getElementById("temperature").innerText = "Temperature: " + temperature;
                    document.getElementById("description").innerText =  description;
                })
                .catch((err) => {
                    console.error(err);
                    document.getElementById("temperature").innerText = "Could not fetch weather data.";
                    document.getElementById("description").innerText = "";
                });
        } else {
            document.getElementById("temperature").innerText = "City not found.";
            document.getElementById("description").innerText = "";
        }
    });
});