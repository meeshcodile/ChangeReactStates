import React, { Component } from 'react'
import './App.css'
import Person from './component/Person'

class App extends Component {
  state={
    persons:[
      {name:"james", age:30},
      { name: "misheal", age:40 },
      { name: "cater", age:24 },
      {name:"ifeoluwa", age:45},

    ]
  }
  changeName =() =>{
    this.setState({
      persons: [
        { name: "moses", age: 30 },
        { name: "tob", age: 50 },
        { name: "cater", age: 24 },
        { name: "maxwell", age: 45 },

      ]
    })
  }

  nameChange =(event) =>{
    this.setState({
      persons: [
        { name: "moses", age: 30 },
        { name: "cater", age: 50 },
        { name: event.target.value, age: 24 },
        { name: "maxwell", age: 45 },

      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>this is the main page</h1>
        <button className="mainButton" onClick={this.changeName}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} nameChanged={this.nameChange}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>

      </div>
    )
  }
}


export default App