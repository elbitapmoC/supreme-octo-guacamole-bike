# supreme-octo-guacamole-bike

## Part 1: Object/API Design

Users abilities:

- able to “check out” bikes from a central system.
- Can checkout a bike.
- Can return a bike.

  - Returning, completes the ride.

  - Can create and add bikes.
  - After a bike has been added to the system.
    - Bike can be checked out and returned.
  - Can see all bikes that are currently checked out.
  - Can see usage metrics for each bike
    - Completed trips / (how many times it has been checked out and returned).

Example:

- Add ‘Bike 1’, ‘Bike 2’, and ‘Bike 7’ to the bike share
- Check out and return ‘Bike 1’ three
- Check out and return ‘Bike 2’ two (2) times.
- Check out but do not return ‘Bike 7’.
- Get usage metrics for each bike, prints:
  - “Bike 1 has had 3 trips”
  - “Bike 2 has had 2 trips”
  - “Bike 7 has had 0 trips”
- Get all bikes that are currently checked out, which should print:
  - “Bike 7”

---

// ------------------------------------------------------------------------
// A function should exist to display all Bikes at a particular station
// A function should exist to display all of a Station's Sponsors
// ------------------------------------------------------------------------

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
