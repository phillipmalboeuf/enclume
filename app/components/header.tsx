
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'


import { AppContext } from '../contexts/app'
import { Icon } from './icon'

interface Props {
}
interface State {
}

export class Header extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>
  public element: HTMLElement
  public summary: HTMLElement

  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    let Headroom = require('headroom.js')
    let hr = new Headroom(this.element, {
      offset : 66,
      tolerance: {
        up: 24
      }
    })
    hr.init()
  }

  render() {
    return <>
      <header ref={element => this.element = element}>
        <div className='grid grid--spaced grid--center_on_tablet_portrait grid--middle'>
          <Link className='a--no_hover a--no_underline' to='/'><Icon i='logo' /></Link>

          <div className='grid grid--thick_guttered hide_on_tablet_portrait'>
            <div className='col'>
              <NavLink className='header__link' to='/projects'>
                {this.context.locale === 'fr-CA' ? 'Projets' : 'Projects'}
              </NavLink>
            </div>
            <div className='col'>
              <NavLink className='header__link' to='/about'>
                {this.context.locale === 'fr-CA' ? 'À propos' : 'About us'}
              </NavLink>
            </div>
            <div className='col'>
              <NavLink className='header__link' to='/awards'>
                {this.context.locale === 'fr-CA' ? 'Prix Enclume' : 'Enclume awards'}
              </NavLink>
            </div>
            <div className='col'>
              <NavLink className='header__link' to='/contact'>
                {this.context.locale === 'fr-CA' ? 'Contact' : 'Contact'}
              </NavLink>
            </div>
            {/* <div className='col'>
              <a className='header__link' onClick={()=> {
                this.context.selectLocale(this.context.locale === 'fr-CA' ? 'en-US' : 'fr-CA')
                this.context.fetchContent()
              }}>{this.context.locale === 'fr-CA' ? 'En' : 'Fr'}</a>
            </div> */}
          </div>
        </div>
      </header>
      <details className='menu tablet_portrait_only'>
        <summary ref={summary => this.summary = summary} />

        <div className='menu__container grid grid--vertically_spaced'>
          <div className='col menu__item'>
            <NavLink className='header__link' to='/projects' onClick={e => this.summary.click()}>
              {this.context.locale === 'fr-CA' ? 'Projets' : 'Projects'}
            </NavLink>
          </div>
          <div className='col menu__item'>
            <NavLink className='header__link' to='/about' onClick={e => this.summary.click()}>
              {this.context.locale === 'fr-CA' ? 'À propos' : 'About us'}
            </NavLink>
          </div>
          <div className='col menu__item'>
            <NavLink className='header__link' to='/awards' onClick={e => this.summary.click()}>
              {this.context.locale === 'fr-CA' ? 'Prix Enclume' : 'Enclume awards'}
            </NavLink>
          </div>
          <div className='col menu__item'>
            <NavLink className='header__link' to='/contact' onClick={e => this.summary.click()}>
              {this.context.locale === 'fr-CA' ? 'Contact' : 'Contact'}
            </NavLink>
          </div>
          {/* <div className='col menu__item'>
            <a className='header__link' onClick={()=> {
              this.context.selectLocale(this.context.locale === 'fr-CA' ? 'en-US' : 'fr-CA')
              this.context.fetchContent()
            }}>{this.context.locale === 'fr-CA' ? 'En' : 'Fr'}</a>
          </div> */}
        </div>
      </details>
    </>
  }
}