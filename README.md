# supreme-octo-guacamole-bike

## Part 1: Object/API Design

**Central Share System**

- AFTER Bike has been added to the system: ✅
  - Checkout Bike
  - Return Bike (This will complete a ride)
- See ALL Bikes that are checked out. ✅

**Bike**

- Create Bike ✅
- Add Bike -> (CENTRAL) ✅
- Each bike has metrics: ✅
  - Completed trips / (how many times it has been checked out and returned).

Example:

- Add ‘Bike 1’, ‘Bike 2’, and ‘Bike 7’ to the bike share ✅
- Check out and return ‘Bike 1’ three (3) times. ✅
- Check out and return ‘Bike 2’ two (2) times. ✅
- Check out but do not return ‘Bike 7’. ✅
- Get usage metrics for each bike, prints: ✅
  - “Bike 1 has had 3 trips”
  - “Bike 2 has had 2 trips”
  - “Bike 7 has had 0 trips”
- Get all bikes that are currently checked out, which should print: ✅
  - “Bike 7”

---

## Part 2: Stations and Sponsors

- Can check out / return bikes to multiple locations.
  - Each location can have a sponsor.
- Can add stations to bike share. (capacity-- 3, 5, or 10 bikes)
- Can check out / return a bike to/from a station rather than the global bike share.
- Can add/remove a sponsor(s) to/from a station
- Can see all bikes currently available at a station
- Can list all of a stations’s sponsors

Example:

- Add four (4) stations to Bike Share: ‘Station 1’, ‘Station 2’, ‘Station 3’, and ‘Station 4’ to the bike share
- Add four (4) sponsors to Bike Share: ‘Sponsor A’, ‘Sponsor B’, ‘Sponsor C’, and ‘Sponsor D’
- Check in ‘Bike 1’, & ‘Bike 2’ to ‘Station 1’
- Check in ‘Bike 7’ to ‘Station 2’
- Check out ‘Bike 2’ from ‘Station 1’
- Add ‘Sponsor A’ to ‘Station 1’, ‘Sponsor B’ to ‘Station 2’, ‘Sponsor C’ to ‘Station 3’, and ‘Sponsor A’ and ‘Sponsor C’ to ‘Station 4
- Print each station’s sponsors

// ------------------------------------------------------------------------
// Part 2: Stations and Sponsors
// Please check all test cases from Part 1 pass before moving on to Part 2
// A function should exist to display all Bikes at a particular station
// A function should exist to display all of a Station's Sponsors
// ------------------------------------------------------------------------

Part 2: Extending the design
In Part 2, you will expand the Bike Share system that you build in Part 1.
Given the success of our Bike Share system, we now want to give users the ability to check out or return bikes to multiple locations. And we’ve also decided to accept sponsors now to increase our revenue! We’d like to create stations with a capacity of 3, 5, or 10 bikes within the Bike Share to give users more locations to check out and return bikes, and we’ll let one or more sponsors advertise on the stations.
Please ensure the following test cases work for your code:

- should be able to add a station to the bike share
- should be able to check out or return a bike to/from a station rather than the global bike share
- should be able to add/remove a sponsor(s) to/from a station
- should be able to display all bikes currently available at a station
- should be able to list all of a stations’s sponsors
  You can use the following example to check:
- add four (4) stations to Bike Share: ‘Station 1’, ‘Station 2’, ‘Station 3’, and ‘Station 4’ to the bike share
- add four (4) sponsors to Bike Share: ‘Sponsor A’, ‘Sponsor B’, ‘Sponsor C’, and ‘Sponsor D’
- check in ‘Bike 1’, and ‘Bike 2’ to ‘Station 1’ and ‘Bike 7’ to ‘Station 2’
- check out ‘Bike 2’ from ‘Station 1’
- add ‘Sponsor A’ to ‘Station 1’, ‘Sponsor B’ to ‘Station 2’, ‘Sponsor C’ to ‘Station 3’, and ‘Sponsor A’ and ‘Sponsor C’ to ‘Station 4
- print each station’s sponsors
