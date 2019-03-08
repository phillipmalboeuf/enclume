
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

  private parallax: HTMLDivElement[] = []
  private vertical: boolean

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.scroll()
    this.vertical = window.innerWidth - 400 < window.innerHeight
    window.addEventListener('scroll', this.scroll.bind(this))
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scroll.bind(this))
  }

  private scroll() {
    this.parallax.forEach(p => p.style.transform = `translateY(-${window.scrollY/10}px)`)
  }

  public render() {
    return <>
      <main role='main'>
        <div className='grid grid--full grid--middle grid--center hero'>
          <PE c='homepage' k='hero' />
          <Icon i='anvil_hero' />
          <div ref={element => this.parallax.push(element)}><Icon i='logo' /></div>
        </div>

        <div className='padded padded--big_top relative nooverflow'>
          <Icon i='anvil_homepage' />

          <h2 ref={element => this.parallax.push(element)} className='max_width max_width--tight'><E c='homepage' k='description' /></h2>
          <div className='big_bottom' />

          <div className='grid grid--thick_guttered grid--spaced_around grid--middle'>
            {this.context.content.homepage.fields.projects.map((project: any, index: number)=> <div key={project.fields.url} ref={element => this.parallax.push(element)} className={`col col--${this.context.content.homepage.fields.projectsGridSizes[index]}of12 col--tablet_portrait--12of12`}>
              <Link to={`/projects/${project.fields.url}`}>
                <div className='small_bottom'><LPE c={project} k='hero' /></div>
                <h3>
                  <LE c={project} k='title' />
                </h3>
              </Link>

              <div className='normal_bottom hide_on_tablet_portrait' />
            </div>)}
          </div>
          
        </div>
      </main>

      <div className='padded padded--thick padded--big_top overflow_top text_center teal_back'>
        <Link to='/projects' className='underline big' style={{ zIndex: 1 }}><E c='homepage' k='cta' /></Link>
      </div>
    </>
  }
}