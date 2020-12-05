import './App.css';
import React, { useState, useRef } from 'react'
function App() {
  let nameRef = useRef(null)
  function submit(e) {
    e.preventDefault()
    let a = document.getElementById('name').value
    console.warn("a[[le", a, nameRef.current.value)
  }
  return (
    <div className="App">
      <h1>Controlled Component </h1>
      <form onSubmit={submit} >
        <input type="text" id="name" /> <br /><br />
        <input ref={nameRef} type="text" /> <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );

}
export default App;
