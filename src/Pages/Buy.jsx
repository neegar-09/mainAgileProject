import React, { useState } from 'react'
import Header from '../Components/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Buy = () => {

    // const buttonStyle = {
    //     maxWidth: '200px',
    //     borderRadius: '15px',
    //     marginTop: '20px' // To add some space between buttons
    // };

    const testData = [{
        productName: 'Dialer',
        users: '25',

    },
    {
        productName: 'Call Center',
        users: '60',

    },
    {
        productName: 'Call Center',
        users: '38',

    },
    {
        productName: 'Dialer',
        users: '20',
    }
    ];


    // const [numberValue, setNumberValue] = useState('');

    const handleNumberChange = (event) => {
        // Ensure only positive numbers are allowed
        //    const value = event.target.value >= 0 ? event.target.value : Math.abs(event.target.value);
        //     // const value = event.target.value.replace(/\D/, ''); // Remove non-digit characters
        //     event.target.value = value;
        //     setNumberValue(value);


        let num = +event.target.value;
        if (num < 0) {
            alert('Users count should be bigger than 0');
            event.target.value = 0;
        }
    };

    return (
        <>
            <Header title='Buy' />
            {/* <div style={{ marginTop: '120px' }}>Buy new subscription</div> */}
            <Container style={{ marginTop: '120px' }}>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Col className="text-center mb-4">
                            <h2>Buy new subscription</h2>
                        </Col>
                        <Form>
                            <Form.Group className='mb-3' controlId="label1">
                                <Form.Label>1. Choose product name from list*</Form.Label>
                                <Form.Select as="select">
                                    {
                                        testData.map((item, index) => (
                                            <option key={index}>{item.productName}</option>
                                        ))
                                    }
                                    {/* <option>Option 2</option>
                                    <option>Option 3</option> */}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId="label3">
                                <Form.Label>2. How many users do you want to connect?
                                    (please input quantity)*</Form.Label>
                                <Form.Control onChange={handleNumberChange} type="number" placeholder="0" min="0" />
                            </Form.Group>
                            <Form.Group controlId="label2">
                                <Form.Label>3. How many years do you want support?*</Form.Label>
                                <Form.Select as="select">
                                    <option>1 year</option>
                                    <option>2 year</option>
                                    <option>3 year</option>
                                    <option>4 year</option>
                                    <option>5 year</option>
                                </Form.Select>
                            </Form.Group>

                            <Row className="flex-direction-row justify-content-center mt-3">
                                <Col md="" className="mb-2 text-center">
                                    <Button style={{ width: '130px', borderRadius: '15px', backgroundColor: '#E02B2B', border: '0px' }} variant="primary">Back</Button>
                                </Col>
                                <Col md="" className="mb-2 text-center">
                                    <Button style={{ width: '130px', borderRadius: '15px', backgroundColor: '#51B5C3', border: '0px' }} variant="secondary">Send a request</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Buy