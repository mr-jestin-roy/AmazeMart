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
      <div className="container">
        <h1>Hello, World</h1>
        <Home />
      </div>
    );
}

export default App;
