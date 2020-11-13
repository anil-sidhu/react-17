import logo from './logo.svg';
import './App.css';
import User from './User'
import Student from './Student'
function App() {
 
  function getData() {
    alert("Hello from app component")
  }
  return (
    <div className="App">
     <User  data={getData} />
     <Student data={getData} />
    </div>
  );
}

export default App;
