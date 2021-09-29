var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

// connect to database
mongoose.connect(
    "mongodb://localhost:27017/india", 
    { useNewUrlparser: true, useUnifiedTopology: true },
     (err) => {
         console.log(err ? err : "Connected to database");
     }
)

// instantiate the app
var app = express();

// middleware
app.use(logger('dev'));

// route
app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/users', (req, res) => {
    res.send('Users Page');
});

// error handled middleware
app.use((req, res) => {
    res.send('Page not Found');
});  

app.listen(2000, () => {
    console.log(`server listening on port 2k`);
})