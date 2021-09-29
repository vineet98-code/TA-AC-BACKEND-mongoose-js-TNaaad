var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village :  {type : String, required : true },
    city :  {type : String, required :  true},
    state :  {type : String, required : true },

    pin :  {type : String, minlength: 5},
    user : Schema.Types.ObjectId

}, {timestamps: true})

module.exports = mongoose.model('Address', addressSchema);