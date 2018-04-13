
// test of a test
describe('example test', function() {
  it('should be true', function() {
    expect('test').toBe('test');
  });
});

// Test to confirm that $scope.testIsDone has been set to true
describe('mcWeatherTestApp', function() {
  var scope,
    controller;
  beforeEach(function() {
    module('mcWeatherTestApp');
  });

  describe('mcWeatherTestController', function() {

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('mcWeatherTestController', {'$scope': scope});

    }));

    it('sets the correct properties of scope', function() {
      expect(scope.testIsDone).toBe(true);
    });

  });

  // Non-working test
  describe('Open Weather API HTTP Request', function() {
    beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_) {
      controller = _$controller_;
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();

      var mockForecast = {
        "coord": {
          "lon": 115.86,
          "lat": -31.95
        }
      }
      $httpBackend.whenGET('http://api.openweathermap.org/data/2.5/weather?q=Perth,AU&units=metric&APPID=8d1194589041958e3246e9d8334d1a8c').respond(200, mockForecast);
    }))

    it('should set response variable', function() {
      scope.searchWeather();
      $httpBackend.flush();
      expect($scope.response).toEqual(mockForecast);
    });
  })

}); // describe app
