import * as React from "react"
import { Link } from "gatsby"

export interface HeaderProps{
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    className={'background-complement-lightest Header'}
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
          className={'color-accent-darkest'}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
