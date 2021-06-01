// require the library
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true, });

// acquire the database
const db = mongoose.connection;

// error in connecting the show error in console
db.on("error", console.error.bind("Error connecting the mongodb database"));

// on success log the console
db.once("open", () => {
    console.log("Successfully connnected to mongodb database");
});