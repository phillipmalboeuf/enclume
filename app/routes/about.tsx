
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { LPE, LE, E, RE } from '../components/entry'
import { Index } from './index'
import { OnScroll } from '../components/animations'
import { PageTransition } from '../components/page_transition'


export class About extends Index {
  

  public render() {
    return <>
      <PageTransition />
      <main className='blue_back' role='main'>
        <Icon i='anvil_blue' />

        <div className='padded padded--big_top'>
          <OnScroll className='grid medium_bottom'>
            <h2 className='col col--7of12 col--tablet_portrait--9of12 col--phone--12of12'>
              <E c='about' k='intro' />
            </h2>
          </OnScroll>

          <OnScroll className='grid grid--guttered'>
            <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--6of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 2 })}>
              <RE c='about' k='introBodyLeft' />
            </div>
            <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--6of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 1 })}>
              <RE c='about' k='introBodyRight' />
            </div>
          </OnScroll>

          <div className='big_bottom' />

          <OnScroll className='grid grid--guttered grid--middle'>
            <div className='col col--12of12' ref={element => this.parallax.push({ e: element, l: 1.5 })}>
              <E c='about' k='categoriesTitle' />
            </div>
            <div className='col col--6of12 col--tablet_portrait--9of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 1.5 })}>
              {this.context.content.categories.map(category => <h3>{category.fields.title}</h3>)}
            </div>
            <div className='col col--5of12 col--tablet_landscape--6of12 col--tablet_portrait--9of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 0.75 })}><p className='medium'><E c='about' k='categoriesBody' /></p></div>
          </OnScroll>

          <div className='big_bottom' />

          <OnScroll className='grid grid--guttered'>
            <div className='col col--12of12' ref={element => this.parallax.push({ e: element, l: 1.5 })}>
              <h6><E c='about' k='teamTitle' /></h6>
            </div>
            <div className='col col--8of12 col--tablet_portrait--10of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 3 })}><p className='big'><E c='about' k='teamBody' /></p></div>

            <div className='col col--12of12'></div>
            {this.context.content.team_members.map(member => <div key={member.fields.name} className='col col--4of12 col--tablet_portrait--6of12'>
              <a className='a--no_hover'>
                <div className='relative'>
                  <LPE c={member} k='photo' />
                  <div className='img_hover padded teal_back'>
                    <h2><LE c={member} k='name' /></h2>
                    <h2><LE c={member} k='description' /></h2>
                  </div>
                </div>
                <div className='tablet_portrait_only'>
                  <h3><LE c={member} k='name' /></h3>
                </div>
              </a>
            </div>)}
          </OnScroll>

          <div className='big_bottom' />

          <OnScroll className='grid grid--tight_guttered'>
            <div className='col col--12of12' ref={element => this.parallax.push({ e: element, l: -1.5 })}>
              <h6><E c='about' k='collaboratorsTitle' /></h6>
            </div>
            <div ref={element => this.parallax.push({ e: element, l: -3 })} className='col col--8of12 col--tablet_portrait--10of12 col--phone--12of12'><p className='big'><E c='about' k='collaboratorsBody' /></p></div>

            <div className='col col--12of12'></div>
            {this.context.content.collaborators.map(collaborator => <div key={collaborator.fields.name} className='col col--9of12 col--tablet_landscape--11of12 col--tablet_portrait--12of12' ref={element => this.parallax.push({ e: element, l: -0.5 })}>
              <hr />
              <a href={`${collaborator.fields.url}`} target='_blank'>
                <div className='grid grid--guttered grid--middle'>
                  <div className='col col--5of12 col--tablet_landscape--6of12 col--tablet_portrait--9of12 col--phone--12of12'>
                    <h2><LE c={collaborator} k='name' /></h2>
                  </div>
                  <div className='col col--7of12 col--tablet_landscape--6of12 col--tablet_portrait--9of12 col--phone--12of12'>
                    <LE c={collaborator} k='description' />
                  </div>
                </div>
              </a>
            </div>)}
          </OnScroll>

          <div className='big_bottom' />
        </div>
      </main>
    </>
  }
}