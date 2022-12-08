# supreme-octo-guacamole-bike

## Part 1: Object/API Design

**Central Share System**

- AFTER Bike has been added to the system:
  - Checkout Bike
  - Return Bike (This will complete a ride)
- See ALL Bikes that are checked out.

**Bike**

- Create Bike
- Add Bike -> (CENTRAL)
- Each bike has metrics:
  - Completed trips / (how many times it has been checked out and returned).

Example:

- Add ‘Bike 1’, ‘Bike 2’, and ‘Bike 7’ to the bike share
- Check out and return ‘Bike 1’ three (3) times.
- Check out and return ‘Bike 2’ two (2) times.
- Check out but do not return ‘Bike 7’.
- Get usage metrics for each bike, prints:
  - “Bike 1 has had 3 trips”
  - “Bike 2 has had 2 trips”
  - “Bike 7 has had 0 trips”
- Get all bikes that are currently checked out, which should print:
  - “Bike 7”

---

## Part 2: Stations and Sponsors

<!--
- Stations accept sponsors
    - Each station can have one or more sponsors.
- Stations have a capacity of 3, 5, or 10 bikes within the Bike Share.
- Can add a station to the bike share
- Can check out or return a bike to/from a station.
- Can add/remove a sponsor(s) to/from a station.
- Can display all bikes currently available at a station.
- Can list all of a stations’ sponsors
-->

Example:

- Add to Bike Share:

  - ‘Station 1’, ‘Station 2’, ‘Station 3’, and ‘Station 4’
  - ‘Sponsor A’, ‘Sponsor B’, ‘Sponsor C’, and ‘Sponsor D’

- Check in ‘Bike 1’, & ‘Bike 2’ to ‘Station 1’
- Check in ‘Bike 7’ to ‘Station 2’
- Check out ‘Bike 2’ from ‘Station 1’
- Add ‘Sponsor A’ to ‘Station 1’
- Add ‘Sponsor B’ to ‘Station 2’
- Add ‘Sponsor C’ to ‘Station 3’
- Add‘Sponsor A’ & ‘Sponsor C’ to ‘Station 4
- Print each station’s sponsors
