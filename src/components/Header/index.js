import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

const Header = () => (
  <div
    style={{
      background: '#002344',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            "font-family": "'Bungee Shade', cursive",
            textDecoration: "none",
          }}
        >
          Bean Juice
        </Link>
      </h1>
    </div>
  </div>
)
//New Comment
export default Header
