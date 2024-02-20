import Container from 'react-bootstrap/Container';
import "./SignUp.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/AGILE-SOLUTIONS-1-1024x725-1 2.png'
const SignUp = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container>
        <Row>
          <Col sm={4} className='d-flex justify-content-center section-left'>
            <Col sm={8}>
              <h1>welcome</h1>
              <p>You already have an account?Login with your personal info.</p>
              <Button variant="light">Light</Button>
            </Col>

          </Col>
          <Col sm={8}>sm=4</Col>
        </Row>
      </Container>
    </>
  )

}

export default SignUp