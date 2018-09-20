import React, { Component } from "react";
import axios from "axios";
import "./css/ExpandedArticle.css";

class ExpandedArticle extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    console.log(this.state.comments);
    return (
      <div>
        <table className="articleTable">
          <tbody>
            <tr>
              <td id="articleTitle">{this.state.article.title}</td>
            </tr>
            <tr>
              <td id="articleBody">{this.state.article.body}</td>
            </tr>
            <tr>
              <td id="articleCreator">
                Article posted by {this.state.article.created_by}
              </td>
            </tr>
          </tbody>
        </table>
        Comments
        {this.state.comments.map(comment => {
          return (
            <div>
              <table className="commentTable">
                <tbody>
                  <tr>
                    <th id="commentVoteCount">{comment.votes}</th>
                    <th id="commentBody">
                      {comment.body}
                      <p id="commentCreator">{`Posted by ${
                        comment.belongs_to
                      }`}</p>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
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
    axios
      .get(
        `https://nc-news-matt.herokuapp.com/api/articles/${articleID}/comments`
      )
      .then(data => {
        this.setState({
          comments: data.data.comments
        });
      });
  }
}

export default ExpandedArticle;
