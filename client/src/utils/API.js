import axios from "axios";


var APIKEY = "769ae556259949f9bb72bf4556f8d25c";          

var API = {
  // Query NYT API
  searchNYT: function(topic, startYear, endYear) {
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    return axios.get(queryURL);
  },
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(dbArticle) {
    return axios.post("/api/articles", dbArticle);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
};

export default API;
