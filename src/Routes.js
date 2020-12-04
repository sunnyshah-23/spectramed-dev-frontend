import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import TC from './components/TC'
function Routes () {
    return (
      <BrowserRouter>
        <Switch className = "App">
          <Route exact path="/" component={Home} />
          <Route exact path="/termsandconditions"  component={TC} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;