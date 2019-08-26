
import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { Index } from './routes/index'
import { FourOFour } from './routes/404'
import { Contact } from './routes/contact'
import { About } from './routes/about'
import { Awards } from './routes/awards'
import { Projects } from './routes/projects'
import { ProjectsProject } from './routes/project'


interface Props {
  onRoute?: Function
}

export const Routes: React.SFC<Props> = (props) => {
  if (props.onRoute) { props.onRoute() }
  return <>
    <Switch>
      <Route exact path='/projets' component={Projects} />
      <Route exact path='/projets/:project' component={ProjectsProject} />
      <Route exact path='/a-propos' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/prix' component={Awards} />
      <Route exact path='/' component={Index} />
      <Route component={FourOFour} />
    </Switch>
  </>
}