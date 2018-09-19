import React, { Component } from "react";
import axios from "axios";
import "./css/Articles.css";
import moment from "moment";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2> Articles </h2>
        {[...articles]
          .sort((a, b) => {
            const c = new Date(a.created_at);
            const d = new Date(b.created_at);
            return d - c;
          })
          .map(article => {
            const previewText = `${article.body.slice(0, 200)}...`;
            return (
              <div>
                <table key={article._id} className="articleBlock">
                  <col width="5%" />
                  <col width="70%" />
                  <tr>
                    <th> {article.votes}</th>
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
                      {article.comment_count}
                    </th>
                  </tr>
                </table>
              </div>
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
