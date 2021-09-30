var express = require('express');
var mongoose = require('mongoose');

// var Products = require('./models/products')

var User = require('./models/user')

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
app.use(express.json());


// route
app.get('/', (req, res) => {
    res.send('Welcome');
});

                            //   user.js

// insert the specific user into the database
app.post("/user", (req, res) => {
    // capture the data and inserting the data into database
    // save the data in database and send response
    User.create(req.body, (err, user) => {
        // console.log(err, products);
        console.log(err);
        res.json(user)
    });
});

app.get('/user', (req, res) => {
// equivalent to db.products.find()
    User.find({}, (err, user) => {
       console.log(err);
       res.json({ users: user})
    })
})

// Searching by id
app.get('/user/:id', (req, res) => {
    // grab the id
    var id = req.params.id;    
    User.findById(id, (err, user) => {
        console.log(err);
        res.json(user);
    });
})

// Put request is used to update, which already exist in data on serverside.
app.put('/user/:id', (req, res) => {
    // grab the id
    console.log(req.body);
    
    var id = req.params.id; 
    // new return the new documents
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    });
})

app.delete('/user/:id', (req, res) => {
    // grab the id
    var id = req.params.id;
    User.findByIdAndDelete(id, req.body, (err, deletedUser) => {
        console.log(err);
        res.send(`${deletedUser} was deleted`);
    });
});

// by findoneAndDelete method
app.delete('/user/:id', (req, res) => {
    User.findOneAndDelete({sports : "cricket"},  (err, deletedUser) => {
        res.send(`${deletedUser.name} was deleted`);
    });
})



                                // products.js 
                                  
                                 
// // insert the specific products into the database
app.post("/products", (req, res) => {
    // capture the data and inserting the data into database
    // save the data in database and send response
    Products.create(req.body, (err, product) => {
        // console.log(err, products);
        console.log(err);
        res.json(product)
    });
});

app.get('/products', (req, res) => {
// equivalent to db.products.find()
    Products.find({}, (err, products) => {
       console.log(err);
       res.json({ products: products})
    })
})


// // single products search
app.get('/products', (req, res) => {
    // equivalent to db.products.find()
    Products.findOne({"title" : "Google Pixel"}, (err, products) => {
        console.log(err);
        res.json({ products})
    })
})

// // Searching by id
app.get('/products/:id', (req, res) => {
    // grab the id
    var id = req.params.id;    
    Products.findById(id, (err, product) => {
        console.log(err);
        res.json(product);
    });
})

// // findByIdAndUpdate - for id only and always take direct id 
// // findOneAndUpdate - some other field such as title, description and always take query in the form of an object
// // Put request is used to update, which already exist in data on serverside.
app.put('/products/:id', (req, res) => {
    // grab the id
    console.log(req.body);
    var id = req.params.id; 
    // new return the new documents
    Products.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    });
})

// // delete request is udes to delete data
// // findOneAndDelete - some other field such as title, description and always take query in the form of an object
app.delete('/products/:id', (req, res) => {
    // grab the id
    var id = req.params.id;
    Products.findByIdAndDelete(id, req.body, (err, deletedProduct) => {
        res.send(`${deletedProduct.title} was deleted`);
    });
});

// // by findoneAndDelete method
app.delete('/products/:id', (req, res) => {
    Products.findOneAndDelete({category : "phone"},  (err, deletedProduct) => {
        res.send(`${deletedProduct.title} was deleted`);
    });
})

    
// error handled middleware
app.use((req, res) => {
  res.send('Page not Found');
});  


app.listen(4000, () => {
    console.log(`server listening on port 4k`);
})