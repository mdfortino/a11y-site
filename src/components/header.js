import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `10rem`,
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
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
        </Link>
        <ul style={{ listStyle: 'none', float: 'right'}}>
          <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'x-large'}} to="/about">About</Link></li>
          <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'x-large'}} to="/tools">Toolkit</Link></li>
        </ul>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
