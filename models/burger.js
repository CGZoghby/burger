var orm = require("./config/orm.js");

// Find all the borgers
orm.selectAll("animal_name", "pets", "price");

// Create a borger
orm.insertOne("pets", "animal_name", "Rachel");

// Update a borger
orm.updateOne("buyer_name", "buyer_id", "buyers", "pets");

module.exports = orm;