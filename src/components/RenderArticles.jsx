import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./css/RenderArticles.css";

class RenderArticles extends Component {
  render() {
    return [...this.props.articles]
      .sort((a, b) => {
        const c = new Date(a.created_at);
        const d = new Date(b.created_at);
        return c - d;
      })
      .map(article => {
        const previewText = `${article.body.slice(0, 200)}...`;
        return (
          <div key={article._id} className="articleWrapper">
            <Link to={`/articles/${article._id}`} className="articlesLink">
              <div id="articleText">
                <p className="articleTitle"> {article.title} </p>
                <p id="prevText">{previewText}</p>
                <p className="articleFooterText">
                  {`Posted ${moment(article.created_at)
                    .startOf("second")
                    .fromNow()} 
                by ${article.created_by}`}
                </p>
              </div>
            </Link>
            <div className="articleOptions">
              <button>
                <Link to={`/articles/${article._id}`}>
                  <ion-icon name="reorder" />
                </Link>
              </button>
              <button>
                <ion-icon name="chatboxes" />
                {article.comment_count}
              </button>
            </div>
          </div>
        );
      });
  }
}

export default RenderArticles;
