import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./css/Articles.css";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div>
        <h2> Articles </h2>
        {this.state.articles.map(article => {
          return (
            <table className="articleBlock">
              <col width="20%" />
              <col width="70%" />
              <tr>
                <th> {article.title} </th>
                <th> {article.body}</th>

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
    axios.get("https://nc-news-matt.herokuapp.com/api/articles").then(data => {
      this.setState({
        articles: data.data.articles
      });
    });
  }
}

export default Articles;
