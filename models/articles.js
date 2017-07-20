let mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    ArticleSchema = new Schema({
        title: {
            type: String,
            unique: true,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        saved: {
            type: Boolean,
            default: false,
            required: true
        }
    });
let Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
