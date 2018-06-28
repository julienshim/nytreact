const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");

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

var articlesController = require("./controllers/articles-controller");

// Define API routes here
app.get("/api/articles", articlesController.findAll);
app.post("/api/articles", articlesController.insert);
app.delete("/api/articles/:id", articlesController.delete);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
