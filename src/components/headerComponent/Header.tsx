import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '/src/components/headerComponent/Header.css';

const Header =() => {
        return(
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Pravasa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/transport-undertaking">Transport Undertaking</Nav.Link>
                            <Nav.Link href="#link">Metro</Nav.Link>
                            <Nav.Link href="#link">Water Transport</Nav.Link>
                            <NavDropdown title="Suburban Railway" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Central Railway</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Western Railway
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Harbour Line
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Port Line
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Trans Harbour Line
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}

export default Header;
