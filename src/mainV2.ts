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
class Station {
  name: string;
  capacity: number; // 3, 5, or 10
  bikes: Bike[];
  sponsors: string[];

  // Default capaity of 3 if not assigned.
  constructor(name: string, capacity = 3) {
    this.name = name;
    this.sponsors = [];
    this.bikes = [];
    this.capacity = capacity;
  }

  // Adds bike
  addBike(bike: Bike): void {
    this.bikes.push(bike);
  }

  checkOutBike(bike: Bike): void {
    bike.checkedOut = true;
  }

  returnBike(bike: Bike): void {
    if (bike.checkedOut) {
      bike.checkedOut = false;
      bike.completedTrips += 1;
    }
  }

  getAvailableBikes() {
    let availableBikes = this.bikes.filter((bike: Bike) => {
      return bike.checkedOut === false;
    });

    return availableBikes.forEach((bike: Bike) => {
      console.log(`${bike.name} is available at ${this.name}`);
      return `${bike.name} is available at ${this.name}`;
    });
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

  getSponsors() {
    return this.sponsors.forEach((sponsor: string) => {
      console.log(`Sponsors for ${this.name}: ${sponsor}`);
      return `Sponsors for ${this.name}: ${sponsor}`;
    });
  }

  addSponsor(sponsor: string): void {
    this.sponsors.push(sponsor);
  }

  removeSponsor(sponsor: string): void {
    for (let i = 0; i < this.sponsors.length; i++) {
      if (this.sponsors[i] === sponsor) {
        this.sponsors.splice(i, 1);
        break;
      }
    }
    console.log(this.sponsors);
  }
}

class BikeShare {
  stations: Station[] = [];

  addStation(station: Station) {
    this.stations.push(station);
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

// Central Share System - Stations will be added here.
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

// Extras
station4.addSponsor(sponsorD);
station4.removeSponsor(sponsorD);

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
