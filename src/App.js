import React, { useEffect, useState } from 'react'
// json format
import Form  from './Form'
function App(){
const [users] = useState(
  [
    { name: 'peter', email: 'peter@abc.com', mobile: 9999 },
  { name: 'bruce', email: 'bruce@abc.com', mobile: 9999 },
  { name: 'sam', email: 'sam@abc.com', mobile: 9999 },
  { name: 'tony', email: 'tony@abc.com', mobile: 9999 }
  ]
)
// map function 
{
  return (
    <div>
      <Form />
      <h1>User List</h1>
      {
         users.map((item)=>
         <div>
           <h1>{item.name} {item.email} {item.mobile} </h1>
         
           </div>
         )
      }
    </div>
  )
}
}
export default App