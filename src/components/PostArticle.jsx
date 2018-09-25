import React, { Component } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import "./css/PostArticle.css";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    posted: false
  };
  render() {
    return this.state.posted ? (
      <div>
        <h3>Your article has been posted! </h3>
        <Link to="/articles">
          <button id="articlePostedButton">
            Take me back to the article page!
          </button>
        </Link>
      </div>
    ) : (
      <div>
        <h3> Post your article! </h3>
        <h6> Just enter a title, choose a topic and post away! </h6>

        <form>
          <div className="articleForm">
            <div className="articleFormRow">
              <label> Title: </label>
              <input onChange={this.handleArticleTitle} />
            </div>

            <div className="articleFormRow">
              <label> Topic: </label>
              <select onChange={this.handleArticleTopic}>
                <option value="cooking">Cooking</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
              </select>
            </div>

            <div className="articleFormRow">
              <label> Body: </label>
              <textarea clos="50" rows="10" onChange={this.handleArticleBody} />
            </div>

            <div className="articleFormRow">
              <label> Post: </label>
              <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleArticleTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleArticleBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleArticleTopic = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const article = {
      title: this.state.title,
      body: this.state.body,
      created_by: this.props.user
    };
    api
      .postArticleToTopic(this.state.topic, article)
      .then(response => {
        this.setState({
          posted: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default PostArticle;
