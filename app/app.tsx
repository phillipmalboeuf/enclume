
import 'normalize.css'
import '../styles/styles.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/app'


declare global {
  interface Window {
    pieces: any,
    response: any,
    // user: User
  }
}


if (window.pieces) {
  ReactDOM.hydrate(<App />, document.getElementById('app'))
} else {
  ReactDOM.render(<App />, document.getElementById('app'))
}