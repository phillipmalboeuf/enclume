
import * as React from 'react'
import { Link, RouteComponentProps, NavLink } from 'react-router-dom'
import query from 'query-string'

import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { Picture } from '../components/picture'
import { LE, LPE } from '../components/entry'
import { OnScroll } from '../components/animations'


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
      <main className={`${current_category ? ({
        planning: 'light_green_back',
        participation: 'red_back',
        research: 'beige_back'
      } as any)[current_category as string] : ''}`} role='main'>
        <div className='padded padded--big_top'>
          <nav className='grid grid--guttered'>
            <OnScroll className='col col--tablet_portrait--12of12'><Link className={`header__link${current_category ? '' : ' active'}`} to='/projects'>Tous</Link></OnScroll>
            {this.context.content.categories.map(category => <OnScroll className='col' key={category.fields.title}>
              <Link className={`header__link${current_category === category.fields.key ? ' active' : ''}`} to={`/projects?category=${category.fields.key}`}><LE c={category} k='title' /></Link>
            </OnScroll>)}
          </nav>

          <div className='normal_bottom' />

          <div className='grid grid--guttered'>
            {this.context.content.projects.filter(project => !current_category || project.fields.category.fields.key === current_category).map(project => <div key={project.fields.url} className='col col--4of12 col--tablet_landscape--6of12 col--tablet_portrait--12of12'>
              <Link to={`/projects/${project.fields.url}`}>
                <OnScroll>
                  <div className='small_bottom'><LPE c={project} k='hero' /></div>
                  <p className='slight'>
                    <LE c={project} k='title' />
                  </p>
                </OnScroll>
              </Link>
            </div>)}
          </div>

          <div className='medium_bottom' />
        </div>
      </main>
    </>
  }
}