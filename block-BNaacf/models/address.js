var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village : { type: String },
    city : { type: String },
    state : { type: Number },
    pincode : [number],
    user : Schema.Types.ObjectId
})