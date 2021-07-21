import React from 'react'
import Footer from '../Footer'
import '../../css/bootstrap.min.css'
import "../layout/layout.css"

const Layout = (props) => {
return (
  <div>
    {props.children}
    <Footer>
    </Footer>
  </div>
)
}

export default Layout

