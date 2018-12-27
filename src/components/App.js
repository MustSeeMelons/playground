import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.scss';
import Header from "./header/header";
import Footer from "./footer/footer";
import Home from "./home/home";
import Navbar from "./navbar/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="app">
        <Header />
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/*" render={() => {
              return <div className="container">HELLO</div>
            }}/>
          </Switch>
        <Footer />
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
