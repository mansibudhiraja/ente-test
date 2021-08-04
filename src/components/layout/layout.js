import React from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'
import "bootstrap/dist/css/bootstrap.min.css";
import "../layout/layout.css"
import "@fontsource/pacifico"
import "@fontsource/ubuntu/400.css"
import "@fontsource/ubuntu/700.css"
import favicon from '../../images/favicon.png'
import Helmet from 'react-helmet'


const Layout = (props) => {
return (
  <div>
     <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Navigation></Navigation>
    {props.children}
    <Footer>
    </Footer>
  </div>
)
}

export default Layout

