const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://yebin:TmNESjKZTiL5LraG@cluster0.t9swd.mongodb.net/project?retryWrites=true&w=majority`;

mongoose.connect(mongoDB);

module.exports = mongoose.connection;