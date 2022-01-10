const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("config");
const forms = require("./routes/forms");
const cors = require("cors");

mongoose.connect(config.get("db"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check connection
db.once("open", () => "Connected to MongoDB");

// Check for errors
db.on("error", (err) => console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// add cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running..");
});

app.use("/api/form", forms);

app.listen(3000, () => {
  console.log(`server stated at http://localhost:3000/..`);
});
