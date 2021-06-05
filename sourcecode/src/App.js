import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

  import Home from './components/Home';



function App() {
    return (
      <Router>
        <div className="container">
        <Switch>
          <Route path = "/checkout">
            <h1>CheckOut</h1>
          </Route>
          <Router path = "/login">
            <h1>Login Page</h1>
          </Router>
          <Route path = "/">
            {/*this is the default route*/}
            <h1>Home Page!!</h1>
          </Route>
        </Switch>
        </div>
      </Router>
    );
}

export default App;
