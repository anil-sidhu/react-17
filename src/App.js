import './App.css';
import React ,{useRef} from 'react'
import User from './User'
function App() {
  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="1000";
    inputRef.current.style.color="red"
    inputRef.current.focus()


  }
  return (
    <div className="App">
      <h1>forwardRef in React </h1>
      <User ref={inputRef} />
      <button onClick={updateInput} >Update Input Box</button>
    </div>
  );

}
export default App;
