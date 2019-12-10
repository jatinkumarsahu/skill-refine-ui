import React, { Component } from 'react';
import './App.css';
import PersonList from './components/PersonList'
 
class App extends Component {

state = {
  person : [
    {name: 'Jatin', age: '23'},
    {name: 'Ritika', age: '22'},
    {name: 'Heena', age: '23'}
  ]
};

changePersonHandler = () =>{
  this.setState({person : [
    {name: 'Jatin123', age: '23'},
    {name: 'Ritika123', age: '22'},
    {name: 'Heena123', age: '23'}
  ]});
}

  render() {
    return (
      <div className="App">
       <PersonList personList={this.state.person} clickHandler={this.changePersonHandler} />
      </div>
    );
  }
}

export default App;                                                                                                             
