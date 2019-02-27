
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'


interface Props extends RouteComponentProps<any> {}
interface State {}


export class About extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <div className='main' role='main'>
        <div className='grid grid--full grid--middle grid--center'>
          About
        </div>
      </div>
    </>
  }
}