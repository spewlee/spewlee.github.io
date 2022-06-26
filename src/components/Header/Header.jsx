import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Navbar, Nav, NavLink, NavItem } from 'react-bootstrap';

// Custom Styles
import './Header.css';

// Images
import  logo  from "../../images/SueleeChristie.png";

function Header() {
    
    return(
        <div className="sticky-top">
            <Navbar collapseOnSelect expand="xl" variant="light" className="ps-5 pe-5 header">
                <Navbar.Brand className="d-flex align-items-center" href="/"><img className="profile-photo" src={logo} alt="Sport Support Logo" height="80"/></Navbar.Brand>
                <Navbar.Brand className="d-flex align-items-center" href="/"><h1 className="suelee-home fs-1">Suelee Christie</h1></Navbar.Brand>  
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end text-secondary">
                    <Nav>
                

                        <NavItem>
                            <NavLink className="mx-auto fs-3 text-secondary" as={Link} to="/about">About</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="mx-auto fs-3 text-secondary" as={Link} to="/projects">Projects</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="mx-auto fs-3 text-secondary" as={Link} to="/contact">Contact</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="mx-auto fs-3 text-secondary" id="github" as={Link} to="https://github.com/spewlee">
                                <i class="bi bi-github" />
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="mx-auto fs-3 text-secondary" id="linkedin" as={Link} to="https://www.linkedin.com/in/sueleechristie/">
                                <i class="bi bi-linkedin" />
                            </NavLink>
                        </NavItem>


                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="wood" />
        </ div>
    )
}


export default Header;