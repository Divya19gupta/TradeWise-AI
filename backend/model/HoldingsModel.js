const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");

// Model will be created with a plural name 'holdings' in MongoDB
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = {HoldingsModel};