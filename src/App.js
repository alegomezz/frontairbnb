import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Routes from './Routes';


class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
