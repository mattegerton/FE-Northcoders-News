import React, { Component } from "react";
const axios = require("axios");

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <h2> Topics </h2>
        {this.state.topics.map(topic => {
          return (
            <div key={topic._id}>
              {topic.slug === "coding" ? (
                <ion-icon name="code" />
              ) : topic.slug === "cooking" ? (
                <ion-icon name="pizza" />
              ) : topic.slug === "football" ? (
                <ion-icon name="football" />
              ) : (
                <ion-icon name="alert" />
              )}
              <p> {topic.title} </p>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://nc-news-matt.herokuapp.com/api/topics").then(data => {
      this.setState({
        topics: data.data.topics
      });
    });
  }
}

export default Topics;
