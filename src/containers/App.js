import React, { Component } from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Radium ,{StyleRoot} from 'radium'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  // ==========lifecycle hooks=================
  constructor(props){
    super(props)
    console.log('[App.js] inside constructor', props)
    this.state = {
        persons: [
          { id: 1, name: "james", age: 30 },
          { id: 2, name: "misheal", age: 40 },
          { id: 3, name: "cater", age: 24 },
          { id: 4, name: "ifeoluwa", age: 45 },

        ],
      showPersons: false,
      toggleClicked:0
    }

   
  }

  componentWillMount(){
    console.log('[App.js] inside the componentWillMount()')
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside the shouldComponentUpdate', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
          nextState.showPersons !== this.state.showPersons
    // return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate')
  }


  // state={
  //   persons:[
  //     {id:1,name:"james", age:30},
  //     {id:2, name: "misheal", age:40 },
  //     {id:3, name: "cater", age:24 }, 
  //     {id:4,name:"ifeoluwa", age:45},

  //   ],
  //   showPersons : false
  // }


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
    this.setState((prevState, props)=>{
     return{
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
    }
    })
  }

  render() {
    console.log('[App.js] inside render')
    let persons = null
    if(this.state.showPersons){
      persons = (

        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.nameChange} 
          
          />
        </div>
      )
    }

 
    
    return (
      <StyleRoot>

        <div className="App">
          <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit 
            showPersons={this.state.showPersons}
            clicked={this.toggleNameHandler}
            persons = {this.state.persons}
          />
          {persons}
        </div>
       </StyleRoot>
    );
  }
}


export default Radium(App)