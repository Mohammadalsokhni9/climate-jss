import React from 'react'
import { Router, withRouter } from 'next/router'

type Props = {
  href: string
  children: React.ReactNode
  router: Router
  className: string
  onClick?: (event: React.MouseEvent) => void
}

class LinkNoPrefetch extends React.PureComponent<Props> {
  onClick = async (event: React.MouseEvent) => {
    const { router, href, onClick } = this.props

    if (onClick) {
      onClick(event)
    }

    // If event is prevented (e.g., for downloads), do nothing further
    if (event.defaultPrevented) {
      return
    }

    event.preventDefault()
    await router.push(href)
  }

  render() {
    const { href, children, className } = this.props
    return (
      <a href={href} onClick={this.onClick} className={`${className} LinkNoPrefetch`}>
        {children}
      </a>
    )
  }
}

export default withRouter(LinkNoPrefetch)
