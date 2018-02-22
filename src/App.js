import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: 'das4', name: 'Max', age: 25 },
      { id: 'dsf1', name: 'Sorin', age: 38 },
      { id: 'ghfhg5', name: 'Cristina', age: 19 }
    ],
    showPersons: false
  }
  // target is the input where we type 
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((personInput) => {
      return personInput.id === id;
    });
    // create a new object, because just copying 
    // the new obj will point to the same pointer in memory
    const person = {
      ...this.state.persons[personIndex]
    }
    // update the name
    person.name = event.target.value;
    // copy again state persons in a new array
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // update the state persons
    this.setState({ persons: persons })
  }
  deletePersonHandler = (personIndex) => {
    // copy the full persons array using slice
    // in a new one
    // const personsArray = this.state.persons.slice();
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);
    // update the state with the new array
    this.setState({ persons: personsArray })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    let personsList = null;
    let btnClass = '';
    if (this.state.showPersons) {
      personsList = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    // get a string "red bold"
    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I am a front end developer</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          onClick={this.togglePersonsHandler}
          className="{btnClass}">Switch Name
 </button>
        {personsList}
      </div>
    );
  }
}
export default App;