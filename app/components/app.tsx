import * as React from 'react'
import * as cookies from 'browser-cookies'
import axios, { AxiosRequestConfig } from 'axios'
import { BrowserRouter } from 'react-router-dom'

import { AppContext } from '../contexts/app'
import { Routes } from '../routes'

import { Header } from './header'
import { Footer } from './footer'


interface Props {}
interface State {
  content: {
    [key:string]: {
      [key:string]: any
    }
  },
  locale: any
}

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      content: window.content,
      locale: cookies.get('locale') || 'fr-CA'
    }
  }

  componentDidMount() {
    if (!this.state.content) { this.fetchContent() }
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

  private fetchContent() {
    axios.get(`${process.env.NODE_ENV === 'production' ? '' : '//localhost:8089'}/content`, {
      withCredentials: true
    })
      .then(response => this.setState({
        content: response.data
      }))
  }

  private selectLocale(locale: string) {
    cookies.set('locale', locale)
    this.setState({ locale })
  }

  public render() {
    return this.state.content
    ? <AppContext.Provider value={{
      content: this.state.content,
      locale: this.state.locale,
      phone: window.innerWidth <= 600,
      fetchContent: this.fetchContent.bind(this),
      selectLocale: this.selectLocale.bind(this)
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
    : null
  }

}