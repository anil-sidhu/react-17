import React, { useEffect, useState } from 'react'
// json format
import Form  from './Form'
function App(){

  // url  https://jsonplaceholder.typicode.com/todos/
  // method, GET,POST,PUT,DELETE
  // POSTMAN 
  // GET / params 
  // response
  React.useEffect(()=>{
    let url="https://jsonplaceholder.typicode.com/todos/";
    fetch(url).then((response)=>{
      response.json().then((result)=>{
        console.warn("result",result)
      })
      // console.warn("response",response)
    })
  })
 return(
   <div>
     <h1>API </h1>
   </div>
 )
}
export default App