import './App.css';
import React,{useEffect} from 'react'
function User(props) {
  useEffect(()=>{
    console.warn("use effect is called")
  },[props.count,props.data])
  return (
    <div className="App">
      <h1>Data : {props.data}</h1>
      <h1>Count : {props.count}</h1>
      
    

    </div>
  );
}

export default User;
