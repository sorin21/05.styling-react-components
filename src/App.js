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
    console.log('clicked switch');
    // this.state.persons[0].name = "Adam"
    this.setState({
      persons: [
        { id: 'das4', name: newName, age: '25' },
        { id: 'dsf1', name: 'Max', age: 38 },
        { id: 'ghfhg5', name: 'Cristina', age: 19 }
      ]})
  }
  switchNameHandler2 = (newName) => {
    console.log('clicked switch');
    // this.state.persons[0].name = "Adam"
    this.setState({
      persons: [
        { id: 'das4', name: newName, age: '25' },
        { id: 'dsf1', name: 'Max', age: 38 },
        { id: 'ghfhg5', name: 'Cristina', age: 19 }
      ]})
  }

  nameChangeHandler = (event) => {
    console.log('clicked change');
    this.setState({
      persons: [
        { id: 'das4', name: event.target.value, age: '25' },
        { id: 'dsf1', name: event.target.value, age: 38 },
        { id: 'ghfhg5', name: 'Cristina', age: 19 }
      ]
    })
  }

  nameChangeHandler2 = (event) => {
    this.setState({
      persons: [
        { id: 'das4', name: event.target.value, age: '25' },
        { id: 'dsf1', name: event.target.value, age: 38 },
        { id: 'ghfhg5', name: 'Cristina', age: 19 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <Person 
          name={this.state.persons[0].name} 
          age="25">My hooby: guitars</Person>
        <Person 
          name={this.state.persons[1].name}
          age="18"
          click={(event) => this.switchNameHandler('Traian')}
          changed={this.nameChangeHandler}></Person>
        <Person 
          name="Cris" 
          age="23"
          click2={(event) => this.switchNameHandler2('dsadsadsadswitch')}></Person>
        <button onClick={this.switchNameHandler.bind(this, 'Magdalena')}>Change Name</button>
        <button onClick={() => this.switchNameHandler2('Doi')}>Change Name 2</button>
      </div>
    );
  }
}

export default App;
