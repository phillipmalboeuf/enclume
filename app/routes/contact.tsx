
import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { E, RE } from '../components/entry'
import { Fade, OnScroll } from '../components/animations'
import { PageTransition } from '../components/page_transition'


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
      <PageTransition />
      <main className='teal_back' role='main'>
        <Icon i='anvil_orange' />

        <div className='grid grid--full grid--middle'>
          <OnScroll className='padded'>
            <p className='big'>
              <a href={`tel:${this.context.content.contact.fields.phoneNumber}`} target='_blank'><E c='contact' k='phoneNumber' /></a><br />
              <a href={`mailto:${this.context.content.contact.fields.emailAddress}`} target='_blank'><E c='contact' k='emailAddress' /></a>
            </p>

            <p className='big'>
              <a href='https://goo.gl/maps/jPr4tvzm1AB2' target='_blank'>
                <E c='contact' k='address' />
              </a>
            </p>

            <div className='max_width max_width--tight underline_links'>
              <RE c='contact' k='information' />
            </div>
          </OnScroll>
          
        </div>
      </main>
    </>
  }
}