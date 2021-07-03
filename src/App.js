import React, { useState,useEffect } from "react";
import "./App.css";
function App() {
  const [name,setName]=useState("");

  useEffect(()=>{
    console.log("called");
    setName(Math.random());
  },[name])

  return(
  <div>
      <h1>React Interview Questions Part 4</h1>
      <h3>{name}</h3>
          <button onClick={()=>setName('Anil Sidhu')} >Update Name</button>

  </div>
  )
}
export default App;