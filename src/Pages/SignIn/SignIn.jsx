import { Col, Container, Navbar, Row, InputGroup, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/AGILE-SOLUTIONS-1-1024x725-1 2.png'


const defaultValues = {
  mainColor: '#51B5C3',
  bgColor: '#FFFFFF',
  hoverColor: '#0991A4',
}


const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here (e.g., authentication)

    // Redirect to home page after successful sign-in
    navigate('/home');
  };


  return (
    <Container style={{ backgroundColor: defaultValues.bgColor, fontFamily: 'Montserrat', margin: '0px', width: '100vw' }}>
      <Row className="d-flex align-items-center" style={{ width: 'inherit' }}>
        <Col xs={7} style={{ height: '100vh', maxWidth: '750px', minWidth: '320px', padding: '0px 4em' }}>

          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>

          <h1 style={{ marginBottom: '1.5em', color: defaultValues.mainColor, fontWeight: 'bold' }} className="text-center">Sign in</h1>

          <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <Form.Group className="mb-2">
              <InputGroup>
                <InputGroup.Text>
                  <Icon.Envelope />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <InputGroup>
                <InputGroup.Text>
                  <Icon.Lock />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                />
              </InputGroup>
            </Form.Group>

            <Form.Check label='Remember me' className="small m-2" />
            <Link to="/forgot-password" className="mb-4 text-center">
              Forgot your password?
            </Link>
            <Button type="submit" style={{ textAlign: 'center', minWidth: '200px', alignSelf: 'center' }}>SIGN IN</Button>
          </Form>

        </Col>

        <Col className="text-center" style={{ backgroundColor: defaultValues.mainColor, color: defaultValues.bgColor, height: '100vh', padding: '11em 3em' }}>
          <h1 style={{ marginBottom: '1.5em' }} className="text-center">Welcome</h1>

          <p>Don’t have an account yet?
            Create an account here. </p>
          <Link className="" style={{ textDecoration: 'none' }} to="/signup" >
            <Button style={{ backgroundColor: defaultValues.mainColor }}>SignUp</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn