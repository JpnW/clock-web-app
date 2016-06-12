import React from 'react'

export default class Root extends React.Component {

  render(){
    return (
      <div>
        <div className='display-buttons'>
          <button>Clock</button>
          <button>Stopwatch</button>
          <button>Alarm</button>
        </div>
      </div>
    )
  }
}