
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { E } from '../components/entry';


interface Props extends RouteComponentProps<any> {}
interface State {}


export class Index extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <main role='main'>
        {/* <div className='grid grid--full grid--middle grid--center'>
          <Icon i='logo' />
        </div> */}

        <div className='padded padded--big_top'>
          <h2 className='max_width max_width--tight'><E c='homepage' k='description' /></h2>
        </div>
      </main>

      <div className='padded padded--thick padded--big_top text_center teal_back'>
        <Link to='/projects' className='underline big'><E c='homepage' k='cta' /></Link>
      </div>
    </>
  }
}