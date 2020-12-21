import './App.css';
import React from 'react'
function App() {
  const [data,setData]=React.useState({name:'anil',age:27})
  return (
    <div className="App">
      <h1>State Object with Hooks</h1>
      <input type="text" onChange={(e)=>{setData({...data,name:e.target.value})}} />
      <input type="text" onChange={(e)=>{setData({...data,name:data.name,age:e.target.value})}} />

      <h1>Name:{data.name}</h1>
      <h1>Age:{data.age}</h1>

    </div >
  );
}



export default App;
