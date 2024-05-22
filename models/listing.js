const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name:String,
    img:String,
    summary:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;