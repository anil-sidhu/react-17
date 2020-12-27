import React, { useEffect, useState } from 'react'
// json format
import Form  from './Form'
function App(){
const [users,setUsers] = useState(
  [
    {id:1, name: 'peter', email: 'peter@abc.com', mobile: 9999 },
  { id:2,name: 'bruce', email: 'bruce@abc.com', mobile: 9999 },
  { id:3,name: 'sam', email: 'samih@abc.com', mobile: 9999 },
  { id:4,name: 'tony', email: 'tonyg@abc.com', mobile: 9999 }
  ]
)
let [name,addname]=useState("")
let [email,addemail]=useState("")
let [mobile,setmobile]=useState("")



function delete_data(item)
{
  
  console.warn(item)
  //users.splice(idx);
  // delete users[item.id];
  let collection=users.filter((data)=>data.id!=item.id)
  setUsers(collection)
  // console.warn({users})
}
function onSubmit()
{
  let tempId=users.length+1
  let item={id:tempId,name,email,mobile}
  let localUser=users;
 localUser.push(item);
 console.warn("users",item)
localUser= JSON.parse(JSON.stringify(localUser))
  setUsers(localUser)
 
  
}
// map function 
{
  return (
    <div>
     <Form/>
   
   <input type="text" placeholder="enter name"  onChange={(e)=>{addname(e.target.value)}}/>
   <input type="text" placeholder="email"  onChange={(e)=>{addemail(e.target.value)}}/>
   <input type="text" placeholder="mobile"  onChange={(e)=>{setmobile(e.target.value)}} />
    <button onClick={onSubmit} type="button" >Save</button>
      
     
      <h1>User List</h1>
      <table>
      <thead>
             <th style={{border: " 1px solid red"}}>Name</th>
             <th style={{border: " 1px solid red"}}>Email</th>
             <th style={{border: " 1px solid red"}}>Mobile</th>
             <th style={{border: " 1px solid red"}}>Action</th>
             </thead>
      {
         users.map((item,idx)=>
         
           
          
           
             <tbody>
             <tr style={{border: " 1px solid red"}}>
               <td  style={{border: " 1px solid red"}}>{item.name}</td>
               <td style={{border: " 1px solid red"}}>{item.email}</td>
               <td style={{border: " 1px solid red"}}>{item.mobile}</td>
               <td style={{border: " 1px solid red"}}><button type="button" onClick={()=>delete_data(item)}>Delete</button></td>
               
             </tr>
             </tbody>
          

         
          
         )
      }
       </table>
    </div>
  )
}
}
export default App