import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'das4', name: 'Sorin', age: '25' },
      { id: 'dsf1', name: 'Max', age: 38 },
      { id: 'ghfhg5', name: 'Cristina', age: 19 }
    ],
    showPersons: false,
    toggleClicked: 0
  }
  switchNameHandler = (newName) => {
    console.log('clicked');
    // this.state.persons[0].name = "Adam"
    this.setState({
      persons: [
        { id: 'das4', name: newName, age: '25' },
        { id: 'dsf1', name: 'Max', age: 38 },
        { id: 'ghfhg5', name: 'Cristina', age: 19 }
      ]})
  }

  nameChangeHandler = (event) => {

  }
  render() {
    return (
      <div className="App">
        <Person 
          name={this.state.persons[0].name} 
          age="25"
          click={(event) => this.switchNameHandler('Traian')}>My hooby: guitars</Person>
        <Person name="Elena" age="18"></Person>
        <Person name="Cris" age="23"></Person>
        <button onClick={this.switchNameHandler}>Change Name</button>
      </div>
    );
  }
}

export default App;
