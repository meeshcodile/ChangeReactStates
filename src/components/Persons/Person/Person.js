import React, { Component } from 'react'
import '../Person/Person.css'
import Radium from 'radium'
import PropTypes from 'prop-types'


class Person extends Component {

    // ==========lifecycle hooks=================
    constructor(props) {
        super(props)
        console.log('[Person.js] inside constructor', props)

    }

    componentWillMount() {
        console.log('[Person.js] inside the componentWillMount()')
       
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()')
         if (this.props.position === 0) {
           this.inputElement.focus();
         }
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] inside the componentWillRecieveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Update Person.js] inside the shouldComponentUpdate', nextProps , nextState)
        return nextProps.persons !== this.props.persons ||
                nextProps.changed !== this.props.changed ||
                nextProps.clicked !== this.props.clicked
        // return true
    }
    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Person.js] inside componentWillUpate', nextProps, nextState)
    }

    componentDidUpdate(){
        console.log('[UPDATE Person.js] inside componentDidUpdate')
    }

    render() {
        console.log('[Person.js] inside the render()')
        // adding media queries using radium
        const style = {
            '@media(min-width:500px)':{
                width:'450px'
            }
        }
        return (
            <div className="Person" style={style}>
                <h3 onClick={this.props.click}>my name is {this.props.name} and am {this.props.age} years old</h3>
                <input 
                ref={(input)=> {this.inputElement = input}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </div>
        )
    }
}

Person.propTypes ={
    name: PropTypes.string,
    click: PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func  
}

export default Radium(Person)