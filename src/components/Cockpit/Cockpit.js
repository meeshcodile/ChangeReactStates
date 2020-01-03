import React from 'react'
import Radium from 'radium'
import Aux from '../../hoc/Aux'

const cockpit = (props)=>{

    const style = {
        border: '1px solid blue',
        color: 'white',
        background: '#333',
        font: 'inherit',
        padding: '1.2rem',
        ':hover': {
            backgroundColor: 'red',
            color: 'black'
        }


    }

    const classes = []
    if (props.persons.length <= 2) {
        classes.push('red')
    }
    if (props.persons.length <= 1) {
        classes.push('bold')
    }
    return(

        <Aux>
          
                <h1 className={classes.join(" ")}>this is the main page</h1>
                <button style={style} onClick={props.clicked}>
                    Toggle Name
                 </button>
            
        </Aux>
        
    );
}

export default Radium(cockpit) 