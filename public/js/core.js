

const app = angular.module('mcWeatherTestApp', []);
app.controller('mcWeatherTestController', function($scope, $http) {
  $scope.testIsDone = true;
  $scope.assetName = '';
  $scope.countryCode = '';
  $scope.searchWeather = function() {
    $scope.showForecast = true; // show city-forecast on click
    let searchCity = $scope.assetName;
    let searchCountry = $scope.countryCode;
    let apiKey = '8d1194589041958e3246e9d8334d1a8c';
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchCity + ',' + searchCountry + '&units=metric&APPID=' + apiKey).then(function(data) {
      $scope.city = data.data.name;
      $scope.country = data.data.sys.country;
      $scope.temp = data.data.main.temp;
      $scope.min = data.data.main.temp_min;
      $scope.max = data.data.main.temp_max;
      $scope.main = data.data.weather[0].main;
      $scope.description = data.data.weather[0].description;
      $scope.date = moment(data.data.dt).format("dddd, MMM Do");
      $scope.sunrise = moment(data.data.sys.sunrise).format("HH:mm:ss");
      $scope.sunset = moment(data.data.sys.sunset).format("HH:mm:ss");
      $scope.icon = "http://openweathermap.org/img/w/" + data.data.weather[0].icon + ".png";
      console.log(data.data)
      switch ($scope.description) {
        case 'clear sky':
          {
            $scope.weatherBackground = {
              "background": "url('/images/clear.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'broken clouds':
          {
            $scope.weatherBackground = {
              "background": "url('/images/broken-clouds.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'few clouds':
          {
            $scope.weatherBackground = {
              "background": "url('/images/few-clouds.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'mist':
          {
            $scope.weatherBackground = {
              "background": "url('/images/mist.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'rain':
          {
            $scope.weatherBackground = {
              "background": "url('/images/rain.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'scattered clouds':
          {
            $scope.weatherBackground = {
              "background": "url('/images/scat-clouds.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'shower rain':
          {
            $scope.weatherBackground = {
              "background": "url('/images/light-rain.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'snow':
          {
            $scope.weatherBackground = {
              "background": "url('/images/snow.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'thunderstorm':
          {
            $scope.weatherBackground = {
              "background": "url('/images/thunder.jpg')",
              "background-size": "cover"
            };
            break;
          }
        default:
          $scope.weatherBackground = {
            "background": "url('/images/weather.jpg')",
            "background-size": "cover"
          };
          break;
      }

    });
    // add a .error function
    // .error(function(data, status, headers, config) {
    //     // Log an error in the browser's console.
    //     $log.error('Could not retrieve data from ' + url);
    //   });
  }
  $scope.fiveForecast = function() {
    $scope.items = {};
    let searchCity = $scope.assetName;
    let searchCountry = $scope.countryCode;
    let apiKey = '8d1194589041958e3246e9d8334d1a8c';
    $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + ',' + searchCountry + '&units=metric&cnt=5&APPID=' + apiKey).then(function(data) {
      $scope.items = data.data.list;
      console.log($scope.items);

    });
  }
  $scope.parseDate = function (time) {
    let dates = new Date(time * 1000);
    let hours = dates.getHours();
    let minutes = "0" + dates.getMinutes();
    let seconds = "0" + dates.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };
});
