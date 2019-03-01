import * as React from 'react'

export const AppContext = React.createContext({
  content: {} as {
    [key:string]: {
      [key:string]: any
    }
  },
  locale: undefined as any,
  phone: false as boolean,
  fetchContent: ()=> function(): void {},
  selectLocale: (locale: string)=> function(): void {}
})