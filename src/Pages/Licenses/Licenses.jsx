import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FaUserAlt } from "react-icons/fa";
// import { HiDotsVertical } from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaFilter } from "react-icons/fa6";

// Custom styles
import TableComp from "../../Components/TableComp";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext, useEffect } from "react";
import Context from "../../Context/Context";

// ASSETS
import "./Licenses.css"
const Licenses = () => {

    let { setLicences, licences } = useContext(Context);
    const token = localStorage.getItem('token');
    const baseURL = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const goToBuy = () => {
        navigate('/buy');
    }

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}Licenses/getLicenses`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            // console.log('response', response);
            setLicences(response.data)
        } catch (error) {
            console.error('fetchData error: ', error);
        }
    }

    return (
        <>
            <Header title='Licenses' />

            <Container style={{ marginTop: '120px' }}>
                <Row className="p-4 rounded-4 bg-black align-items-center">
                    <Col  >
                        <ListGroup.Item className="text-white fw-bold fs-5 text-center">Product</ListGroup.Item>
                    </Col>

                    <Col  >
                        <ListGroup.Item className="text-white fw-bold fs-5 text-center">Users</ListGroup.Item>
                    </Col>

                    <Col>
                        <ListGroup.Item className="text-white fw-bold fs-5 text-center">Expiry date</ListGroup.Item>
                    </Col>

                    <Col>
                        <ListGroup.Item className="text-white fw-bold fs-5 text-center">Status</ListGroup.Item>
                    </Col>

                    <Col>
                        <ListGroup.Item className="text-center fs-5 text-white">
                            <FaFilter />
                        </ListGroup.Item>
                    </Col>

                    <Col>
                        <ListGroup.Item><Button onClick={goToBuy} className="rounded-5 px-lg-5 py-lg-3 fs-5 fw-bold bg-green border-0"> Buy</Button></ListGroup.Item>
                    </Col>
                </Row>
            </Container>
            <TableComp />
        </>
    )
}

export default Licenses