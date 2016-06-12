import React from 'react';
import {formatTime} from '../utils.js';

export default class Clock extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <h1>{formatTime(this.props.currentTime)}</h1>
      </div>
    )
  }
}