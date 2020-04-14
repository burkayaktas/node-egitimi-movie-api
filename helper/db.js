const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://burkaiaktas:Burkay12.@ds245018.mlab.com:45018/heroku_gblr3mxt");
    mongoose.connection.on("open", () => {
    console.log("MongoDb: Connected");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Mongodb: Error", err);
    });

    mongoose.Promise = global.Promise;

};