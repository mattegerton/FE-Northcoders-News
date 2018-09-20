import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <MainContent />} />
          <Route exact path="/topics" render={() => <Topics />} />
          <Route
            exact
            path="/articles"
            render={props => <Articles {...props} />}
          />
          <Route exact path="/users" render={() => <Users />} />
          <Route path="/topics/:topic" component={Articles} />
          <Route path="/articles/:articleID" component={ExpandedArticle} />
          <Route path="/users/:userID" component={ExpandedUser} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
