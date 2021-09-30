var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name :  {type : String, required : true },
    email :  {type : String, required : true },
    sports :  [String]
     
    // password :  {type : String, minlength: 5},
    // createAt : { type : Date, default: new Date()},
    // favourites : [String]

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema); 