import "./style.css";
import typescriptLogo from "./typescript.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

// When a bike is added, it's created within the bike share system.
class Bikes {
  name: string;
  checkedOut: boolean;
  trips: number;

  constructor(name: string) {
    this.name = name;
    this.checkedOut = false;
    this.trips = 0;
  }
}

class BikeShareCentralSystem {
  bikes: Bikes[] = [];

  constructor(bikes: Bikes) {
    this.bikes.push(bikes);
  }

  getAllCheckedout = () => {
    // Get bikes that are currently checked out
  };

  getMetrics = () => {
    // Show completed trips.
  };

  addBike = (bikes: Bikes) => {
    this.bikes.push(bikes);
  };

  checkoutBike = () => {
    // this.checkedOut = true;
    // console.log(`${this.name} is checked out`);
  };

  returnBike = () => {
    // if (this.checkedOut) {
    //   this.checkedOut = false;
    //   console.log(`${this.name} has been returned`);
    //   this.trips += 1;
    // }
  };
}

let bike1 = new Bikes("Bike 1");
let bike2 = new Bikes("Bike 2");
let bike7 = new Bikes("Bike 7");

let central = new BikeShareCentralSystem(bike1);
central.addBike(bike2);
central.addBike(bike7);

console.log(central);

// bike1.checkoutBike();
// bike1.returnBike();
// bike1.checkoutBike();
// bike1.returnBike();
// bike1.checkoutBike();
// bike1.returnBike();

// bike2.checkoutBike();
// bike2.returnBike();
// bike2.checkoutBike();
// bike2.returnBike();

// bike7.checkoutBike();

// Example:

// ✅ - Add ‘Bike 1’, ‘Bike 2’, and ‘Bike 7’ to the bike share
// ✅ - Check out and return ‘Bike 1’ three
// ✅ - Check out and return ‘Bike 2’ two (2) times.
// ✅ - Check out but do not return ‘Bike 7’.

// - Get usage metrics for each bike, prints:
//   - “Bike 1 has had 3 trips”
//   - “Bike 2 has had 2 trips”
//   - “Bike 7 has had 0 trips”

// - Get all bikes that are currently checked out, which should print:
//   - “Bike 7”
