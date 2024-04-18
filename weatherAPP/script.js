// fetch template exmaple:
// fetch('https://api.example.com/data')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.error('Error:', error);
//   });

//   Write the functions that fetch the API. You’re going to want functions that can take a location and return the weather data for that location.
const API_KEY = "1e0847d19e9704240e26bba3c3c4b230";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

function returnWeatherData(location) {
  fetch(apiUrl) // creating a fetch to query the internet site for info, apiURL gives directions where to go
    .then((webPackage) => {
      //.then says when you fetch it do this, webPackage has ALL the info we asked for inside it
      if (!webPackage.ok) {
        //
        throw new Error("Network response was not ok");
      }
      return webPackage.json();
    })
    .then((data) => {});
}
