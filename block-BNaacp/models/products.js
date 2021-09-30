var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productsSchema = new Schema({
    title : {type : String, required : true},
    category : [String],
    
    price : {type: Number, default : 0}
}, {timestamps : true});

var products = mongoose.model('Products', productsSchema);

module.exports = products;