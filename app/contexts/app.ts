import * as React from 'react'

export interface AppContent {
  homepage: { fields: { [key:string]: any } }
  contact: { fields: { [key:string]: any } }
  categories: { fields: { [key:string]: any } }[]
  projects: { fields: { [key:string]: any } }[]
  about: { fields: { [key:string]: any } }
  team_members: { fields: { [key:string]: any } }[]
  collaborators: { fields: { [key:string]: any } }[]
  awards_page: { fields: { [key:string]: any } }
  awards: { fields: { [key:string]: any } }[]
}

export const AppContext = React.createContext({
  content: {} as AppContent,
  locale: undefined as any,
  phone: false as boolean,
  dev: false as boolean,
  fetchContent: ()=> function(): void {},
  selectLocale: (locale: string)=> function(): void {}
})