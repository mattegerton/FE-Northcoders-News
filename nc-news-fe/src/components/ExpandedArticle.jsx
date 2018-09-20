import React, { Component } from "react";
import axios from "axios";

class ExpandedArticle extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    return (
      <div>
        <table>
          <col width="60%" />
          <tbody>
            <tr>
              <th>
                <h2>{this.state.article.title}</h2>
              </th>
            </tr>
            <tr>
              <h6> {this.state.article.created_by}</h6>
            </tr>
            <tr>
              <h3> {this.state.article.body} </h3>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios
      .get(`https://nc-news-matt.herokuapp.com/api/articles/${articleID}`)
      .then(data => {
        this.setState({
          article: data.data.article
        });
      });
  }
}

export default ExpandedArticle;
