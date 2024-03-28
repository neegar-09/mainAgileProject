import Header from '../../Components/Header'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { useEffect, useState  } from 'react'
import "./Support.css"
import axios from 'axios'

const Support = () => {
    const baseURL = import.meta.env.BASE_URL
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [support, setSupport] = useState([])
    useEffect(() => {
        return () => {
            const axiosInstance = axios.create({
                baseURL: baseURL, // Base URL of your backend API
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                    // other headers as needed
                }
            });
            axiosInstance.get('Ticket/getbyid')
                .then(response => {
                    setSupport(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
            // console.log(token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token['token']}`
        };
    }, []);
    
   

    const goToCreateTicket = () => {
        navigate('/createTicket');
    }

    return (
        <div className='support'>
            <Header title='Support' />
            <Container style={{ marginTop: '120px' }}>
                <Row className="justify-content-center mt-3 mb-4">
                    <Col md="" className="mb-2">
                        <p className='mb-0'>+994(50)1234567 - Azerbaijan</p>
                        <p className='mb-0'>Monday - Friday 9:30 AM - 6:30 PM Available</p>
                        <p>Support Cases: Unlimited</p>
                    </Col>
                    <Col md="" className="mb-2 text-center">
                        <Button onClick={goToCreateTicket} style={{ width: '230px', borderRadius: '15px', backgroundColor: '#61CFDE', border: '0px' }} variant="secondary">Create New Ticket</Button>
                    </Col>
                </Row>
                <Row>
                    <Table striped bordered hover>
                        <thead className=''>
                            <tr className='support-table-tr'>
                                <th className='black'>Title</th>
                                <th className='black'>Date</th>
                                <th className='black'>Status</th>
                                <th className='black'>Ticket ID</th>
                            </tr>
                        </thead>
                        <tbody className='mg-5'>
                            {support?.map((item, index) => (
                                <tr className="gray-bg" key={index}>
                                    <td>{item.subject}</td>
                                    <td>{item.description}</td>
                                    <td>{item.ticketStatus}</td>
                                    <td>{item.ticketType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}

export default Support