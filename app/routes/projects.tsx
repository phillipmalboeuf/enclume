
import * as React from 'react'

import { Link, RouteComponentProps, NavLink } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { Picture } from '../components/picture'


interface Props extends RouteComponentProps<any> {}
interface State {}


export class Projects extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <main className='' role='main'>
        <div className='padded padded--big_top'>
          <nav className='grid grid--guttered'>
            <div className='col'><NavLink className='header__link' to='/projects'>Tous</NavLink></div>
            <div className='col'><NavLink className='header__link' to='/projects?tags=planning'>Planification et Conception</NavLink></div>
            <div className='col'><NavLink className='header__link' to='/projects?tags=research'>Recherche et Analyse</NavLink></div>
            <div className='col'><NavLink className='header__link' to='/projects?tags=participation'>Accompagnement et Participation publique</NavLink></div>
          </nav>

          <div className='normal_bottom' />

          <div className='grid grid--guttered'>
            {Array(12).fill({}).map((project, index)=> <div key={index} className='col col--4of12'>
              <Link to={`/projects/${index}`}>
                <div className=''><Picture src={'/enclume/caserne.jpg'} small /></div>
                <p className='slight'>
                  Caserne 26
                </p>
              </Link>
            </div>)}
          </div>

          <div className='medium_bottom' />
        </div>
      </main>
    </>
  }
}