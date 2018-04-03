// test of a test
describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
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

    it('sets the name', function() {
      expect(scope.testIsDone).toBe(true);
    });

  });
});
