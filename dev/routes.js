import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Root from './components/Root.js'

render(
<Router history={browserHistory}>
  <Route path="/" component={Root} />
  </Router>, document.getElementById('root'));