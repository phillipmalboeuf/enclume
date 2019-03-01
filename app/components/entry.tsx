
import * as React from 'react'
import { AppContext } from '../contexts/app'

interface Props {
  c: string,
  k: string
}
interface State {}

export class E extends React.PureComponent<Props, State> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  render() {
    return this.context.content[this.props.c].fields[this.props.k]
  }
}