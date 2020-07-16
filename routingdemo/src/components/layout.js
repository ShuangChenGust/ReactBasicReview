import React from "react";
import auth from "./auth";

import { BrowserRouter, Route, Switch } from 'react-router-dom';  

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Navigation from "./Navigation";

export const AppLayout = props => {
    return (
      <div>
        <h1>App Layout</h1>
        <BrowserRouter>
          <Navigation></Navigation>  
          <Switch>
            {/* <Route path="/" component={Home} exact/> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route component={Error} /> */}
          </Switch>
        </BrowserRouter>
        <button
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          Logout
        </button>
      </div>
    );
  };
  