
import * as React from 'react'

import { Link, RouteComponentProps, NavLink } from 'react-router-dom'
import { AppContext } from '../contexts/app'
import { Icon } from '../components/icon'
import { Picture } from '../components/picture'


interface Props extends RouteComponentProps<any> {}
interface State {}


export class ProjectsProject extends React.Component<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <main className='' role='main'>
        {/* <Icon i='anvil_green' /> */}

        <div className='padded padded--big_top'>
          <div className='padded medium_bottom max_width max_width--wide max_width--center'>
            <Picture src={'/enclume/caserne.jpg'} />
          </div>

          <h1>Caserne 26</h1>

          {/* <p>Le mandat consistait à réaliser une recherche historique et architecturale 
          de la caserne 26, aussi connue comme l’ancien hôtel de ville De Lorimier,
          située au 2151 avenue du Mont-Royal Est.</p>

          <p>La recherche a permis de mieux comprendre 
          l’évolution de ce bâtiment, sa logique d’implantation dans l’ancienne municipalité De Lorimier, ses influences stylistiques, etc. L’étude a également l’élaboration de recommandations quant à la mise en valeur des éléments caractéristiques du lieu dans le cadre d’un éventuel projet d’intervention.</p> */}
        </div>
      </main>
    </>
  }
}