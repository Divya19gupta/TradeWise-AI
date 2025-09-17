const {Schema} = require('mongoose');

// Generic definition of Holdings
const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});
module.exports = { HoldingsSchema };