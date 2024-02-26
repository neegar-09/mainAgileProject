import "./Licenses.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFilter } from "react-icons/fa6";
const Licenses = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-navbar rounded-bottom-5">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold fs-3 text-white'>Licenses</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className="align-items-center">
                            <Nav.Link href="#deets">
                                <FaUserAlt className="fs-4 text-dark" />    
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className="mx-2">
                                <p className="text-white  m-0">Name Surname</p>
                                <p className="text-white  m-0">Username@agile.com</p>
                            </Nav.Link>
                            <Nav.Link href="#deets">
                                <Button>
                                    <HiDotsVertical className="fs-4" />
                                </Button>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <ListGroup>
                    <ListGroup.Item>Product</ListGroup.Item>
                    <ListGroup.Item>User</ListGroup.Item>
                    <ListGroup.Item>Expiry date</ListGroup.Item>
                    <ListGroup.Item>Status</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    )
}

export default Licenses