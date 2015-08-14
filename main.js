
function vehicleConstructor(name, wheelCount, passengerCount) {
    var vehicle = { name : name,
                    wheelCount: wheelCount,
                    passengerCount : passengerCount,
                    makeNoise: function() { return "vehicle nose"; }
                  };
    return vehicle;
}

/////////////////////////////////////////////////
var bike = vehicleConstructor("bike", 2, 1);
bike.makeNoise = function() { return "ring ring"; };
console.log(bike.name + " make noise " + bike.makeNoise());


/////////////////////////////////////////////////
var sedan = vehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function() { return "honk honk"; };
console.log(sedan.name + " make noise " + sedan.makeNoise());


/////////////////////////////////////////////////
var bus = vehicleConstructor("bus", 4, 90);
bus.pickUpPassengerCount = 0;
bus.pickUpPassengers = function(passengers) {
    this.pickUpPassengerCount += passengers;
};
bus.pickUpPassengers(5);
bus.pickUpPassengers(2);
console.log(bus.name + " pick up, so far, " + bus.pickUpPassengerCount);

