import React, { Component } from "react";
import "./Style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Pending from "./components/Pending";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Core extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/pending" component={Pending} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    );
  }
}

export default Core;
