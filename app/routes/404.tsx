
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'


interface Props extends RouteComponentProps<any> {}
interface State {}


export class FourOFour extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <main className='main blue_back relative' role='main'>
        <Icon i='anvil_404' />
        <div className='grid grid--full grid--middle grid--center text_center'>
          <div>
            <h1 className='h1--giant'>404</h1>
            <Link to='/'>Retour à l'acceuil</Link>
          </div>
        </div>
      </main>
    </>
  }
}