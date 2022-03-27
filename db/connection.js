const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://yebin:TmNESjKZTiL5LraG@cluster0.t9swd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(mongoDB);

module.exports = mongoose.connection;