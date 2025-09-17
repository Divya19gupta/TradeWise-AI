const {model} = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

// Create a Mongoose model for Orders using the defined schema
const OrdersModel = model("order", OrdersSchema);

module.exports = {OrdersModel};