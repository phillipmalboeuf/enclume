
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'


import { AppContext } from '../contexts/app'
import { Icon } from './icon'

interface Props {
}
interface State {
}

export class Footer extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return <>
      <footer>
        <div className='grid grid--spaced grid--middle'>
          
          <div className='grid grid--guttered grid--middle hide_on_phone'>
            <div className='col'><Link className='a--no_hover' to='/'><Icon i='logo' /></Link></div>
            <div className='col hide_on_phone'><p>Atelier de<br />développement<br />territorial</p></div>
          </div>
          

          <div className='grid grid--thick_guttered'>
            <div className='col col--tablet_portrait--12of12 hide_on_phone' />
            <div className='col'>
              <a href='tel:514-756-4113' target='_blank'>514-756-4113</a><br />
              <a href='mailto:info@enclume.ca' target='_blank'>info@enclume.ca</a>
            </div>
            <div className='col hide_on_phone'>
              <a href='https://goo.gl/maps/jPr4tvzm1AB2' target='_blank'>5337, boulevard<br />
              Saint-Laurent, #350<br />
              Montréal, Québec<br />
              H2T 1S5</a>
            </div>
            <div className='col'>
              <a href='https://www.facebook.com/enclume.ca/' target='_blank'>Facebook</a><br />
              <a href='https://instagram.com/Enclume_atelier' target='_blank'>Instagram</a><br />
              <a href="https://www.linkedin.com/company/l'enclume---atelier-de-d-veloppement-territorial/" target='_blank'>LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  }
}