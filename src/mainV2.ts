import "./style.css";
import { v4 as uuidv4 } from "uuid";

interface BikeType {
  id: string;
  name: string;
  completedTrips: number;
  checkedOut: boolean;
}

interface StationType {
  id: string;
  name: string;
  sponsor: any[];
  capacity: number;
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

class Station {
  id: string;
  name: string;
  sponsor: any[] = [];
  capacity: number; // 3, 5, or 10

  // Default capaity of 3 if not assigned.
  constructor(name: string, capacity = 3) {
    this.id = uuidv4();
    this.name = name;
    this.sponsor = [];
    this.capacity = capacity;
  }
}

class BikeShare {
  bikes: BikeType[] = [];
  stations: StationType[] = [];
  sponsors: string[] = [];

  addStation(station: any) {
    this.stations.push(station);
  }

  addSponsor(sponsor: string) {
    this.sponsors.push(sponsor);
  }

  // Adds bike
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
let central = new BikeShare();

let station1 = new Station("Station 1");
let station2 = new Station("Station 2");
let station3 = new Station("Station 3");
let station4 = new Station("Station 4");

central.addStation(station1);
central.addStation(station2);
central.addStation(station3);
central.addStation(station4);
