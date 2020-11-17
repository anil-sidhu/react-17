import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"anil"}
  }
  componentDidMount()
  {
    console.warn("componentDidMount")

  }
  render()
  {
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
      </div>
    );
  }
}

export default App;
