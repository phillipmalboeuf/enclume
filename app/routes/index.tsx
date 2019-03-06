
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { E, PE, LPE, LE } from '../components/entry'


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
    console.log(this.context.content.homepage.fields.projectsGridSizes)
    return <>
      <main role='main'>
        <div className='grid grid--full grid--middle grid--center hero'>
          <PE c='homepage' k='hero' />
          <Icon i='anvil_hero' />
          <Icon i='logo' />
        </div>

        <div className='padded padded--big_top relative'>
          <Icon i='anvil_homepage' />

          <h2 className='max_width max_width--tight'><E c='homepage' k='description' /></h2>
          <div className='big_bottom' />

          <div className='grid grid--thick_guttered grid--spaced_around grid--middle'>
            {this.context.content.homepage.fields.projects.map((project: any, index: number)=> <div key={project.fields.url} className={`col col--${this.context.content.homepage.fields.projectsGridSizes[index]}of12 col--tablet_portrait--12of12`}>
              <Link to={`/projects/${project.fields.url}`}>
                <div className='small_bottom'><LPE c={project} k='hero' /></div>
                <h3>
                  <LE c={project} k='title' />
                </h3>

                <div className='normal_bottom' />
              </Link>
            </div>)}
          </div>
          
        </div>
      </main>

      <div className='padded padded--thick padded--big_top overflow_top text_center teal_back'>
        <Link to='/projects' className='underline big'><E c='homepage' k='cta' /></Link>
      </div>
    </>
  }
}