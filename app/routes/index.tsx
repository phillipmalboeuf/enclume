
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

  protected parallax: { e: HTMLDivElement, l: number }[] = []
  private position: number
  private animation: number

  constructor(props: Props) {
    super(props)
    this.scroll = this.scroll.bind(this)
  }

  componentDidMount() {
    if (!this.context.phone) {
      this.scroll()
      this.position = 0
      this.animation = window.requestAnimationFrame(this.scroll)
    }
  }

  componentWillUnmount(){
    if (!this.context.phone) {
      window.cancelAnimationFrame(this.animation)
    }
  }

  private scroll() {
    if(this.position != window.scrollY) {
      this.parallax.forEach(p => p.e.style.transform = `translateY(-${window.scrollY/p.l/8}px)`)
      this.animation = window.requestAnimationFrame(this.scroll)
      this.position = window.scrollY
    } else {
      this.animation = window.requestAnimationFrame(this.scroll)
    }
  }

  public render() {
    return <>
      <main role='main'>

        <div className='padded padded--big_top relative nooverflow'>
          <Icon i='anvil_homepage' />

          <h2 ref={element => this.parallax.push({ e: element, l: 2 })} className='max_width max_width--tight'><E c='homepage' k='description' /></h2>
          <div className='big_bottom' />

          <div className='grid grid--thick_guttered grid--spaced_around grid--middle'>
            {this.context.content.homepage.fields.projects.map((project: any, index: number)=> <div key={project.fields.url} ref={element => this.parallax.push({ e: element, l: 2 - (index % 3 === 0 ? 0.5 : index % 3 === 1 ? 1 : 0)  })} className={`col col--${this.context.content.homepage.fields.projectsGridSizes[index]}of12 col--tablet_portrait--12of12`}>
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

      <div className='padded padded--thick overflow_top text_center teal_back'>
        <Link to='/projects' className='big' style={{ zIndex: 1 }}><E c='homepage' k='cta' /></Link>
      </div>
    </>
  }
}