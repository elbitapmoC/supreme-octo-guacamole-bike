# supreme-octo-guacamole-bike

// ------------------------------------------------------------------------
// Part 1: Object/API Design
// A function should exist to see all bikes that are currently checked out
// ------------------------------------------------------------------------

Part 1: Object/API Design
In a bike share system, users are able to “check out” bikes from a central system, complete a ride, and then return the bike. We want to build a bike share system that supports creating and adding bikes. After a bike has been added to the system, we should be able to check out and return it. We should also be able to get a global view of the system to see all bikes that are currently checked out, and we should be able to see usage metrics for an individual bike (e.g. how many trips it has completed / how many times it has been checked out and returned).
You can do this in any programming language of your choice.
Please ensure the following test cases work for your code:

- should be able to add a bike to the bike share
- should be able to check out and return a bike
- should display usage metrics for each bike
- should display all bikes that are currently checked out
  You can use the following example to check:
- add ‘Bike 1’, ‘Bike 2’, and ‘Bike 7’ to the bike share
- check out and return ‘Bike 1’ three (3) times. Check out and return ‘Bike 2’ two (2) times. Check out but do not return ‘Bike 7’.
- get the usage metrics for each bike, which should print:
  - “Bike 1 has had 3 trips”
  - “Bike 2 has had 2 trips”
  - “Bike 7 has had 0 trips”
- get all bikes that are currently checked out, which should print:
  - “Bike 7”

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
