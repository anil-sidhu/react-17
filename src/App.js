import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"Anil sidhu"
    }
    console.warn("constructor")
  }
  render()
  {
    console.warn("render")
    return<div>
      <h1>Hello World {this.state.name}</h1>
    </div>
  }
}
export default App;
