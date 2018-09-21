import React, { Component } from "react";
import axios from "axios";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: ""
  };
  render() {
    console.log(this.state.topic);
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
    axios
      .post(
        `https://nc-news-matt.herokuapp.com/api/topics/${
          this.state.topic
        }/articles`,
        {
          title: this.state.title,
          body: this.state.body,
          created_by: this.props.user
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default PostArticle;
