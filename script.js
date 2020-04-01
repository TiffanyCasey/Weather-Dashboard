$(document).ready(function() {
    console.log("ready!");

// QueryURL to Opean Weather App 
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
    "45e45c0bb2ef540df33fa21a29aafa8a";
          

//AJAX call 
$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) { // Loop through responses 
        console.log("TITLE", response.data[i]. titile);
    }
});
});

//

//
