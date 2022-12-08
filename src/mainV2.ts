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
  sponsors: any[];
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

class BikeShare {
  stations: StationType[] = [];
  sponsors: string[] = [];

  addStation(station: any) {
    this.stations.push(station);
  }

  addSponsor(sponsor: string) {
    this.sponsors.push(sponsor);
  }
}

class Station extends BikeShare {
  id: string;
  name: string;
  sponsors: any[] = [];
  capacity: number; // 3, 5, or 10
  bikes: BikeType[] = [];

  // Default capaity of 3 if not assigned.
  constructor(name: string, capacity = 3) {
    super();
    this.id = uuidv4();
    this.name = name;
    this.sponsors = [];
    this.capacity = capacity;
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

  getAvailableBikes() {
    let availableBikes = this.bikes.filter((bike: any) => {
      return bike.checkedOut === false;
    });
    availableBikes.map((bike: any) => {
      console.log(`${bike.name} is available at ${this.name}`);
    });
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

  getSponsors() {
    this.sponsors.map((sponsor: any) => {
      console.log(`Sponsors for ${this.name}: ${sponsor}`);
    });
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
let sponsorD = "Sponsor D";

// Central Share System - Where users can checkout and return bikes.
let central = new BikeShare();

// Add Stations to Bike Share
central.addStation(station1);
central.addStation(station2);
central.addStation(station3);
central.addStation(station4);

// Add Sponsors to Bike Share
central.addSponsor(sponsorA);
central.addSponsor(sponsorB);
central.addSponsor(sponsorC);
central.addSponsor(sponsorD);

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
