
import * as React from 'react'
import { Link, RouteComponentProps, NavLink } from 'react-router-dom'
import query from 'query-string'

import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { Picture } from '../components/picture'
import { LE, LPE } from '../components/entry'


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
    let current_category = query.parse(this.props.location.search).category
    return <>
      <main className={`${current_category ? current_category === 'planning' ? 'blue_back' : 'light_green_back' : ''}`} role='main'>
        <div className='padded padded--big_top'>
          <nav className='grid grid--guttered'>
            <div className='col'><Link className={`header__link${current_category ? '' : ' active'}`} to='/projects'>Tous</Link></div>
            {this.context.content.categories.map(category => <div className='col' key={category.fields.title}>
              <Link className={`header__link${current_category === category.fields.key ? ' active' : ''}`} to={`/projects?category=${category.fields.key}`}><LE c={category} k='title' /></Link>
            </div>)}
          </nav>

          <div className='normal_bottom' />

          <div className='grid grid--guttered'>
            {this.context.content.projects.filter(project => !current_category || project.fields.category.fields.key === current_category).map(project => <div key={project.fields.url} className='col col--4of12'>
              <Link to={`/projects/${project.fields.url}`}>
                <div className='small_bottom'><LPE c={project} k='hero' /></div>
                <p className='slight'>
                  <LE c={project} k='title' />
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