
import * as React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'


interface Props extends RouteComponentProps<any> {}
interface State {}


export class About extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <main className='blue_back' role='main'>
        <Icon i='anvil_blue' />

        <div className='padded padded--big_top'>
          <div className='grid medium_bottom'>
            <h2 className='col col--7of12'>À l’Enclume, nous dévouons notre ingéniosité, notre créativité et nos énergies à l’aménagement responsable des milieux de vie.</h2>
          </div>

          <div className='grid grid--guttered'>
            <div className='col col--3of12'>
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
            <div className='col col--3of12'>
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
            <div className='col col--12of12'>
              <h6>Champs d’expertises</h6>
            </div>
            <div className='col col--6of12'>
              <h3>Planification et Conception</h3>
              <h3>Recherche et Analyse</h3>
              <h3>Accompagnement et Participation publique</h3>
            </div>
            <div className='col col--5of12'><p className='medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad</p></div>
          </div>

          <div className='big_bottom' />

          <div className='grid grid--guttered'>
            <div className='col col--12of12'>
              <h6>L'équipe</h6>
            </div>
            <div className='col col--8of12'><p className='big'>Nous avons une équipe multidisciplinaire et
passionnée par une approche intégrée en 
aménagement. Pour cette raison, nous réalisons 
des mandats dans une grande diversité des sphères 
de l’aménagement, qu’il soit rural ou urbain.</p></div>
          </div>
        </div>
      </main>
    </>
  }
}