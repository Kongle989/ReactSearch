let express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose"),
    app = express(),
    url = 'mongodb://localhost/nytreact',
    articles = require("./models/articles.js");
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose.Promise = Promise;
app.use(express.static("public"));

mongoose.connect(url);
let db = mongoose.connection;
db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", () => {
    console.log("Mongoose connection successful.");
});

app.post('/article', (req, res) => {
    req.body.forEach(article => {
        articles
            .findOneAndUpdate({title: article.title},
                {
                    title: article.title,
                    date: article.date,
                    url: article.url
                },
                {upsert: true})
    });
});

app.get('/getarticles', (req, res) => {
    articles.find().then(articles => {
        res.send(articles);
    });
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("App running");
});