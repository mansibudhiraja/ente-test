import React from "react"
import {Link} from 'gatsby'
import {Navbar, Nav, Container} from 'react-bootstrap'
import EnteSvg from './icons/EnteSvg'


const Navigation = () => {
    return(
        <Container style={{paddingLeft: "0px"}} >
            <Navbar variant="dark" expand="lg" className="top-bar navbar-expand-lg">
                    <Navbar.Brand className= "logo" href="/">
                        <EnteSvg width="64px" height="20" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-dark" />
                    <Navbar.Collapse id="navbarResponsive" className="collapse navbar-collapse justify-content-end">
                        <Nav as="ul" className="navbar-nav ms-auto">
                            <Nav.Item as="li" className="top-bar-item">
                                <Link className="nostyle" to="/about">about</Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="top-bar-item">
                                <Link className="nostyle" to="/#download" >apps</Link>
                            </Nav.Item>
                            <Nav.Item as="li"  className="top-bar-item">
                                <Link className="nostyle" to="/#pricing">pricing</Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="top-bar-item">
                                <Link className="nostyle" to="/faq">faq</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
    )
}

export default Navigation