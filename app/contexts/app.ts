import * as React from 'react'

export const AppContext = React.createContext({
  pieces: {} as {
    [key:string]: {
      _id: string,
      [key:string]: any
    }
  },
  response: undefined as any,
  // user: undefined as User,
  locale: undefined as any,
  editable: false as boolean,
  phone: false as boolean,
  fetchPieces: ()=> function(): void {},
  fetchUser: ()=> function(): void {},
  clearUser: ()=> function(): void {},
  selectLocale: (locale: string)=> function(): void {},
  setEditable: (boolean: boolean)=> function(): void {}
})