import React from 'react';
import {formatTime} from '../utils.js';
import Analog from './Analog.js';

export default class Clock extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <Analog currentTime ={this.props.currentTime}/>
        <h1 className='digital-time'>{formatTime(this.props.currentTime)}</h1>
      </div>
    )
  }
}