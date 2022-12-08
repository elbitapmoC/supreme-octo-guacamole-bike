import "./style.css";
class Bike {
  name: string;
  completedTrips: number;
  checkedOut: boolean;
  constructor(name: string) {
    this.name = name;
    this.completedTrips = 0;
    this.checkedOut = false;
  }
}

class BikeShare {
  bikes: Bike[] = [];

  // Adds bike
  addBike(bike: Bike) {
    this.bikes.push(bike);
  }

  checkOutBike(bike: Bike) {
    bike.checkedOut = true;
  }

  returnBike(bike: Bike) {
    if (bike.checkedOut) {
      bike.checkedOut = false;
      bike.completedTrips += 1;
    }
  }

  getBikeMetrics() {
    return this.bikes.forEach((bike: Bike) => {
      console.log(`${bike.name} has had ${bike.completedTrips} trips`);
      return `${bike.name} has had ${bike.completedTrips} trips`;
    });
  }

  getCheckedOutBikes() {
    const bikesCheckedOut = this.bikes.filter((bike: Bike) => {
      return bike.checkedOut === true;
    });

    return bikesCheckedOut.forEach((bikeCheckedOut) => {
      console.log(bikeCheckedOut.name);
      return bikeCheckedOut.name;
    });
  }
}

// Central Share System - Where users can checkout and return bikes.
let central = new BikeShare();

// Create Bikes
let bike1 = new Bike("Bike 1");
let bike2 = new Bike("Bike 2");
let bike7 = new Bike("Bike 7");

// Add Bikes to Central Bike Share System
central.addBike(bike1);
central.addBike(bike2);
central.addBike(bike7);

// Check out and return ‘Bike 1’ three times.
central.checkOutBike(bike1);
central.returnBike(bike1);
central.checkOutBike(bike1);
central.returnBike(bike1);
central.checkOutBike(bike1);
central.returnBike(bike1);

// Check out and return ‘Bike 2’ two times.
central.checkOutBike(bike2);
central.returnBike(bike2);
central.checkOutBike(bike2);
central.returnBike(bike2);

// Check out and do NOT return ‘Bike 7’ two times.
central.checkOutBike(bike7);

// // Get usage metrics for each bike
central.getBikeMetrics();

// // Get all bikes that are currently checked out
central.getCheckedOutBikes();
