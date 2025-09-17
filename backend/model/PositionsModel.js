const {model} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

// Create a Mongoose model for Positions using the defined schema
const PositionsModel = model("position", PositionsSchema);

module.exports = {PositionsModel};