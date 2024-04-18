document
  .getElementById("weather-form") // find the form
  .addEventListener("submit", function (event) {
    //listens for the submit event
    event.preventDefault(); // Prevent the form from submitting and reloading the page which is the default behavior
    const location = document.getElementById("location-input").value; // Get the value of the input field with id location-input
    returnWeatherData(location); // Call the function to fetch weather data with the user's location
  });

function returnWeatherData(location) {
  const API_KEY = "1e0847d19e9704240e26bba3c3c4b230";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`;

  fetch(apiUrl) // creating a fetch to query the internet site for info, apiURL gives directions where to go
    .then((webPackage) => {
      //.then says when you fetch it do this, webPackage has ALL the info we asked for inside it
      if (!webPackage.ok) {
        // this checks that the package came back in good condition
        throw new Error("Network response was not ok"); //if not ok it responds with this
      }
      return webPackage.json(); // if the package isnt damaged then .json opens the package
    })

    .then((jumbledData) => {
      //The package info is opened but its all jumbled and I cant read it
      const weatherData = processWeatherData(jumbledData); //create a variable to take this jumbled data and make it readable, processWeatherData will be a new function
      displayWeatherData(weatherData); //displays the weather data to see
    })
    .catch((error) => {
      console.error("There was a problem fetching weather data:", error);
      displayErrorMessage(error.message);
    });
}
function processWeatherData(data) {
  // create an object using dot notation
  const weatherInfo = {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
  };
  return weatherInfo;
}

function displayWeatherData(weatherData) {
  //Starts special instruction using a function
  const weatherInfoContainer = document.getElementById("weather-info");
  //this finds a specific spot on the page to show the weather info
  weatherInfoContainer.innerHTML =
    //now fill the spot with text
    `<h2>Weather in ${weatherData.city}, ${weatherData.country}</h2>
        <p>Temperature: ${weatherData.temperature} K</p>`;
} //use weatherData which was my variable for the now unpacked and readable information

function displayErrorMessage(message) {
  const weatherInfoContainer = document.getElementById("weather-info");
  weatherInfoContainer.innerHTML = `<p>${message}</p>`;
}
