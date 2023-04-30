import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AJY SHOP</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                        <Nav.Link href="/signup">SIGN UP</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;