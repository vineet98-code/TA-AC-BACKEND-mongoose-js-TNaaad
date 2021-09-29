var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    age : Number,
    isAdmin : Boolean,
    createAt : Date
}, {timestamps: true})

var userSchema = new Schema({
    name : { type: String , lowercase: true },
    email : { type: String , lowercase: true },
    age : { type: Number, value: 0}
})
