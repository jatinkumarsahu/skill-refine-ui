import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person" onClick={props.clickHandler}>
            {props.name}
            <br />
            {props.age}
        </div>
    );
};

export default person; 