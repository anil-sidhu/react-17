import './App.css';
import React, { useState } from 'react'
function App() {
  const [count,setCount]=useState(0)
  function updateCounter()
  {
    // let item=Math.floor(Math.random()*10)
    // setCount((pre)=>{
    //   if(pre<3)
    //   {
    //     alert("last value is very low")
    //   }
    //   return item
    // })
    for(let i=0;i<5;i++)
    {
      setCount((pre)=>pre+1)
    }
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button  onClick={updateCounter}>Click Me to Update counter</button>
    </div>
  );
}
export default App;
