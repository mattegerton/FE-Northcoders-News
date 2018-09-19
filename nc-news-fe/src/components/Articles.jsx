import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./css/Articles.css";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <h2> Articles </h2>
        {this.state.articles.map(article => {
          return (
            <table className="articleBlock">
              <col width="20%" />
              <col width="70%" />
              <tr>
                <th className="articleTitle"> {article.title} </th>
                <th className="articleBody"> {article.body}</th>

                <th>
                  <ion-icon name="reorder" />
                </th>
                <th>
                  <ion-icon name="thumbs-down" />
                </th>
                <th>
                  <ion-icon name="thumbs-up" />
                </th>
                <th>
                  <ion-icon name="chatboxes" />
                </th>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const params = this.props.match.params.topic;
    if (params) {
      axios
        .get(`https://nc-news-matt.herokuapp.com/api/topics/${params}/articles`)
        .then(data => {
          this.setState({
            articles: data.data.articles
          });
        });
    } else {
      axios
        .get("https://nc-news-matt.herokuapp.com/api/articles")
        .then(data => {
          this.setState({
            articles: data.data.articles
          });
        });
    }
  }
}
export default Articles;
