var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name :  {type : String, required : true },
    password :  {type : String, minlength: 5, maxlength: 15 },
    createAt : { type : Date, default: new Date()}

}, {timestamps: true})