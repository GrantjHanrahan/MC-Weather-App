README

Live: https://mc-weather.herokuapp.com/
GitHub: https://github.com/GrantjHanrahan/MC-Weather-App

Momentum Cloud Weather Test
---- Test requirements ----
These are the things we'd like to see when reviewing your code
The p.replace-me tag in this document has been replaced with a AngularJS Component
Weather data loads directly from the OpenWeatherMap API on page load for a given city
Dependency injection everywhere possible
API calls are encapsulated in AngularJS Services
Page has been styled and elements use Bootstrap classes
Style overrides are done using SASS (use the provided inline SASS compiler setup to make it easier)
Tests are provided for your component (any test is better than no test)
Add any libraries you'd like, and have fun! ☺
e.g. The weather forecast for Sydney is Sunny

---- Approach ----

Languages/ Frameworks: Angular, Node.js, Express.js, Moment.js, Bootstrap, Sass

Testing: Jasmine, Karma

To do:
- Add testing for Angular Component
- Validate user input

---- Challenges ----

- Building the Angular app structure with Node
- Creating two separate functions for different api calls (weather data for a city, 3 hour forecast for the same city) then rendering that data.
- Implementing a Component Test was the most difficult aspect of the project. This is my first time writing Angular tests and so I left this part of the project to the end. This was a mistake as I had to adapt the test to the existing component which made the process more difficult/ foreign.
