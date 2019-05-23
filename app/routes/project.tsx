
import * as React from 'react'

import { Link, RouteComponentProps, NavLink } from 'react-router-dom'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { Picture } from '../components/picture'
import { LE, LPE, RE, LRE } from '../components/entry'
import { Index } from './index'
import { OnScroll } from '../components/animations'
import { PageTransition } from '../components/page_transition'
import { Helm } from '../components/helm'



export class ProjectsProject extends Index {

  public render() {
    let project = this.context.content.projects.find(project => project.fields.url === this.props.match.params.project)
    let previous = this.context.content.projects.find(p => p.fields.url === project.fields.previous)
    let next = this.context.content.projects.find(p => p.fields.url === project.fields.next)
    return <>
      <Helm title={project.fields.title} description={documentToPlainTextString(project.fields.description)} />
      <PageTransition />
      <main className='relative' role='main'>
        {({
          planning: <Icon i='anvil_project_green' />,
          participation: <Icon i='anvil_project_red' />,
          research: <Icon i='anvil_project_beige' />
        } as any)[project.fields.category && project.fields.category.fields.key]}

        <div className='padded padded--big_top'>
          <OnScroll className='padded big_bottom max_width max_width--center max_width--wide'>
            <div className='fixed_ratio_img'><LPE c={project} k={'hero'} /></div>
          </OnScroll>

          <h1 ref={element => this.parallax.push({ e: element, l: 1.5 })}><OnScroll><LE c={project} k={'title'} /></OnScroll></h1>

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
        {previous && <Link to={previous.fields.url} className='col col--6of12 col--tablet_portrait--12of12 grid grid--spaced grid--middle orange_back padded'>
          <span className='big' style={{ transform: 'rotate(90deg)' }}>↓</span>
          <h3 className='flat_bottom'><LE c={previous} k={'title'} /></h3>
        </Link>}
        {next && <Link to={next.fields.url} className='col col--6of12 col--tablet_portrait--12of12 grid grid--spaced grid--middle teal_back padded'>
          <h3 className='flat_bottom'><LE c={next} k={'title'} /></h3>
          <span className='big' style={{ transform: 'rotate(-90deg)' }}>↓</span>
        </Link>}
      </div>
    </>
  }
}