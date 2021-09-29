var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name :  {type : String, required : true },
    age :  {type : Number, default : 0 },
    email :  {type : String, required : true },

    password :  {type : String, minlength: 5},
    createAt : { type : Date, default: new Date()},
    favourites : [String]

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);