import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/articleActions";
import "./css/ExpandedArticle.css";
import {
  renderExtendedArticle,
  articleVote
} from "../actions/extendedArticleActions";
import Comments from "./Comments";

class ExpandedArticle extends Component {
  render() {
    return (
      <div>
        <table className="articleTable">
          <tbody>
            <tr>
              <td id="articleTitle">{this.props.extArticle.title}</td>
            </tr>
            <tr id="tableImage">
              <img
                src="https://i.ytimg.com/vi/c-3g5qNkcmU/maxresdefault.jpg"
                alt="placeholder"
                className="articleImage"
              />
            </tr>
            <tr>
              <td id="articleBody">{this.props.extArticle.body}</td>
            </tr>
            <tr>
              <td id="articleCreator">
                Article posted by {this.props.extArticle.created_by}
              </td>
            </tr>
            <tr>
              <th>
                <button
                  disabled={
                    this.props.extArticle.voted === "down" ? true : false
                  }
                  onClick={() =>
                    this.props.articleVote(
                      this.props.extArticle._id,
                      "down",
                      this.props.extArticle
                    )
                  }
                >
                  <ion-icon name="thumbs-down" />
                </button>
                <button
                  disabled={this.props.extArticle.voted === "up" ? true : false}
                  onClick={() =>
                    this.props.articleVote(
                      this.props.extArticle._id,
                      "up",
                      this.props.extArticle
                    )
                  }
                >
                  <ion-icon name="thumbs-up" />
                </button>
              </th>
              <tr id="voteCount">{`${this.props.extArticle.votes} likes`}</tr>
            </tr>
          </tbody>
        </table>
        Comments
        <br />
        <Comments
          articleID={this.props.extArticle._id}
          article={this.props.articles.filter(article => {
            return article._id === this.props.match.params.articleID;
          })}
        />
      </div>
    );
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    const currentArticle = this.props.articles.filter(article => {
      return article._id === articleID;
    });
    this.props.renderExtendedArticle(currentArticle, articleID);
  }
}

const mapStateToProps = state => ({
  articles: state.articles.items,
  topic: state.articles.topic,
  extArticle: state.extArticle.article,
  extComments: state.extArticle.comments,
  commentPosted: state.extArticle.commentPosted,
  voted: state.extArticle.voted
});

export default connect(
  mapStateToProps,
  { renderExtendedArticle, fetchArticles, articleVote }
)(ExpandedArticle);
