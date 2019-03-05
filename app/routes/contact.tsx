
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { E } from '../components/entry';


interface Props extends RouteComponentProps<any> {}
interface State {}


export class Contact extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <main className='teal_back' role='main'>
        <Icon i='anvil_orange' />

        <div className='grid grid--full grid--middle'>
          <div className='padded'>
            <p className='big'>
              <a href={`tel:${this.context.content.contact.fields.phoneNumber}`} target='_blank'><E c='contact' k='phoneNumber' /></a><br />
              <a href={`mailto:${this.context.content.contact.fields.emailAddress}`} target='_blank'><E c='contact' k='emailAddress' /></a>
            </p>

            <p className='big'>
              <a href='https://goo.gl/maps/jPr4tvzm1AB2' target='_blank'>
                <E c='contact' k='address' />
              </a>
            </p>

            <p className='max_width max_width--tight'>Pour toutes demande de stage ou pour une candidature spontanée veuillez nous contacter à <a href='mailto:info@enclume.ca' target='_blank'>carrieres@enclume.ca</a></p>
          </div>
          
        </div>
      </main>
    </>
  }
}