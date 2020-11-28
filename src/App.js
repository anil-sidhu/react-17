import React from 'react'
import './App.css';
import User from './User'
function App() {
  function getName(name)
  {
    alert(name)
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User getData={getName} />
    </div>
  );
}

export default App;
