import React from 'react'
import {formatStopwatch} from '../utils.js'

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='stopwatch'>
        <h1>{formatStopwatch(this.props.diff)}</h1>
        <div className='stopwatch-buttons'>
          <button className={this.props._toggleStopwatchButtonClassName('start-button')}
                  onClick={this.props._handleStartClick}>
            START
          </button>
          <button className={this.props._toggleStopwatchButtonClassName('stop-button')}
                  onClick={this.props._handleStopClick}>
            STOP
          </button>
          <button className='reset-button' onClick={this.props._handleResetClick}>
            RESET
          </button>

        </div>

      </section>
    )
  }
}