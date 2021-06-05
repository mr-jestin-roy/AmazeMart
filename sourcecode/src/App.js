import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Header from "./components/Header";



function App() {
    return (
      <Router>
        <div className="container">
        <Switch>
          <Route path = "/checkout">
            <h1>CheckOut</h1>
          </Route>
          <Route path = "/login">
            <h1>Login Page</h1>
          </Route>
          <Route path = "/">
            {/*this is the default route*/}
            <Header />
            <h1>Home Page!!</h1>
          </Route>
        </Switch>
        </div>
      </Router>
    );
}

export default App;
