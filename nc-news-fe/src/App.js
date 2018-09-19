import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Route exact path="/" render={() => <MainContent />} />
        <Route exact path="/topics" render={() => <Topics />} />
        <Route exact path="/articles" render={() => <Articles />} />
        <Route exact path="/users" render={() => <Users />} />
        <Footer />
      </div>
    );
  }
}

export default App;
