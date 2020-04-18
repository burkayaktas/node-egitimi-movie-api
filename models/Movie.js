const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    director_id: Schema.Types.ObjectId,

    title: {
        type: String,
        required: [true, "`{PATH}` alanı zorunludur."],
        maxlength: 15,
        minlenght: 1,

    },
    category:{
        type: String,
        maxlenght: 30,
        minlenght: 1,
    },
    country: String,
    year: Number,
    imdb_score: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("movie",MovieSchema);