import './App.scss';
import React, { Component } from 'react';
import Home from "./components/home/home.js";
import Main from "./components/main/main.js";
import ShoppingCart from "./components/shopping-cart/shopping-cart.js";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path={"/"} component={Main}>
            <IndexRoute component={Home} />
            <Route path={"/shopping-cart"} component={ShoppingCart} />
          </Route>
        </Router>
    );
  }
}

export default App;
