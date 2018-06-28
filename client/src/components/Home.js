import React, { Component } from "react";
import Saved from "./Saved";
import SavedArticles from "./SavedArticles";
import SearchForm from "./SearchForm";
import Results from "./Results";
import API from "../utils/API";
import Jumbotron from "./Jumbotron";
import SearchResults from "./SearchResults";

class Home extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  componentDidMount() {
    this.getSavedArticles()
  }

  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

  handleTopicInput = (event) => {
    this.setState({ topic: event.target.value });
  }

  handleStartYearInput = (event) => {
    this.setState({ startYear: event.target.value });
  }

  handleEndYearInput = (event) => {
    this.setState({ endYear: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
      .then((res) => {
        this.setState({ articles: res.data.response.docs });
      });
  }

  getSavedArticles = () => {
    API.getArticle()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }

  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
    API.saveArticle(newSave)
    .then(this.getSavedArticles());
  }

  handleDeleteButton = (id) => {
    API.deleteArticle(id)
      .then(this.getSavedArticles());
  }

  render() {
    return (

      <div>

        <Jumbotron appName={"New York Times React Search"} subtitle={"Search for and save articles of interest."}/>

        <div className="container">

          <SearchForm
            topicInput={this.handleTopicInput}
            startYearInput={this.handleStartYearInput}
            endYearInput={this.handleEndYearInput}
            formSubmit={this.handleFormSubmit}
          />

          <SearchResults
            renderArticles={this.renderArticles}
          />

          <SavedArticles
            renderSaved={this.renderSaved}
          />

        </div>

      </div>

    );
  }

}

export default Home;
