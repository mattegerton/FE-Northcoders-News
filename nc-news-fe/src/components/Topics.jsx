import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./css/Topics.css";

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <h2> Topics </h2>
        <div id="topicGrid">
          {this.state.topics.map(topic => {
            return (
              <div id="topicLink" key={topic._id}>
                <Link to={`/topics/${topic.slug}`}>
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
                </Link>
              </div>
            );
          })}
        </div>
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
