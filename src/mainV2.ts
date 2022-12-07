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

class BikeShare {
  stations: any[] = [];
  sponsors: any[] = [];

  constructor(name: string) {
    this.stations.push(name);
  }

  addStation(station: any) {
    this.stations.push(station);
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

class Station extends BikeShare {
  bikes: BikeType[] = [];
  sponsors: any[] = [];
  capacity: number;
  name: string;

  addBike(bike: BikeType) {
    this.bikes.push(bike);
  }

  constructor(name: string) {
    super();
    this.name = name;
  }

  checkOutBike(bike: BikeType) {
    bike.checkedOut = true;
  }

  returnBike(bike: BikeType) {
    bike.checkedOut = false;
    bike.completedTrips += 1;
  }

  // Can add sponsors to each station.
  addSponsor(sponsor: any) {
    this.sponsors.push(sponsor);
  }

  getSponsors() {}

  getAvailableBikes() {
    // Lists all bikes currently in the station (not checked out)
  }

  setCapacity(capacity: number) {
    this.capacity = capacity;
  }

  removeSponsor(sponsor: any) {}
}

// Central Share System - Update: Remove ability to checkout and return bikes from here.
let central = new BikeShare();

// Can checkout and return from different stations
let station1 = new BikeShare("Station 1");
let station2 = new BikeShare("Station 2");
let station3 = new BikeShare("Station 3");
let station4 = new BikeShare("Station 4");

let bike1 = new Bike("Bike 1");

central.addBike(bike1);
