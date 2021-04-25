import React, { useState } from 'react'
function Child(props)
{
    const [collection,setCollection]=useState({name:'peter'})
    const [name,setName]=useState("")
    console.warn(props)
    function setData()
    {
       
    }
    return(
        <div>
<h1>Child Component</h1>
<input type="text"  onChange={(e)=> props.getData(e.target.value)} />
<button onClick={setData}>Click Me</button>
        </div>
    )
}

export default Child