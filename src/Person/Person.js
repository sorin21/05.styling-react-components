import React, { Component } from 'react';

const person = (props) => {
  return (
    <div>
      {/* <p>I use  React for {Math.floor(Math.random() * 10)} years !!!</p> */}
      <p onClick={props.click}>I am {props.name} and I am {props.age} old. I love {props.children || 'nothing'}.</p>
      {/* {console.log('props', props)} */}
      <input type="text" onChange={} />
    </div>

  )
}

export default person;