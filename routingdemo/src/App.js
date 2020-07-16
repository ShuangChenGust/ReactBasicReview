import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Navigation from "./components/Navigation"
//
import { LandingPage } from './components/landingpage';
import { AppLayout } from './components/layout'
//

const NewRoute = () => {
  return(
    <div>
      <p>New Route</p>
    </div>
  )
}
//Match exactly
class App extends Component{
  render(){
    return (
      <div className = "App">
        <h1>Login to the protected page</h1>
        <BrowserRouter>
          <Route path = "/" component ={LandingPage} />
          <Route path = "/app" component ={AppLayout} />
          <Navigation></Navigation>  
          <Switch>
            <Route path="/new" component={NewRoute} />
            {/* <Route path="/" component={Home} exact/> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route component={Error} /> */}
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
