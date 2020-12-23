import React,{useEffect, useState}  from 'react'

// rerendering 
// object and array 
//component functional,class state,setState,array push,object,form controll

// collectionwith map , list 
function Form()
{
  let[name,addname]=useState("")
  let[age,addage]=useState(0)
  let[hobbies,addhobbies]=useState(null)
  let[hobbies1,addhobbies1]=useState(null)
  let[gender,addgender]=useState("")
  let[language,addlang]=useState("")
  let [collection,setCollection]=useState([]);
 function  onSubmit()
  {
    let item={name,age,hobbies,gender,language,hobbies1,hobbies}
    let x=collection;
    x.push(item)
    collection.push()
    setCollection(x)
    // console.warn(name,age,gender,language,hobbies1,hobbies)
    console.warn(collection)
    
  }
  function controlHb(e)
  {
   
    if(!e.target.value)
    {
      addhobbies("Reading_Books")
    }
    else
    {
      addhobbies(null)
    }
  }
  function controlHb1(e)
  {
    
    if(!e.target.value)
    {
      addhobbies1("Lisening_Music")
    }
    else
    {
      addhobbies1(null)
    }
  }
  return (
    <div>
        <h1>Enter Details</h1>
    
      <label>NAME<input type="text" onChange={(e)=>{addname(e.target.value)}} /><br></br></label>
      <label>AGE<input type="text"  onChange={(e)=>{addage(e.target.value)}}/><br></br></label>
      
      <label>Hobbies<br></br></label>
      <input type="checkbox" id="hobby_1" name="hobby_1" value={hobbies}  onChange={controlHb}/><label>Reading books<br></br></label>
      <input type="checkbox" id="hobby_1" name="hobby_1"  value={hobbies1} onChange={controlHb1} /><label>Lisening Music<br></br></label>
      {/* <input type="checkbox" id="hobby_1" name="hobby_1"checked={hobbies}  value="Watching_Tv"  onChange={(e)=>{addhobbies(e.target.value)}}/><label>Watching Tv<br></br></label> */}
     
      <div >
        <lable>Gender<br></br></lable>
        <input type="radio" value="Male" checked={gender==="Male"} onChange={(e)=>{addgender(e.target.value)} }/>Male
        <input type="radio" value="Female" checked={gender==="Female"} onChange={(e)=>{addgender(e.target.value)}} name="gender"/>Female
      </div>
      <div>
        <lable>Language</lable>
      <select value={language} onChange={(e)=>{addlang(e.target.value)}}>
       <option value="English" >English</option>
        <option value="Hindi" >Hindi</option>
        <option value="Marathi">Marathi</option>
      </select>
     <br></br>
      </div> 
      <button onClick={onSubmit} type="button" >Save</button>
      <div id="my_data" >
        <center>
          <h3>MY DATA</h3>
          <p>My name is {name}</p>
        </center>
      </div>
     
      </div>

  );
}
export default Form