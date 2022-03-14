import React from 'react';
import { Navbar, Nav, NavDropdown, Container,Button } from 'react-bootstrap';

const Menu = (props) => {
    const {Logout}=props
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" >
                <Container>

                    <Navbar.Brand href="./Main">Financiero</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="./Crear">crear</Nav.Link>
                        <Nav.Link href="./Movimiento">movimiento</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={()=>Logout()}>Logout</Button>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;   