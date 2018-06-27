const Article = require("../models/Article");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    Article.find({})
      .then(function (dbArticle) {
        res.json(dbArticle);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  insert: function(req, res) {
    Article.create(req.body)
    .then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(err) {
      res.json(err);
    });
  },
  delete: function(req, res) {
    Article.remove({ _id: req.params.id })
    .then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
