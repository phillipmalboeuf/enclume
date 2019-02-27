import * as React from 'react'
import * as cookies from 'browser-cookies'
import { BrowserRouter } from 'react-router-dom'

import { AppContext } from '../contexts/app'
import { Routes } from '../routes'

import { Header } from './header'
import { Footer } from './footer';


interface Props {}
interface State {
  pieces: any,
  response: any,
  locale: any,
  editable: boolean,
  // user: User
}

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      pieces: window.pieces,
      response: window.response,
      locale: cookies.get('locale') || 'en_US',
      editable: cookies.get('editable') === 'true' || false,
      // user: new User({_id: cookies.get('Session-Id') ? 'me' : undefined})
    }
  }

  componentDidMount() {
    if (!this.state.pieces) { this.fetchPieces() }
    // if (this.state.user._id) { this.state.user.fetch().then(user => {
    //   // if (window.gtag) {
    //   //   gtag('config', 'UA-40301409-8', { 'user_id': user._id })
    //   // }
    //   window.user = user
    //   this.setState({ user })
    // }) }
    // if (!cookies.get('locale')) { this.ipcheck() }

    // if (window.gtag && window.performance) {
    //   gtag('event', 'timing_complete', {
    //     'name': 'load',
    //     'value': Math.round(performance.now()),
    //     'event_category': 'JS Dependencies'
    //   })
    // }
  }

  componentDidCatch(error: Error, info: any) {
    // this.setState({ error })
    // Sentry.withScope(scope => {
    //   Object.keys(info).forEach(key => {
    //     scope.setExtra(key, info[key])
    //   })
    //   Sentry.captureException(error)
    // })
  }

  private fetchPieces() {
    // Piece.list().then(pieces => this.setState({ pieces }))
  }

  private fetchUser() {
    // new User({_id: 'me'}).fetch().then(user => this.setState({ user }))
  }

  private clearUser() {
    // this.setState({ user: new User({_id: undefined}) })
  }

  private selectLocale(locale: string) {
    cookies.set('locale', locale)
    this.setState({ locale })
  }

  private setEditable(editable: boolean) {
    cookies.set('editable', editable.toString())
    this.setState({ editable })
  }

  public render() {
    return <AppContext.Provider value={{
      pieces: this.state.pieces,
      response: this.state.response,
      // user: this.state.user,
      locale: this.state.locale,
      editable: this.state.editable,
      phone: window.innerWidth <= 600,
      fetchPieces: this.fetchPieces.bind(this),
      fetchUser: this.fetchUser.bind(this),
      clearUser: this.clearUser.bind(this),
      selectLocale: this.selectLocale.bind(this),
      setEditable: this.setEditable.bind(this)
    }}>
      <BrowserRouter>
        <>
          <Header />
          <Routes onRoute={()=> {
            window.scrollTo(0, 0)
          }} />
          <Footer />
        </>
      </BrowserRouter>
    </AppContext.Provider>
  }

}