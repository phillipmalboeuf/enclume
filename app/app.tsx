
import 'normalize.css'
import 'flickity/css/flickity.css'
import '../styles/styles.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/app'


declare global {
  interface Window {
    content: any
    dev: boolean
    gtag: Function
  }
}


if (window.content) {
  ReactDOM.hydrate(<App />, document.getElementById('app'))
} else {
  ReactDOM.render(<App />, document.getElementById('app'))
}