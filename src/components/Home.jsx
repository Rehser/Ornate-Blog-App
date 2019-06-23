import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="jumbotron">
          <h1 class="display-4">Ornate</h1>
          <p class="lead">Web Design Community</p>
          <p>Build a blog or project for hobby and generate more leads!</p>
          <a class="btn btn-lg logo" href="#" role="button">
            Learn more
          </a>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-header">
                Learn <span id="word">React</span>
              </div>
              <div class="card-body">
                <img
                  src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
                  alt=""
                />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-dark">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-header">
                Learn <span id="word">Bootstrap</span>
              </div>
              <div class="card-body">
                <img
                  src="https://dh.virginia.edu/system/files/styles/large/private/bootstrap-stack.png?itok=b_S8F9nO"
                  alt=""
                />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-dark">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-header">
                Learn <span id="word">MongoDB</span>
              </div>
              <div class="card-body">
                <img
                  src="https://i.pinimg.com/originals/24/a6/63/24a663052e771d440fa6555894a93595.jpg"
                  alt=""
                />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-dark">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
