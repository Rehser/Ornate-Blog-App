import React, { Component } from "react";
import "./Style.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Core extends Component {
  render() {
    return <Nav />;
  }
}

export default Core;
