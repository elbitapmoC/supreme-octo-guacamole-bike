import "./style.css";
import { v4 as uuidv4 } from "uuid";

interface BikeType {
  id: string;
  name: string;
  completedTrips: number;
  checkedOut: boolean;
}
class Bike {
  id: string;
  name: string;
  completedTrips: number;
  checkedOut: boolean;
  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.completedTrips = 0;
    this.checkedOut = false;
  }
}

class BikeShareCentralSystem {
  bikes: BikeType[] = [];

  addBike(bike: BikeType) {
    this.bikes.push(bike);
  }

  checkOutBike(bike: BikeType) {
    bike.checkedOut = true;
  }

  returnBike(bike: BikeType) {
    bike.checkedOut = false;
    bike.completedTrips += 1;
  }

  getBikeMetrics() {
    this.bikes.map((bike: BikeType) => {
      console.log(`${bike.name} has had ${bike.completedTrips} trips`);
    });
  }

  getCheckedOutBikes() {
    const bikesCheckedOut = this.bikes.filter((bike: BikeType) => {
      return bike.checkedOut === true;
    });

    bikesCheckedOut.forEach((bikeCheckedOut) => {
      console.log(bikeCheckedOut.name);
    });
  }
}

// Central Share System - Where users can checkout and return bikes.
let central = new BikeShareCentralSystem();

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
