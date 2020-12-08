import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" >Home</Link> <br /><br />
        <Link to="/about" >About</Link> <br />
        <Link to="/login" >Login</Link> <br />

        <Switch >
        <Route path="/" exact={true}><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="*"><PageNotFound /></Route>

        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (<div>
    <h1>Home Page</h1>
    <p>This is Home Page</p>
  </div>)
}

function About() {
  return (<div>
    <h1>About Page</h1>
    <p>This is About Page</p>
  </div>)
}
function PageNotFound() {
  return (<div>
    <h1>404 Page</h1>
    <p>This is Not found</p>
  </div>)
}

export default App;
