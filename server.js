const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/nytreact');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var articlesController = require("./controllers/articles-controller");

// Get saved articles
app.get("/api/articles", articlesController.findAll);
// Save articles
app.post("/api/articles", articlesController.insert);
// delete saved articles
app.delete("/api/articles/:id", articlesController.delete);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
