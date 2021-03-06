import express, { Application, Request, Response } from 'express'
import * as contentful from 'contentful'

import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import * as bodyparser from 'body-parser'
import cookieparser from 'cookie-parser'
import useragent from 'express-useragent'

import * as ReactDOM from 'react-dom/server'
import * as React from 'react'
import Helmet from 'react-helmet'

import { CONF } from '../config'

import { HTML } from './html'
import { Routes } from '../app/routes'



const server: Application = express()
server.disable('x-powered-by')
server.enable('trust proxy')
server.use(cors({origin: (origin, callback)=> {
  if (origin && CONF('ORIGIN').split(',').indexOf(origin) === -1) {
    callback(new Error(`${origin} not allowed by CORS`))
  } else {
    callback(null, true)
  }
}, credentials: true}))

server.use(cookieparser())
server.use(compression())
server.use(useragent.express())

server.use(morgan('dev'))
server.use('/dist', express.static(`${__dirname}`))


const content = contentful.createClient({
  space: CONF('SPACE_ID'),
  accessToken: CONF('ACCESS_TOKEN')
})

const entries = (locale: string)=> Promise.all([
  content.getEntries({ content_type: 'homepage', locale }),
  content.getEntries({ content_type: 'contact', locale }),
  content.getEntries({ content_type: 'aboutPage', locale }),
  content.getEntries({ content_type: 'category', locale }),
  content.getEntries({ content_type: 'project', locale }),
  content.getEntries({ content_type: 'teamMember', locale }),
  content.getEntries({ content_type: 'collaborator', locale }),
  content.getEntries({ content_type: 'awardsPage', locale }),
  content.getEntries({ content_type: 'award', locale })
])

server.get('/content', (req: Request, res: Response) => {
  entries(req.cookies['locale'] || 'fr-CA').then(([homepages, contacts, abouts, categories, projects, team_members, collaborators, awards_pages, awards])=> {
    res.send({
      homepage: homepages.items[0],
      contact: contacts.items[0],
      about: abouts.items[0],
      categories: categories.items,
      projects: projects.items,
      team_members: team_members.items,
      collaborators: collaborators.items,
      awards_page: awards_pages.items[0],
      awards: awards.items
    })
  })
})

server.get('/*', (req: Request, res: Response) => {
  entries(req.cookies['locale'] || 'fr-CA').then(([homepages, contacts, abouts, categories, projects, team_members, collaborators, awards_pages, awards])=> {
    const html = ReactDOM.renderToString(
      <HTML
        url={req.originalUrl}
        hostname={req.hostname}
        content={{
          homepage: homepages.items[0],
          contact: contacts.items[0],
          about: abouts.items[0],
          categories: categories.items,
          projects: projects.items,
          team_members: team_members.items,
          collaborators: collaborators.items,
          awards_page: awards_pages.items[0],
          awards: awards.items
        }}
        phone={req.useragent.isMobile}>
        <Routes />
      </HTML>
    )
    const helmet = Helmet.renderStatic()
    res.send(`<!doctype html>${html
      .replace('<html>', `<html ${helmet.htmlAttributes.toString()}>`)
      .replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`)}`)
  })
})


server.listen(CONF('SERVER_PORT'), () => {
  console.log(`Listening on port ${CONF('SERVER_PORT')}...`)
})