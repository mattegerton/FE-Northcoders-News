import React, { Component } from "react";
import * as api from "../api";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    posted: false
  };
  render() {
    return (
      <form>
        <label> Title: </label>
        <input onChange={this.handleArticleTitle} />
        <label> Body: </label>
        <textarea onChange={this.handleArticleBody} />
        <select id="selectTopic" onChange={this.handleArticleTopic}>
          <option value="cooking">Cooking</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
        </select>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
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
