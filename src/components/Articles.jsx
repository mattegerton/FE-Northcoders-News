import React, { Component } from "react";
import "./css/Articles.css";
import { Link, Redirect } from "react-router-dom";
import * as api from "../api";
import moment from "moment";

class Articles extends Component {
  state = {
    articles: [],
    newArticle: false,
    error: {}
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2> Articles </h2>
        <Link to="/articles/post">Post an article!</Link>
        {this.state.error.code && (
          <Redirect
            to={{ pathname: "/error", state: { error: this.state.error } }}
          />
        )}
        {[...articles]
          .sort((a, b) => {
            const c = new Date(a.created_at);
            const d = new Date(b.created_at);
            return d - c;
          })
          .map(article => {
            const previewText = `${article.body.slice(0, 200)}...`;
            return (
              <div key={article._id}>
                <table className="articleBlock">
                  <col width="5%" />
                  <col width="70%" />
                  <tbody>
                    <tr>
                      <th> {article.votes}</th>
                      <Link to={`/articles/${article._id}`}>
                        <th className="articleBody">
                          <p className="articleTitle"> {article.title} </p>
                          {previewText}
                          <p className="articleFooterText">
                            {`Posted ${moment(article.created_at)
                              .startOf("second")
                              .fromNow()} 
                          by ${article.created_by}`}
                          </p>
                        </th>
                      </Link>
                      <th>
                        <Link to={`/articles/${article._id}`}>
                          <ion-icon name="reorder" />
                        </Link>
                      </th>
                      <th>
                        <button>
                          <ion-icon name="thumbs-down" />
                        </button>
                      </th>
                      <th>
                        <button>
                          <ion-icon name="thumbs-up" />
                        </button>
                      </th>
                      <th>
                        <ion-icon name="chatboxes" />
                        {article.comment_count}
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

  // handleVote = direction => {
  //   axios.patch("a").then();
  // };

  componentDidMount() {
    this.getArticles(this.props.match.params.topic);
  }

  getArticles = params => {
    if (params !== undefined) {
      api
        .getArticlesByTopicSlug(params)
        .then(response => {
          this.setState({ articles: response.data.articles });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      api
        .getAllArticles()
        .then(response => {
          this.setState({
            articles: response.data.articles
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            error: {
              statusCode: error.response.status,
              message: error.response.data.message
            }
          });
        });
    }
  };
}
export default Articles;
