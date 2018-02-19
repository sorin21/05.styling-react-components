import React, { Component } from 'react';
import classes from './Person.css'
const person = (props) => {
  return (
    <div className="Person">
      {/* <p>I use  React for {Math.floor(Math.random() * 10)} years !!!</p> */}
      <p onClick={props.click}>I am {props.name} and I am {props.age} old. I love {props.children || 'nothing'}.</p>
      {/* <p onClick={props.click2}>Daa {props.name} and I am {props.age} old. I love {props.children || 'nothing'}.</p> */}
      {/* {console.log('props', props)} */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>

  )
}

export default person;