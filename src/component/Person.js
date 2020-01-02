import React, { Component } from 'react'
import './Person.css'

class Person extends Component {
    render() {
        // adding media queries using radium
        // const style = {
        //     '@media(min-width:500px)':{
        //         width:'450px'
        //     }
        // }
        return (
            <div className="Person" style={style}>
                <h3 onClick={this.props.click}>my name is {this.props.name} and am {this.props.age} years old</h3>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}


export default Person