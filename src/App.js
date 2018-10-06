//packages
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//styling
import "./App.css";
//components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Users from "./components/Users";
import Error from "./components/WrongPath";
import ExpandedArticle from "./components/ExpandedArticle";
import ExpandedUser from "./components/ExpandedUser";
import PostArticle from "./components/PostArticle";

class App extends Component {
  state = {
    user: "5b740b676ae2b0703855c140"
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation user={this.state.user} />
        <Switch>
          <Route exact path="/" render={() => <MainContent />} />
          <Route exact path="/topics" render={() => <Topics />} />
          <Route
            exact
            path="/articles"
            render={props => <Articles {...props} />}
          />
          <Route exact path="/users" render={() => <Users />} />
          <Route exact path="/topics/:topic" component={Articles} />
          <Route
            exact
            path="/articles/post"
            render={() => <PostArticle user={this.state.user} />}
          />
          <Route
            path="/articles/:articleID"
            render={props => (
              <ExpandedArticle {...props} user={this.state.user} />
            )}
          />
          <Route path="/users/:userID" component={ExpandedUser} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
