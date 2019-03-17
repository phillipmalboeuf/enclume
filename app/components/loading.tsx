
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { AppContext } from '../contexts/app'
import { Icon } from './icon'
import { PE } from './entry'
import { Fade, FadeOut } from './animations'

interface Props {
}
interface State {
}

export class Loading extends React.PureComponent<Props, State> {
  public element: HTMLElement

  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return <>
      <FadeOut className='grid grid--full grid--middle grid--center hero hero--landing'>
        <PE c='homepage' k='hero' />
        <Icon i='anvil_hero' />
        <Icon i='logo' />
      </FadeOut>
    </>
  }
}