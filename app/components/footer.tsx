
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
    return <footer>
      <div className='grid grid--spaced grid--middle'>
        
        <div className='grid grid--guttered grid--middle'>
          <div className='col'><Link to='/'><Icon i='logo' /></Link></div>
          <div className='col'><p>Atelier de<br />développement<br />territorial</p></div>
        </div>
        

        <div className='grid grid--thick_guttered'>
          <div className='col'>
            514-756-4113<br />
            info@enclume.ca
          </div>
          <div className='col'>
            5337, boulevard<br />
            Saint-Laurent, #350<br />
            Montréal, Québec<br />
            H2T 1S5
          </div>
          <div className='col'>
            facebook<br />
            instagram
          </div>
        </div>
      </div>
    </footer>
  }
}