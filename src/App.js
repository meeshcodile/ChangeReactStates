import React, { Component } from 'react'
import './App.css'
import Person from './component/Person'

class App extends Component {
  state={
    persons:[
      {id:1,name:"james", age:30},
      {id:2, name: "misheal", age:40 },
      {id:3, name: "cater", age:24 },
      {id:4,name:"ifeoluwa", age:45},

    ],
    showPersons : false
  }


  nameChange =(event, id) =>{
    const personIndex = this.state.persons.findIndex(name =>{
     return name.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name=event.target.value
    const persons =[...this.state.persons]
    persons[personIndex] = person

    this.setState({persons:persons})
  }
  
  deleteNameHandler =(personIndex)=>{
    const persons =this.state.persons.slice()
    persons.splice(personIndex, 1)
    this.setState({persons:persons})
  }

  toggleNameHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style ={
      border: '1px solid blue',
      color: 'white',
      background: '#333',
      font: 'inherit',
      padding:'1.2rem',
      

    }

    let persons = null
    if(this.state.showPersons){
      persons = (

        <div>
          {this.state.persons.map((person, index) =>{
            return <Person  
                  click={()=>this.deleteNameHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event)=>this.nameChange(event, person.id)}
              
              />
          })}

        </div>
      )
    }

  const classes = []
  if(this.state.persons.length <=2){
    classes.push('red')
  }
  if(this.state.persons.length <=1){
    classes.push('bold')
  }
    
    return (
      
        <div className="App">
          <h1 className={classes.join(" ")}>this is the main page</h1>
          <button style={style} onClick={this.toggleNameHandler}>
            Toggle Name
          </button>
          {persons}
        </div>
      
    );
  }
}


export default App