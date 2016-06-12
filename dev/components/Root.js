import React from 'react'

//children components
import Clock from './Clock.js'



export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {option: 'clock', currentTime: null};
    this._handleOptionClick = this._handleOptionClick.bind(this);
    this._getCurrentTime = this._getCurrentTime.bind(this);
    this.requestCurrentTimeId = null;
  }

  _handleOptionClick(option) {
    this.setState({option: option})
  }

  _getCurrentTime() {
    this.setState({currentTime: new Date()});
    this.requestCurrentTimeId = requestAnimationFrame(this._getCurrentTime);
  }

  componentWillMount() {
    this._getCurrentTime();
  }

  componentWillUnmount(){
    window.cancelRequestAnimationFrame(this.requestCurrentTimeId);
  }


  render() {
    let option = this.state.option;
    let element;
    if (option == 'clock') {
      element = <Clock currentTime={this.state.currentTime}/>
    }
    return (
      <main>
        <div className='option-buttons'>
          <button onClick={this._handleOptionClick.bind(this, 'clock')}>Clock</button>
          <button>Stopwatch</button>
          <button>Alarm</button>
        </div>
        {element}
      </main>
    )
  }
}