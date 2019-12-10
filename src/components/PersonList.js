import React from 'react'
import Person from './Person'

const personList = (props) => {

const person = props.personList.map(p => (
    <Person
    key={p.name} 
    name={p.name} 
    age={p.age} 
    clickHandler={props.clickHandler} />
));

        return (
            <div>{person}</div>
        );
    
}

export default personList;