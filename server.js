var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var express = require('express');



// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/ToDoList");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//Initialize Express
var app = express();

//Use body parser with app
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.set('port', (process.env.PORT || 3000));
// Make public a static dir
app.use(express.static("public"));
app.use(express.static(__dirname + "/app"));



require('./app/api/routes.js')(app);

// Listen on port 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});











