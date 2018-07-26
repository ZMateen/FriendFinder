//npm packages for functionallity
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();
var PORT = process.env.PORT;

//Middleware for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//App routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});