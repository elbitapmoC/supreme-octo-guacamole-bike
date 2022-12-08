import "./style.css";
import { v4 as uuidv4 } from "uuid";

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
  capacity: number; // 3, 5, or 10
  bikes: Bike[];
  sponsors: string[];

  // Default capaity of 3 if not assigned.
  constructor(name: string, capacity = 3) {
    this.id = uuidv4();
    this.name = name;
    this.sponsors = [];
    this.bikes = [];
    this.capacity = capacity;
  }

  // Adds bike
  addBike(bike: Bike) {
    this.bikes.push(bike);
  }

  checkOutBike(bike: Bike) {
    bike.checkedOut = true;
  }

  returnBike(bike: Bike) {
    bike.checkedOut = false;
    bike.completedTrips += 1;
  }

  getAvailableBikes() {
    let availableBikes = this.bikes.filter((bike: any) => {
      return bike.checkedOut === false;
    });
    availableBikes.map((bike: any) => {
      console.log(`${bike.name} is available at ${this.name}`);
    });
  }

  getBikeMetrics() {
    this.bikes.map((bike: Bike) => {
      console.log(`${bike.name} has had ${bike.completedTrips} trips`);
    });
  }

  getCheckedOutBikes() {
    const bikesCheckedOut = this.bikes.filter((bike: Bike) => {
      return bike.checkedOut === true;
    });

    bikesCheckedOut.forEach((bikeCheckedOut) => {
      console.log(bikeCheckedOut.name);
    });
  }

  getSponsors() {
    this.sponsors.map((sponsor: any) => {
      console.log(`Sponsors for ${this.name}: ${sponsor}`);
    });
  }

  addSponsor(sponsor: string): void {
    this.sponsors.push(sponsor);
  }

  removeSponsor(sponsor: string): void {
    for (let i = 0; i < this.sponsors.length; i++) {
      if (this.sponsors[i] === sponsor) {
        this.sponsors.splice(i, 1);
        // break keep as optional.
      }
    }
  }
}

class BikeShare {
  stations: Station[] = [];

  addStation(station: Station) {
    this.stations.push(station);
  }
  checkedoutcheckin(bike: Bike, station1: string, station2: string) {
    let index1: number = -1;
    let index2: number = -1;
    for (var i = 0; i < this.stations.length; i++) {
      if (this.stations[i].name === station1) {
        index1 = i;
      }
      if (this.stations[i].name === station2) {
        index2 = i;
      }
    }
    if (index1 >= 0 && index2 >= 0) {
      this.stations[index1].checkOutBike(bike);
      this.stations[index2].returnBike(bike);
    }
  }
}

// Create Stations
let station1 = new Station("Station 1");
let station2 = new Station("Station 2");
let station3 = new Station("Station 3");
let station4 = new Station("Station 4");

// Create Bikes
let bike1 = new Bike("Bike 1");
let bike2 = new Bike("Bike 2");
let bike7 = new Bike("Bike 7");

// Create Sponsors
let sponsorA = "Sponsor A";
let sponsorB = "Sponsor B";
let sponsorC = "Sponsor C";
// let sponsorD = "Sponsor D";

// Central Share System - Where users can checkout and return bikes.
let central = new BikeShare();

// Add Stations to Bike Share
central.addStation(station1);
central.addStation(station2);
central.addStation(station3);
central.addStation(station4);

// Check in ‘Bike 1’, & ‘Bike 2’ to ‘Station 1’
station1.addBike(bike1);
station1.addBike(bike2);

// Check in ‘Bike 7’ to ‘Station 2’
station2.addBike(bike7);

// Check out ‘Bike 2’ from ‘Station 1’
station1.checkOutBike(bike2);

// Add ‘Sponsor A’ to ‘Station 1’
station1.addSponsor(sponsorA);
// Add ‘Sponsor B’ to ‘Station 2’
station2.addSponsor(sponsorB);
// Add ‘Sponsor C’ to ‘Station 3’
station3.addSponsor(sponsorC);
// Add‘Sponsor A’ & ‘Sponsor C’ to ‘Station 4
station4.addSponsor(sponsorA);
station4.addSponsor(sponsorC);

// Get sponsors per station
station1.getSponsors();
station2.getSponsors();
station3.getSponsors();
station4.getSponsors();

// Get available Bikes per station
station1.getAvailableBikes();
station2.getAvailableBikes();
station3.getAvailableBikes();
station4.getAvailableBikes();
