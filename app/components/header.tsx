
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
    return <header ref={element => this.element = element}>
      <div className='grid grid--spaced grid--middle'>
        <Link to='/'><Icon i='logo' /></Link>

        <div className='grid grid--thick_guttered'>
          <div className='col'>
            <NavLink className='header__link' to='/projects'>Projets</NavLink>
          </div>
          <div className='col'>
            <NavLink className='header__link' to='/about'>À propos</NavLink>
          </div>
          <div className='col'>
            <NavLink className='header__link' to='/contact'>Contact</NavLink>
          </div>
          <div className='col'>
            <Link className='header__link' to='#'>En</Link>
          </div>
        </div>
      </div>
    </header>
  }
}