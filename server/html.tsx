
import * as React from 'react'
import { StaticRouter } from 'react-router-dom'

import { AppContext, AppContent } from '../app/contexts/app'
import { Header } from '../app/components/header'
import { Loading } from '../app/components/loading'
import { Footer } from '../app/components/footer'

interface Props {
  url: string,
  hostname: string,
  content: AppContent,
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
      <link rel='stylesheet' type='text/css' href='/dist/app.css' />

      <link rel='icon' type='image/svg' href='https://images.ctfassets.net/esgvtsxg5drv/48cQ9HTqCIWni53SZ3k5XO/93cf6a14580867f6f3ab852088c1ad4f/favicon.svg' />
    </head>
    <body>

      <section className='app' id='app'>
        <StaticRouter location={props.url} context={{}}>
          <>
            <Loading />
            <Header />
            {props.children}
            <Footer />
          </>
        </StaticRouter>
      </section>
     

      <script dangerouslySetInnerHTML={{ __html: `window.content = ${JSON.stringify(props.content)}` }} />
      <script src='/dist/app.js' />
    </body>
    </html>
  </AppContext.Provider>
}