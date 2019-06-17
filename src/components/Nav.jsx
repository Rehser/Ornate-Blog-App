import React, { Component } from "react";

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
              <a href="#" class="nav-item nav-link">
                Home
              </a>
              <a href="#" class="nav-item nav-link">
                Projects
              </a>
              <a href="#" class="nav-item nav-link">
                Pending
              </a>
              <a href="#" class="nav-item nav-link">
                Settings
              </a>
            </div>
            <div class="navbar-nav ml-auto">
              <a href="#" class="nav-item nav-link">
                Login
              </a>
              <a href="#" class="nav-item nav-link">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
