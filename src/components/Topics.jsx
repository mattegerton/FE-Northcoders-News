import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics } from "../actions/topicActions";
import PropTypes from "prop-types";
import "./css/Topics.css";

class Topics extends Component {
  render() {
    return (
      <div>
        <h3> Select a topic </h3>
        <div id="topicGrid">
          {this.props.topics.map(topic => {
            return (
              <Link
                to={`/topics/${topic.slug}`}
                key={topic.slug}
                className="topicLink"
              >
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
    this.props.fetchTopics();
  }
}

Topics.propTypes = {
  fetchTopics: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  topics: state.topics.items
});

export default connect(
  mapStateToProps,
  { fetchTopics }
)(Topics);
