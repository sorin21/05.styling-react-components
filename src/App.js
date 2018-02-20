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

  nameChangeHandler = (event) => {
    console.log('clicked change');
    this.setState({
      persons: [
        { id: 'das4', name: 'Sorin', age: '25' },
        { id: 'dsf1', name: event.target.value, age: 38 },
        { id: 'ghfhg5', name: 'Cristina', age: 19 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px #ccc',
      marginTop: '20px'
    };

    let persons = null; 

    if(this.state.showPersons) {
      // if the above condition is true
      persons = (
        <div>
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
            age="23"></Person>
        </div> 
      );

    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons} 
      </div>
    );
  }
}

export default App;
