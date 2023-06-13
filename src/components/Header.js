import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    const pageName = [
        {name: "Home", link: "/"},
        {name: "Movies", link: "/movies"},
        {name: "Series", link: "/series"},
        {name: "About", link: "/about"},
        {name: "Contact", link: "/contact"},
    ]

    return (
        <div className='header'>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='logo'>CineVerse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{maxHeight:'100px'}}
                        navbarScroll>
                            {
                                pageName.map((item)=>{
                                    return(
                                        <Nav key={item.name}>
                                            <Link to={item.link}>
                                                {item.name}
                                            </Link>
                                        </Nav>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
