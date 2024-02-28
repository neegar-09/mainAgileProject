import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to handle the forgot password functionality
        const data = {
            email: email
        }
        console.log(`Password reset link sent to ${data.email}`);
        axios.post('forgot', data).then(
            res => {
                console.log(res);
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
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-4">
                            Send link
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPassword