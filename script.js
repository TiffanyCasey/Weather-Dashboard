$(document).ready(function() {
console.log("ready!");

// Global variables
var currentDate = moment().format('M/DD/YYYY');  // Current Date

renderCityList(); // Retrieves stored cities 

// Function to get Cities from local storage 
function renderCityList() {
  localStorage.getItem("cityInput"); 
  }

// On-click when user enters city 
$("#basic-text1").on("click", function(event) {
  event.preventDefault();
  console.log("you've clicked a button");
  var cityInput = $("#input").val(); //saves the city that has been entered
  localStorage.setItem("cityInput", cityInput); //saves city input to local storage 

  // Append List of Cities to Web Page 
  $("#cityButtons").append (
    //styling 
    "<div class='list-group'>"

  // City text
  + "<a href='#' class='list-group-item'>" + cityInput + "</a>"
  + "</div>")

  renderCityList(); // Retrieves stored cities 
}); // End of city button on-click

  // QueryURL to Open Weather App for One Day 
  var oneDay ="https://api.openweathermap.org/data/2.5/weather?q=" 
  + "Newark" + "&units=imperial" + "&appid=45e45c0bb2ef540df33fa21a29aafa8a";
  console.log("oneDay", oneDay);  

  //AJAX call for One Day
  $.ajax({
      url: oneDay,
      method: "GET",
  }).then(function(response) {
      console.log("response", response);

    //icon url  
    var iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
   
    // Append details to the site 
    $("#dailyWeather").append(
      //styling
      "<div class='col s12 m6'>"
  
      // Weather contents 
      +  "<h2>" + response.name + " (" + currentDate + ")" + "&nbsp" + "<img src='" + iconUrl  + "'>" + "</h2>"
      +  "<ul>" + "Temperature: " +  response.main.temp + " °F" + "</ul>"
      +  "<ul>" + "Humidity: " + response.main.humidity + "%" + "</ul>"
      +  "<ul>" + "Wind Speed: " +  response.wind.speed + " MPH" + "</ul>"
      +  "<ul>" + "UV Index: " + "</ul>"
  
      //close out card styling 
      + "</div>"
      ); // End of append 
     }) // End of ajax then response  


  
}); // end of document ready function

