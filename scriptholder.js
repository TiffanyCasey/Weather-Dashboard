$(document).ready(function() {
    console.log("ready!");

// Global variables
var cityInput=""; 
var queryUrl="";

 // Variable for Daily Weather Icon 
 var iconUrl = "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png";

 // QueryURL for UV index 
  var UVUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" 
  + "Newark" + "&appid=45e45c0bb2ef540df33fa21a29aafa8a" + "&lat=" + response.city.coord.lat + "&lon" + response.city.coord.lon + "&cnt=" + response.cnt;  


    // //AJAX call UV index 
  // $.ajax({
  //   url: UVUrl,
  //   method: "GET",
  //   }).then(function(response) {
  //   console.log("this is the response", response);
  // return response.city.coord.lat

  // }); // End of ajax for UV Index 

  
storeCities();  

 // On-click when user enters city 
 $("#cityInput").on("click", function(event) {
    event.preventDefault();
    console.log("you've clicked a button");

    // Grabs the input from the ingredint input text (get)
    cityInput = $("#input").val();
    console.log(cityInput, "cityInput")
    }); // End of city button on-click 

    // Function to retrieve city
    function storeCities () {

    // QueryURL to Open Weather App 
    var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" 
    + cityInput + "&appid=" + "45e45c0bb2ef540df33fa21a29aafa8a";  
    console.log(queryUrl);

    //AJAX call 
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        console.log(response.city)
         }) // End of ajax then response
        } // End of store Cities function 

    // Append details to the site 
    $("#dailyWeather").append(
    //styling
    "<div class='col s12 m6'>"

    // Weather contents 
    +  "<h2>" + response.city + "</h2>"

    //close out card styling 
    + "</div>"
    ); // End of append 

}); // end of document ready function