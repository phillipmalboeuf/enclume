
import * as React from 'react'

import { Link, RouteComponentProps, NavLink } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { Picture } from '../components/picture'
import { LE, LPE, RE, LRE } from '../components/entry'
import { Index } from './index'
import { OnScroll } from '../components/animations';



export class ProjectsProject extends Index {

  public render() {
    let project = this.context.content.projects.find(project => project.fields.url === this.props.match.params.project)
    let previous = this.context.content.projects.find(project => project.fields.url === project.fields.previous)
    let next = this.context.content.projects.find(project => project.fields.url === project.fields.next)
    return <>
      <main className='relative' role='main'>
        {({
          planning: <>
          <Icon i='anvil_project_green_top' />
          <Icon i='anvil_project_green_bottom' />
          </>,
          participation: <>
          <Icon i='anvil_project_red_top' />
          <Icon i='anvil_project_red_bottom' />
          </>,
          research: <>
          <Icon i='anvil_project_beige_top' />
          <Icon i='anvil_project_beige_bottom' />
          </>
        } as any)[project.fields.category.fields.key]}

        <div className='padded padded--big_top'>
          <OnScroll className='padded medium_bottom max_width max_width--wide max_width--center'>
            <LPE c={project} k={'hero'} />
          </OnScroll>

          <h1 ref={element => this.parallax.push({ e: element, l: 1 })}><OnScroll><LE c={project} k={'title'} /></OnScroll></h1>

          <div ref={element => this.parallax.push({ e: element, l: 1.5 })} className='medium_bottom max_width'>
            <OnScroll><LRE c={project} k={'description'} /></OnScroll>
          </div>

          <div ref={element => this.parallax.push({ e: element, l: 2 })} className='grid grid--thick_guttered grid--spaced_around grid--middle'>
            {project.fields.gallery.map((photo: any, index: number)=> <OnScroll key={photo.fields.file.url} className={`col col--${project.fields.galleryGridSizes[index]}of12 col--tablet_portrait--12of12`}>
              <Picture src={photo.fields.file.url} />

              <div className='normal_bottom hide_on_tablet_portrait' />
            </OnScroll>)}
          </div>
        </div>
      </main>
      <div className='grid'>
        <Link to={previous.fields.url} className='col col--6of12 col--tablet_portrait--12of12 grid grid--spaced grid--middle orange_back padded'>
          <span className='big' style={{ transform: 'rotate(90deg)' }}>↓</span>
          <h3 className='flat_bottom'><LE c={previous} k={'title'} /></h3>
        </Link>
        <Link to={next.fields.url} className='col col--6of12 col--tablet_portrait--12of12 grid grid--spaced grid--middle green_back padded'>
          <h3 className='flat_bottom'><LE c={next} k={'title'} /></h3>
          <span className='big' style={{ transform: 'rotate(-90deg)' }}>↓</span>
        </Link>
      </div>
    </>
  }
}