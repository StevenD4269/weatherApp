

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
fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`) {.then((whateverstuff) => {})}
//   Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.

//   Create a form that will let users input their location and will fetch the weather info.
//   Display the information on your webpage using the DOM.



// steps i need to breakdown
// Create a function that takes a location parameter.
// make variables for the information to place into your function
// The fetch() function is used to make the API request.
// If the response is not okay, write something to have an error thrown.
// If the response is okay, the response body is parsed as JSON.
// The weather data is returned to the caller.
// The function catches any errors that occur during the fetch operation.