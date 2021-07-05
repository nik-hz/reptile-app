import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

const NavbarModule = ({ navigate }) => {
    const onClick = (e) => {
        navigate(e.target.name)
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand name="home">Reptile-API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link name="home" onClick={onClick}>
                            Random Reptile
                        </Nav.Link>
                        <Nav.Link name="api" onClick={onClick}>
                            API
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarModule
