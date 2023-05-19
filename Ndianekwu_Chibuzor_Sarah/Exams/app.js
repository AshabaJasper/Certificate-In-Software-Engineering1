const express = require("express");
const path = require("path");
const Port = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const session = require('express-session');
const flash = require('connect-flash')

app.use(flash());
app.use(express.static("public"));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


const config = require("./config/database");
const index = require("./routes/indexRoute")



mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;


db.on("error", (err) => {
  console.log(err);
});


db.once("open", () => {
  console.log("connected to db");
});

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(index)









app.listen(process.env.port || Port, () => {
    console.log(`listen to port ${Port}`);
  });
  