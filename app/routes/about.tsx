
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { LPE, LE } from '../components/entry'
import { Index } from './index'


interface Props extends RouteComponentProps<any> {}
interface State {}


export class About extends Index {

  public render() {
    return <>
      <main className='blue_back' role='main'>
        <Icon i='anvil_blue' />

        <div className='padded padded--big_top'>
          <div className='grid medium_bottom'>
            <h2 className='col col--7of12 col--tablet_portrait--9of12 col--phone--12of12'>À l’Enclume, nous dévouons notre ingéniosité, notre créativité et nos énergies à l’aménagement responsable des milieux de vie.</h2>
          </div>

          <div className='grid grid--guttered'>
            <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--6of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 2 })}>
              <p>Notre travail fait foi d’une conscience
              environnementale, d’un souci d’esthétisme, 
              d’une volonté d’inspirer sans compromettre 
              et d’un engagement à bâtir sur des bases
              solides.Ces soucis que nous entretenons
              pour le développement de nos communautés, 
              nous tentons de les exprimer par des actions 
              au quotidien. C’est pourquoi nous sommes
              une coopérative de travailleurs.</p>

              <p>Nous misons sur l’intégration d’une structure 
              organisationnelle horizontale basée sur l’équité 
              et la collaboration. Nous œuvrons ensemble, 
              nous travaillons avec vous.</p>
            </div>
            <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--6of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 1 })}>
              <p>Nous ne sommes pas guidés par l’appât 
              du gain. Nos personnalités colorent nos
              ouvrages. Nous sommes fiers de ce que
              nous faisons et effectuons notre travail 
              avec passion, rigueur, et toujours au meilleur 
              de nos capacités. Notre atelier est un lieu 
              de convergence où sont forgées des idées 
              avant-gardistes et des projets durables.</p>
            </div>
          </div>

          <div className='big_bottom' />

          <div className='grid grid--guttered grid--middle'>
            <div className='col col--12of12' ref={element => this.parallax.push({ e: element, l: 1.5 })}>
              <h6>Champs d’expertises</h6>
            </div>
            <div className='col col--6of12 col--tablet_portrait--9of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 1.5 })}>
              {this.context.content.categories.map(category => <h3>{category.fields.title}</h3>)}
            </div>
            <div className='col col--5of12 col--tablet_landscape--6of12 col--tablet_portrait--9of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 0.75 })}><p className='medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad</p></div>
          </div>

          <div className='big_bottom' />

          <div className='grid grid--guttered'>
            <div className='col col--12of12' ref={element => this.parallax.push({ e: element, l: 1.5 })}>
              <h6>L'équipe</h6>
            </div>
            <div className='col col--8of12 col--tablet_portrait--10of12 col--phone--12of12' ref={element => this.parallax.push({ e: element, l: 3 })}><p className='big'>Nous avons une équipe multidisciplinaire et
passionnée par une approche intégrée en 
aménagement. Pour cette raison, nous réalisons 
des mandats dans une grande diversité des sphères 
de l’aménagement, qu’il soit rural ou urbain.</p></div>

            <div className='col col--12of12'></div>
            {this.context.content.team_members.map(member => <div key={member.fields.name} className='col col--4of12 col--tablet_portrait--6of12'>
              <a href={`${member.fields.url}`} target='_blank'>
                <div className=''><LPE c={member} k='photo' /></div>
                {/* <p className='slight'>
                  <LE c={member} k='name' />
                </p> */}
              </a>
            </div>)}
            {this.context.content.team_members.map(member => <div key={member.fields.name} className='col col--4of12 col--tablet_portrait--6of12'>
              <a href={`${member.fields.url}`}>
                <div className=''><LPE c={member} k='photo' /></div>
                {/* <p className='slight'>
                  <LE c={member} k='name' />
                </p> */}
              </a>
            </div>)}
          </div>

          <div className='big_bottom' />

          <div className='grid grid--tight_guttered'>
            <div className='col col--12of12' ref={element => this.parallax.push({ e: element, l: -1.5 })}>
              <h6>Collaborateurs</h6>
            </div>
            <div ref={element => this.parallax.push({ e: element, l: -3 })} className='col col--8of12 col--tablet_portrait--10of12 col--phone--12of12'><p className='big'>L’Enclume possède un réseau de collaborateurs spécialisés avec qui elle s’allie pour offrir des services plus pointus en cas de besoin.</p></div>

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
          </div>

          <div className='big_bottom' />
        </div>
      </main>
    </>
  }
}