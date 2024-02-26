import "./Licenses.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaFilter } from "react-icons/fa6";
import TableComp from "../../Components/TableComp";
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
                <Row className="p-4 rounded-4 bg-black align-items-center">
                    <Col sm={2}>
                        <ListGroup.Item className="text-white fw-bold fs-5 text-center">Product</ListGroup.Item>
                    </Col>

                    <Col sm={2}>
                        <ListGroup.Item  className="text-white fw-bold fs-5 text-center">Users</ListGroup.Item>
                    </Col>

                    <Col sm={2}>
                        <ListGroup.Item  className="text-white fw-bold fs-5 text-center">Expiry date</ListGroup.Item>
                    </Col>

                    <Col sm={2}>
                        <ListGroup.Item  className="text-white fw-bold fs-5 text-center">Status</ListGroup.Item>
                    </Col>

                    <Col sm={2}>
                        <ListGroup.Item className="text-center fs-5 text-white">
                            <FaFilter/>
                        </ListGroup.Item>
                    </Col>

                    <Col sm={2}>
                        <ListGroup.Item><Button className="rounded-5 px-5 py-3 fs-5 fw-bold bg-green border-0"> Buy</Button></ListGroup.Item>
                    </Col>
                </Row>
            </Container>
            <TableComp/>
        </>
    )
}

export default Licenses