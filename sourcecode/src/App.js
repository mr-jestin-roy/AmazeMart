import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
    return (
      <Router>
        <div className="container">
        <Switch>
          <Route path = "/checkout">
            <Header />
            <h1>CheckOut</h1>
          </Route>
          <Route path = "/login">
            <h1>Login Page</h1>
          </Route>
          <Route path = "/">
            {/*this is the default route*/}
            <Header />
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    );
}

export default App;
