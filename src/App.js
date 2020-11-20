import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;
