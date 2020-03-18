describe ('Thermostat', function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it("Thermostat starts at 20 degress", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("Can increase the temparature", function(){
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21)

  });

  it("Can decrease the temparature", function(){
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)

  });

  it("has a minimum of 10 degrees", function(){
    for(var i=0; i<11; i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)


    
  });




});
