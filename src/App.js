import './App.css';
import React from 'react'
import Student from './Student'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show?<Student />
          :<h4>Component is removed</h4>
        }
        <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
      </div>
    )
  }
}

export default App;
