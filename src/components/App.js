import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.scss';
import { SimpleState } from "./simple-state/simple-state";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <SimpleState />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
