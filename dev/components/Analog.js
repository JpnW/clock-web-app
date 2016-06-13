import React from 'react'

export default class Analog extends React.Component {
  constructor(props) {
    super(props);
    this._getAnalogUpdate = this._getAnalogUpdate.bind(this);
    this.requestAnalogUpdateId = null;
  }

  _getAnalogUpdate() {
    let repeat = (el, deg)=> {
      this.refs[el].setAttribute('transform', `rotate(${deg} 50 50)`)
    };
    let currentTime = this.props.currentTime;
    let hr = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    repeat('hr', 30 * hr + min / 2);
    repeat('min', 6 * min);
    repeat('sec', 6 * sec);
    this.requestAnalogUpdateId = window.requestAnimationFrame(this._getAnalogUpdate);
  }

  componentDidMount() {
    this._getAnalogUpdate();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestAnalogUpdateId);
  }

  render() {
    const currentTime = this.props.currentTime;
    const hr = currentTime.getHours();
    const min = currentTime.getMinutes();
    const sec = currentTime.getSeconds();

    return (
      <div className='analog-container'>
        <svg className='analog' viewBox='0 0 100 100'>
          <circle className='circle' cx='50' cy='50' r='45'/>
          <g>
            <rect ref='hr' className='hr' x='47.5' y='12.5' width='5' height='40' rx='2.5' ry='2.55'/>
            <rect ref='min' className='min' x='48.5' y='12.5' width='3' height='40' rx='2' ry='2'/>
            <line ref='sec' className='sec' x1='50' y1='50' x2='50' y2='16'/>
          </g>
        </svg>
      </div>
    )
  }
}
