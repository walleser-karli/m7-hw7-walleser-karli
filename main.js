var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        console.log(apiResult.name);

        function showCity() {
            // apiResult.sort(function(a, b){return 0.5 - Math.random()});
            var cityHeader = document.getElementById("top-header");
            var cityName = document.createElement("p");
            cityHeader.appendChild(cityName);
            var cityText = document.createTextNode(apiResult.name);
            cityName.appendChild(cityText);
        };
        showCity();
        
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=34747,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();