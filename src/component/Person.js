import React, { Component } from 'react'
import './Person.css'

export default class Person extends Component {
    render() {
        return (
            <div className="Person">
                <h3>my name is {this.props.name} and am {this.props.age} years old</h3>
                <input type="text" onChange={this.props.nameChanged}/>
            </div>
        )
    }
}


 