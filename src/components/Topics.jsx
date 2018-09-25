import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Topics.css";
import * as api from "../api";

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <h3> Select a topic </h3>
        <div id="topicGrid">
          {this.state.topics.map(topic => {
            return (
              <Link to={`/topics/${topic.slug}`} className="topicLink">
                <div key={topic._id} className="topicButton">
                  {topic.slug === "coding" ? (
                    <ion-icon name="code" />
                  ) : topic.slug === "cooking" ? (
                    <ion-icon name="pizza" />
                  ) : topic.slug === "football" ? (
                    <ion-icon name="football" />
                  ) : (
                    <ion-icon name="alert" />
                  )}
                  <br />
                  {topic.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getAllTopics();
  }

  getAllTopics() {
    api
      .getAllTopics()
      .then(response => {
        this.setState({
          topics: response.topics
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
Topics.propTypes = {};

export default Topics;
