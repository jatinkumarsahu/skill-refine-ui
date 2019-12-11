import React from 'react'
import Person from './Person'

const personList = (props) => {

const person = props.personList.map((p,index) => (
    <Person
    key={index} 
    name={p.name} 
    age={p.age} 
    handleChange={event => props.inputHandle(event,index)}
    />
));

        return (
            <div>{person}</div>
        );
    
}

export default personList;