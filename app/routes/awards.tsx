
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { LPE, LE, E, RE, LRE } from '../components/entry'
import { Index } from './index'
import { OnScroll } from '../components/animations'
import { PageTransition } from '../components/page_transition'
import { Accordion } from '../components/accordion'
import { Slider } from '../components/slider'
import { Picture } from '../components/picture';


export class Awards extends Index {
  

  public render() {
    return <>
      <PageTransition />
      <main className='' role='main'>

        <div className='padded padded--big_top'>
          <OnScroll className='grid medium_bottom'>
            <h3 className='col col--7of12 col--tablet_portrait--9of12 col--phone--12of12'>
              <E c='awards_page' k='introduction' />
            </h3>
          </OnScroll>
        </div>

        <Accordion items={[
          ...this.context.content.awards.sort((a, b)=> parseInt(a.fields.year) > parseInt(b.fields.year) ? -1 : 1).map(award => ({
            title: <h1 className='h1--massive' style={{ display: 'block' }}>
              <OnScroll className='grid grid--middle grid--guttered'>
                <div className='col col--2of12 col--tablet_landscape--3of12 col--phone--12of12'><LE c={award} k='year' /></div>
                <div className='col col--10of12 col--tablet_landscape--9of12 col--phone--12of12'><LE c={award} k='name' /></div>
              </OnScroll>
            </h1>,
            body: <OnScroll className='grid grid--guttered slight'>
              <div className='col col--2of12 col--tablet_landscape--3of12 hide_on_phone'>
                <LPE c={award} k='photo' />
              </div>
              <div className='col col--10of12 col--tablet_landscape--9of12 col--phone--12of12 max_width'>
                <LRE c={award} k='description' />
                <div className='medium_bottom' />
                <Slider slides={award.fields.slider.map((slide: any, index: number)=>
                  <div key={slide.sys.id}>
                    <div className='normal_bottom'><Picture src={slide.fields.file.url} /></div>
                    <div className='grid grid--guttered grid--middle'>
                      <div className='col'>
                        <h3>{index + 1} / {award.fields.slider.length}</h3>
                      </div>
                      <div className='col max_width max_width--tight'>
                        <div className='small'>{slide.fields.description}</div>
                      </div>
                    </div>
                  </div>
                )} />
              </div>
            </OnScroll>
          })),
          {
            title: <h1 className='h1--massive' style={{ display: 'block' }}>
              <OnScroll className='grid grid--middle grid--guttered'>
                <div className='col col--2of12 col--tablet_landscape--3of12 col--phone--12of12'>?</div>
                <div className='col col--10of12 col--tablet_landscape--9of12 col--phone--12of12'><E c='awards_page' k='informationTitle' /></div>
              </OnScroll>
            </h1>,
            body: <OnScroll className='grid grid--guttered slight'>
              <div className='col col--2of12 col--tablet_landscape--3of12 hide_on_phone'>
              </div>
              <div className='col col--10of12 col--tablet_landscape--9of12 col--phone--12of12 max_width'>
                <Slider draggable={false} progress={this.context.content.awards_page.fields.informationPage.map((slide: any)=>
                  ({ label: <LE c={slide} k='title' /> })
                )} slides={this.context.content.awards_page.fields.informationPage.map((slide: any, index: number)=>
                  <div key={slide.sys.id}>
                    <LRE c={slide} k='information' />
                  </div>
                )} />
              </div>
            </OnScroll>
          }
        ]} />
      </main>
    </>
  }
}