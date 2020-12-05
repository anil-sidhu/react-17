import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>Uncontrolled Component </h1>
      <HOC cmp={Simple} />
      <HOCGreen cmp={Simple} />
    </div>
  );
}
function HOC(p) {
  return <h1 style={{ backgroundColor: 'red', width: 100, height: 100 }} ><p.cmp /></h1>
}
function HOCGreen(p) {
  return <h1 style={{ backgroundColor: 'green', width: 100, height: 100 }} ><p.cmp /></h1>
}

function Simple() {
  const [count, setCount] = useState(1)
  return <div>
    <h3>{count}</h3>
    <button onClick={() => { setCount(count + 1) }} >HOC</button>
  </div>
}
export default App;
