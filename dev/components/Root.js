import React from 'react'

//children components
import Clock from './Clock.js'
import Stopwatch from './Stopwatch.js'



export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {option: 'clock', showStopwatchButton: 'start-button', currentTime: null, lastStoppedTime: 0, diff: 0};
    this._handleOptionClick = this._handleOptionClick.bind(this);
    this._getCurrentTime = this._getCurrentTime.bind(this);
    this._tick = this._tick.bind(this);
    this._handleStartClick = this._handleStartClick.bind(this);
    this._handleStopClick = this._handleStopClick.bind(this);
    this._handleResetClick = this._handleResetClick.bind(this);
    this._toggleOptionClassName = this._toggleOptionClassName.bind(this);
    this._toggleStopwatchButtonClassName = this._toggleStopwatchButtonClassName.bind(this);
    this.requestStopwatchId = null;
  }

  _handleOptionClick(option) {
    this.setState({option: option});
  }

  _getCurrentTime() {
    this.setState({currentTime: new Date()});
    window.requestAnimationFrame(this._getCurrentTime);
  }

  _tick(start) {
    this.requestStopwatchId = window.requestAnimationFrame(()=> {
      let current = Date.now();
      let diff = current - start + this.state.lastStoppedTime;
      this.setState({diff: diff});
      this._tick(start);
    })
  }

  _handleStartClick() {
    let start = Date.now();
    this._tick(start);
    this.setState({showStopwatchButton: 'stop-button'});
  }

  _handleStopClick() {
    window.cancelAnimationFrame(this.requestStopwatchId);
    this.setState({lastStoppedTime: this.state.diff, showStopwatchButton: 'start-button'});
  }

  _handleResetClick() {
    window.cancelAnimationFrame(this.requestStopwatchId);
    this.setState({lastStoppedTime: 0, diff: 0});
  }


  componentWillMount() {
    this._getCurrentTime();
  }

  _toggleOptionClassName(className) {
    if (this.state.option === className) {
      return className + " selected";
    }
    else {
      return className;
    }
  }

  _toggleStopwatchButtonClassName(className) {
    if (this.state.showStopwatchButton === className) {
      return className;
    } else {
      return className + " disabled";
    }
  }

  render() {
    let option = this.state.option;
    let element;
    if (option == 'clock') {
      element = <Clock currentTime={this.state.currentTime}/>
    } else if (option === 'stopwatch') {
      element = <Stopwatch diff={this.state.diff}
                           _handleStartClick={this._handleStartClick}
                           _handleStopClick={this._handleStopClick}
                           _handleResetClick={this._handleResetClick}
                           _toggleStopwatchButtonClassName={this._toggleStopwatchButtonClassName}/>
    }

    return (
      <main>
        <div className='option-buttons'>
          <button className={this._toggleOptionClassName('clock')}
                  onClick={this._handleOptionClick.bind(this, 'clock')}>
            Clock
          </button>
          <button className={this._toggleOptionClassName('stopwatch')}
                  onClick={this._handleOptionClick.bind(this, 'stopwatch')}>
            Stopwatch
          </button>
        </div>
        {element}
      </main>
    )
  }
}