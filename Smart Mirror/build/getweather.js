

var apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=Ames&appid=06d531482537d578e12364483114f6a6';
$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData){
    var cityName = weatherData.name;
    var description =  weatherData.weather[0].description;
    var temp = weatherData.main.temp;
    var iconCode = weatherData.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
    temp = ((9/5)*(temp-273)+32).toFixed();

    $(".icon").html("<img src='" + iconUrl  + "'>");
    $('.weatherName').append(cityName);
    $('.weatherDescription').append(description);
    $('.weatherTemp').append(temp+"°");
    $('.weatherIcon').append(icon1);

}
