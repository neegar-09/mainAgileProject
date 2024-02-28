import { Col, Container, Navbar, Row, InputGroup, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/AGILE-SOLUTIONS-1-1024x725-1 2.png'
import { useContext, useRef, useState, useEffect } from "react";
import context from "../../Context/Context";
import './SignIn.css'

const defaultValues = {
  mainColor: '#51B5C3',
  bgColor: '#FFFFFF',
  hoverColor: '#0991A4',
}


const SignIn = () => {
  const navigate = useNavigate();

  let { loggedIn, setLoggedIn } = useContext(context);

  const [formValues, setFormValues] = useState({
    email: '',
    pass: '',
  });

  let rememberMe = useRef(null);

  const handleInputChange = (event) => {
    console.log(event.target.name + '\n' + event.target.value);
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here (e.g., authentication)
    if (rememberMe.current.checked) {
      console.log('checked');
      localStorage.setItem('token', 'user-token-123');
      localStorage.setItem('email', formValues.email);
      localStorage.setItem('pass', formValues.pass);

    }

    // Redirect to home page after successful sign-in
    navigate('/home');
  };

  useEffect(() => {
    return () => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const pass = localStorage.getItem('pass');
      setFormValues({
        email: email,
        pass: pass
      })
    };
  }, []);

  return (
    <Container className="sign-in" style={{ backgroundColor: defaultValues.bgColor, fontFamily: 'Montserrat', margin: '0px', width: '100vw' }}>
      <Row className="d-flex align-items-center justify-content-center" style={{ width: 'inherit' }}>
        <Col /* xs=7*/ xs={7} style={{ height: '100vh', maxWidth: '750px', minWidth: '320px', padding: '0px 4em' }}>

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
                  value={formValues.email}
                  onChange={handleInputChange}
                  name="email"
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
                  value={formValues.pass}
                  onChange={handleInputChange}
                  name="pass"
                />
              </InputGroup>
            </Form.Group>

            <Container style={{ display: 'flex', alignItems: 'center' }}>
              <input ref={rememberMe} type="checkbox" className="m-2" />
              <label style={{ fontSize: 'small' }}>Remember me</label>
            </Container>
            <Link to="/forgot" className="mb-4 text-center">
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
            <Button style={{ backgroundColor: defaultValues.mainColor }}>SIGN UP</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn