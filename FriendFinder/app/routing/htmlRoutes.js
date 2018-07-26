var path = require("path");

//Route for the survey
module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Route for the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });
};


