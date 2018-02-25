import React from 'react'
import Link from 'gatsby-link'
import HeroImg from '../images/coffee-dude.jpg'
import FontAwesome from 'react-fontawesome'

const IndexPage = () => (
  <div>
    <div
      style={{
        marginTop: "-.4em",
        width: "100%",
        height: "500px",
        backgroundImage: 'url(' + HeroImg + ')',
        backgroundSize: 'cover',
        lineHeight: "500px",
        backgroundPosition: "center center",
        verticalAlign: "middle",
        "text-align": "center",
        "font-family": "'Bungee', cursive",
         fontSize: "65px",
         marginBottom: "0px",
         color: "white",
      }}
    >
      C<FontAwesome 
      name='coffee'
    />ffee
      
    </div>
    
    <h1>Hi people</h1>
    <p>Welcome to your new booty.</p>
    <p>Now go twerk something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
