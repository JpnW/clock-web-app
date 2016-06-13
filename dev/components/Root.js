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
    this.setState({option: option});
  }

  _getCurrentTime() {
    this.setState({currentTime: new Date()});
    this.requestCurrentTimeId = requestAnimationFrame(this._getCurrentTime);
  }

  componentWillMount() {
    this._getCurrentTime();
  }

  componentWillUnmount(){
    window.cancelAnimationFrame(this.requestCurrentTimeId);
  }

  toggleClass(className){
    if(this.state.option === className){
      return className + " selected";
    }
    else{
      return className
    }
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
          <button className={this.toggleClass('clock')} onClick={this._handleOptionClick.bind(this, 'clock')}>Clock</button>
          <button className={this.toggleClass('stopwatch')} onClick={this._handleOptionClick.bind(this, 'stopwatch')} >Stopwatch</button>
        </div>
        {element}
      </main>
    )
  }
}