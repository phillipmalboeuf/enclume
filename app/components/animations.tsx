
import React from 'react'
import { Spring, Trail, Transition as Trans, animated } from 'react-spring'


interface Props {
  className?: string
}

export const Fade: React.SFC<Props> = (props) => {
  return <Spring config={{
    tension: 200,
    friction: 100
  }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles => <div style={styles} className={props.className}>{props.children}</div>}
  </Spring>
}

export const FadeOut: React.SFC<Props> = (props) => {
  return <Spring config={{
    tension: 200,
    friction: 100,
    delay: 2000
  }} from={{ opacity: 1 }} to={{ opacity: 0 }}>
    {styles => <div style={styles} className={props.className}>{props.children}</div>}
  </Spring>
}

interface TrailProps {
  items: {
    key: string,
    body: JSX.Element
  }[]
}

export const FadeTrail: React.SFC<TrailProps> = (props) => {
  return <Trail config={{
    tension: 200,
    friction: 50
  }}
  from={{ opacity: 0 }} to={{ opacity: 1 }}
  items={props.items}
  keys={props.items.map(item => item.key)}>
    {item => (styles: React.CSSProperties)=> React.cloneElement(item.body, {style: styles})}
  </Trail>
}

interface HeightProps {
  open: boolean
}

export const Height: React.SFC<HeightProps> = (props) => {
  return <Spring config={{
    tension: 200,
    friction: 50
  }} from={{ height: 0, overflow: 'hidden' }} to={{ height: props.open ? 'auto' : 0 }}>
    {styles => <div style={styles}>{props.children}</div>}
  </Spring>
}

export const Glide: React.SFC<Props> = (props) => {
  return <Spring config={{
    tension: 200,
    friction: 23
  }} from={{ transform: 'translateY(100%)' }} to={{ transform: 'translateY(0)' }}>
    {styles => <div style={styles} className={props.className}>{props.children}</div>}
  </Spring>
}

export const Bounce: React.SFC<Props> = (props) => {
  return <Spring config={{
    tension: 300,
    friction: 100
  }} from={{ transform: 'translateY(-15%)' }} to={{ transform: 'translateY(0)' }}>
    {styles => <div style={styles}>{props.children}</div>}
  </Spring>
}

export const Transition: React.SFC<{ keys: string[] } & Props> = props => {
  return <Trans
    native
    items={props.keys}
    keys={true}
    config={{
      tension: 100,
      friction: 42
    }}
    from={{ transform: 'translateY(100%)' }}
    enter={{ transform: 'translateY(-100%)' }}>
    {(loc, state) => style => <animated.div style={style} className={props.className}>
      {props.children}
    </animated.div>}
  </Trans>
}

interface OnScrollProps {
  items?: {
    key: string,
    body: JSX.Element
  }[],
  className?: string
}
interface OnScrollState {
  visible: boolean
}

export class OnScroll extends React.Component<OnScrollProps, OnScrollState> {

  public element: HTMLDivElement
  private position: number
  private animation: number

  constructor(props: Props) {
    super(props)
    this.state = {
      visible: false
    }
    this.scroll = this.scroll.bind(this)
  }

  componentDidMount() {
    // this.position = 0
    this.animation = window.requestAnimationFrame(this.scroll)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animation)
  }

  scroll() {
    if(this.position != window.scrollY) {
      if (window.scrollY > this.element.offsetTop + 100 - window.innerHeight) {
        this.setState({
          visible: true
        })
      } else {
        this.animation = window.requestAnimationFrame(this.scroll)
      }
      this.position = window.scrollY
    } else {
      this.animation = window.requestAnimationFrame(this.scroll)
    }
  }

  render() {
    return <Spring native config={{
      tension: 200,
      friction: 100
    }} from={{ opacity: 0, transform: 'translateY(10%)' }} to={{ opacity: this.state.visible ? 1 : 0, transform: this.state.visible ? 'translateY(0%)' : 'translateY(10%)' }}>
      {styles => <animated.div ref={element => this.element = element} style={styles} className={this.props.className}>{this.props.children}</animated.div>}
    </Spring>
  }
}

export class OnScrollTrail extends OnScroll {

  render() {
    return <div className={this.props.className} ref={element => this.element = element}>
      <Trail config={{
        tension: 200,
        friction: 50
      }}
      from={{ opacity: 0 }} to={{ opacity: this.state.visible ? 1 : 0 }}
      items={this.props.items}
      keys={this.props.items.map(item => item.key)}>
        {item => (styles: React.CSSProperties)=> React.cloneElement(item.body, {style: styles})}
      </Trail>
    </div>
  }
}
