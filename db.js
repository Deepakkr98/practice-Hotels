const mongoose = require("mongoose");
require("dotenv").config();

// Define the MongoDB connection URL
// const mongoURL = "mongodb://127.0.0.1:27017/hotels"; // Replace 'hotels' with your database name
const mongoURL = process.env.MONGODB_URL;

// set up MongoDB connection
mongoose.connect(mongoURL);

//Get the default connection
// Mongoose maintains a default connections object representing the MongoDB connection.

const db = mongoose.connection;

// Define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection Error");
});

db.on("disconnected", () => {
  console.log("MondoDB disconnected");
});

// Export the database connection.

module.exports = db;
