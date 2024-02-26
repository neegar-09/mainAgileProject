import React from 'react'
import Header from '../Components/Header'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'

const Support = () => {

    const mockData = [
        { title: 1, date: '2024', status: 'active', ticketId: '123456' },
        { title: 2, date: '2024', status: 'active', ticketId: '123456' },
        { title: 3, date: '2024', status: 'active', ticketId: '123456' }
    ];


    return (
        <div>
            <Header title='Support' />
            <Container style={{ marginTop: '120px' }}>
                <Row className="justify-content-center mt-3">
                    <Col md="" className="mb-2">
                        <p className='mb-0'>+994(50)1234567 - Azerbaijan</p>
                        <p className='mb-0'>Monday - Friday 9:30 AM - 6:30 PM Available</p>
                        <p>Support Cases: Unlimited</p>
                    </Col>
                    <Col md="" className="mb-2 text-center">
                        <Button style={{ width: '230px', borderRadius: '15px', backgroundColor: '#61CFDE', border: '0px' }} variant="secondary">Create New Ticket</Button>
                    </Col>
                </Row>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Ticket ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                    <td>{item.ticketId}</td>
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