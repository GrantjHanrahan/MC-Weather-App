

const app = angular.module('mcWeatherTestApp', []);
app.controller('mcWeatherTestController', function($scope, $http) {
  $scope.testIsDone = true;
  $scope.items = {};
  $scope.assetName = '';
  $scope.countryCode = '';
  $scope.totalCount = 0;
  $scope.searchWeather = function() {
    let searchCity = $scope.assetName;
    let searchCountry = $scope.countryCode;
    let apiKey = '8d1194589041958e3246e9d8334d1a8c';
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchCity + ',' + searchCountry + '&units=metric&APPID=' + apiKey).then(function(data) {
      $scope.city = data.data.name;
      $scope.country = data.data.sys.country;
      $scope.temp = data.data.main.temp;
      $scope.main = data.data.weather[0].main;
      $scope.description = data.data.weather[0].description;
      $scope.date = data.data.dt;
      $scope.icon = "http://openweathermap.org/img/w/" + data.data.weather[0].icon + ".png";

      switch ($scope.description) {
        case 'clear sky':
          {
            $scope.weatherBackground = {
              "background": "url('/public/clear.jpg')",
              "background-size": "cover"
            };
            break;
          }
        case 'broken clouds':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'few clouds':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'mist':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'rain':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'scattered clouds':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'shower rain':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'snow':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        case 'thunderstorm':
          {
            $scope.weatherBackground = {
              "background": "url('')",
              "background-size": "cover"
            };
            break;
          }
        default:
          $scope.weatherBackground = {
            "background": "url('/public/clear.jpg')",
            "background-size": "cover"
          };
          break;
      }

    });
  }
  $scope.fiveForecast = function() {
    let searchCity = $scope.assetName;
    let searchCountry = $scope.countryCode;
    let apiKey = '8d1194589041958e3246e9d8334d1a8c';
    $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + ',' + searchCountry + '&units=metric&cnt=5&APPID=' + apiKey).then(function(data) {
      $scope.items = data.data.list;
      $scope.forecastImg = '';
    });
  }
  $scope.parseDate = function(time) {
    return new Date(time * 1000);
  };
});
