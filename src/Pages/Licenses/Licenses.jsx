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
import Context from "../../Context/context";

// ASSETS
import "./Licenses.css"


const Licenses = () => {

    let { token, setToken, setLicense, licences } = useContext(context);

    const navigate = useNavigate();
    const goToBuy = () => {
        navigate('/buy');

        // axios.post('http://192.168.0.107:5274/api/Licenses/GetByIdLicenses', ).then((res) => {
        //     // console.log('response: ', res);
        //     // console.log(res.data.accessToken);
            
        // }).catch(error => {
        //     // Handle error
        //     console.error('Error:', error);
        // });
    }

    useEffect(() => {
        return () => {
            const axiosInstance = axios.create({
                baseURL: 'http://192.168.0.107:5274/api', // Base URL of your backend API
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                    // other headers as needed
                }
            });
          
            axiosInstance.get('/Licenses/getLicenses')
                .then(res => {
                    console.log(res);
                    setLicense(res.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
            // console.log(token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token['token']}`
        };
    }, []);

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