
import * as React from 'react'
import { StaticRouter } from 'react-router-dom'

import { AppContext } from '../app/contexts/app'

interface Props {
  url: string,
  hostname: string,
  content: {
    [key:string]: {
      [key:string]: any
    }
  },
  phone: boolean,
  locale?: any
}

export const HTML: React.SFC<Props> = (props) => {
  return <AppContext.Provider value={{
    content: props.content,
    locale: props.locale,
    phone: props.phone,
    fetchContent: undefined,
    selectLocale: undefined
  }}>
    <html>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      <meta httpEquiv='Accept-CH' content='Width, DPR' />
      <title>Enclume</title>
      <link rel='stylesheet' type='text/css' href='/dist/app.css' />

      {/* <link rel='icon' type='image/png' href='https://montrealuploads.imgix.net/bombom/favicon_logo.png?auto=compress' /> */}
    </head>
    <body>

      <section className='app' id='app'>
        <StaticRouter location={props.url} context={{}}>
          <>
            {props.children}
          </>
        </StaticRouter>
      </section>
     

      <script dangerouslySetInnerHTML={{ __html: `window.content = ${JSON.stringify(props.content)}` }} />
      <script src='/dist/app.js' />
    </body>
    </html>
  </AppContext.Provider>
}