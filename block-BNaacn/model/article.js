var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title :  String,
    description :  String,
    tags : [String],
    createAt : { type : Date, default: new Date()},
    likes : { type : Number, default: 0}

}, {timestamps: true})

module.exports = mongoose.model('User', articleSchema);