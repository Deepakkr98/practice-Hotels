const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // to store the in req.body

app.get("/", function (req, res) {
  res.send("Welcome to hotel...");
});

// Import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
