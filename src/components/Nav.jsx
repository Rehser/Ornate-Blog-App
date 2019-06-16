import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello</h1>
        </div>
      </Router>
    );
  }
}

export default Nav;
