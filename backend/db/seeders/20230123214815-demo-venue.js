"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Venues";
    return queryInterface.bulkInsert(options, [
      {
        groupId: 1,
        address: "123 Main St",
        city: "New York",
        state: "NY",
        lat: 40.73061,
        lng: -73.935242,
      },
      {
        groupId: 2,
        address: "456 Park Ave",
        city: "Chicago",
        state: "IL",
        lat: 41.881832,
        lng: -87.623177,
      },
      {
        groupId: 3,
        address: "789 Market St",
        city: "San Francisco",
        state: "CA",
        lat: 37.774929,
        lng: -122.419416,
      },
      {
        groupId: 4,
        address: "123 Main St",
        city: "New York",
        state: "NY",
        lat: 40.73061,
        lng: -73.935242,
      },
      {
        groupId: 5,
        address: "456 Park Ave",
        city: "Chicago",
        state: "IL",
        lat: 41.881832,
        lng: -87.623177,
      },
      {
        groupId: 6,
        address: "789 Market St",
        city: "San Francisco",
        state: "CA",
        lat: 37.774929,
        lng: -122.419416,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Venues";
    return queryInterface.bulkDelete(options, null, {});
  },
};
