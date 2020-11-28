import './App.css';
import React from 'react'
import User from './User'
function App() {
  const users = [
    {
      name: 'Anil', email: 'anil@test.com', contact: "111"
    },
    {
      name: 'Burce', email: 'bruce@test.com', contact: "222"
    },
    {
      name: 'Peter', email: 'peter@test.com', contact: "333"
    },
    {
      name: 'Sam', email: 'sam@test.com', contact: "444"
    },
  ]
  return (
    <div className="App">
      <h1>Reuse Component with List</h1>
      
      {
        users.map((item)=><User  data={item} />)
      }
    </div>
  );
}

export default App;
