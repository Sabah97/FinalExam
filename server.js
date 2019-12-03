const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//Connect to dbms
mongoose.connect(
  "mongodb+srv://Sabah97:sabah@97@cluster0-ozffx.mongodb.net/formDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);
//Get Models
require("./models/form-model");

//Get Controllers
// const profController = require('./controllers/professor-controller');

//Define Path
const viewsPath = path.join(__dirname, "./views");

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

//fire controller
// app.use(profController);

// set up views engine
app.set("view engine", "hbs");

// set views path
app.set("views", viewsPath);

// //static files
app.use(express.static("./utils"));

// app.use("/home", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

//general routes

app.get("/home", (req, res) => {
  res.render("index");
});
app.post("/home", (req, res) => {
  res.render("index");
});

/*==============================================================================================================*/

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server up at port", port);
});
