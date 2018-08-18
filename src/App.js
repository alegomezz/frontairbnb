import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container-fluid">
          <Jumbotron />
        </main>
      </div>
    );
  }
}

export default App;
