import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light">
          <a href="/" class="navbar-brand logo">
            Brand
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <ion-icon class="menu" name="menu" />
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to="/">
                <a class="nav-item nav-link">Home</a>
              </Link>

              <Link to="/projects">
                <a class="nav-item nav-link">Projects</a>
              </Link>

              <Link to="/pending">
                <a class="nav-item nav-link">Pending</a>
              </Link>

              <Link to="/settings">
                <a class="nav-item nav-link">Settings</a>
              </Link>
            </div>
            <div class="navbar-nav ml-auto">
              <a class="nav-item nav-link">Login</a>
              <a class="nav-item nav-link">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
