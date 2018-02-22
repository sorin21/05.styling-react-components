import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'das1', name: 'Sorin', age: '25' },
      { id: 'das2', name: 'Max', age: 38 },
      { id: 'das3', name: 'Cristina', age: 19 }
    ],
    showPersons: false,
    toggleClicked: 0
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    // get a copy the actual person {id: "das1", name: "Sorin", age: "25"}
    const person = {...this.state.persons[personIndex]};

    // get the actual input name value
    person.name = event.target.value;

    // get a copy the persons with the updated name value
    const persons = [...this.state.persons];
    
    // update persons[personIndex] {id: "das1", name: "Sorin", age: "25"} to
    // actual person {id: "das1", name: "Sorindfgd", age: "25"}
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );

      style.backgroundColor = 'red';
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


