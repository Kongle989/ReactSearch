let express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose"),
    app = express(),
    url = 'mongodb://localhost/nytreact';
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
mongoose.Promise = Promise;
app.use(express.static("public"));

mongoose.connect(url);
let db = mongoose.connection;
db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function () {
    console.log("Mongoose connection successful.");
});

app.listen(3000, function () {
    console.log("App running");
});