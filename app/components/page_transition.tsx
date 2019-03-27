import * as React from 'react'
import { Transition } from './animations'
import { Icon } from './icon'

interface Props {}
export const PageTransition: React.SFC<Props> = props => {
  return <Transition keys={[]} className={`grid grid--full grid--middle grid--center hero hero--transition hero--transition--${Math.floor(Math.random() * 3)} relative`}>
    <Transition keys={['anvil']} className='grid grid--full grid--middle grid--center'>
      <Icon key={'anvil'} i={['anvil_transition_red', 'anvil_transition_green', 'anvil_transition_orange'][Math.floor(Math.random() * 3)]} />
    </Transition>
  </Transition>
}