describe ('Thermostat', function(){
  it("Thermostat starts at 20 degress", function(){
    thermostat = new Thermostat();
    expect(thermostat.getCurrentTemperature()).toEqual(20);



  });
});
