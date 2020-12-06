import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home" >Home</Link>
        <br></br>
        <Link to="/about" >About</Link>
        <Route path="/home" > <Home /></Route>
        <Route path="/about" > <About /></Route>


      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  )
}
export default App;
