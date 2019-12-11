import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            {props.name}
            <br />
            {props.age}
            <br/>
            <input type="text" onChange={props.handleChange} value={props.name}/>
        </div>
    );
};

export default person; 