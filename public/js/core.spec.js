

// test of a test
describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});

//
describe('searchWeather', function(){

  beforeEach(angular.mock.module('mcWeatherTestApp'));

  beforeEach(inject(function(_formattedTime_){
    formattedTime = _formattedTime_;
  }))


  it('should exist', function(){
    expect(formattedTime).toBeDefined();
  });
});
