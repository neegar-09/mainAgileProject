import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ResetPage = () => {

    const [isReset, setReset] = useState('false');
    const [pass, setPass] = useState('');
    const [pass_confirm, setPassConf] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to handle the forgot password functionality
        const data = {
            pass: pass,
            pass_confirm: pass_confirm,
            token: id,
        }
        console.log(`${data.token}`);
        axios.post('/reset', data).then(
            res => {
                console.log(res);
                // setReset(true);
                navigate('/signin');
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    return (
        
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Confirm new password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={pass_confirm}
                                onChange={(e) => setPassConf(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-4">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPage