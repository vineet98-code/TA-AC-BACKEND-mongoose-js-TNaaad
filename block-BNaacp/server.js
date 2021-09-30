var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

var Products = require('./models/products')

// connect to database
mongoose.connect(
    "mongodb://localhost/sample", 
    { useNewUrlparser: true, useUnifiedTopology: true },
     (err) => {
         console.log(err ? err : "Connected to database");
     }
)

// instantiate the app
var app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());


// route
app.get('/', (req, res) => {
    res.send('Welcome');
});


// insert the specific products into the database
app.post("/products", (req, res) => {
    // capture the data and inserting the data into database
    // save the data in database and send response
    Products.create(req.body, (err, product) => {
        // console.log(err, products);
        console.log(err);
        res.json(product)
    });
});

// app.get('/products', (req, res) => {
// equivalent to db.products.find()
//     products.find({}, (err, products) => {
//        console.log(err);
//        res.json({ products: products})
//     })
// })


// single products search
app.get('/products', (req, res) => {
    // equivalent to db.products.find()
    Products.findOne({"title" : "Google Pixel"}, (err, products) => {
        console.log(err);
        res.json({ products})
    })
})

// Searching by id
app.get('/products/:id', (req, res) => {
    // grab the id
    var id = req.params.id;    
    Products.findById(id, (err, product) => {
        console.log(err);
        res.json(product);
    });
})

// Put request is used to update, which already exist in data on serverside.
app.put('/products/:id', (req, res) => {
    // grab the id
    console.log(req.body);

    var id = req.params.id;
    Products.findByIdAndUpdate(id, req.body, (err, updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    });
})

    
// error handled middleware
app.use((req, res) => {
  res.send('Page not Found');
});  


app.listen(1000, () => {
    console.log(`server listening on port 1k`);
})