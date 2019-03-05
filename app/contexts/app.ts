import * as React from 'react'

export const AppContext = React.createContext({
  content: {} as {
    homepage: { fields: { [key:string]: any } },
    contact: { fields: { [key:string]: any } },
    categories: { fields: { [key:string]: any } }[],
    projects: { fields: { [key:string]: any } }[]
  },
  locale: undefined as any,
  phone: false as boolean,
  fetchContent: ()=> function(): void {},
  selectLocale: (locale: string)=> function(): void {}
})