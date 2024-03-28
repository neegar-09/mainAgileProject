import { Col, Container, Navbar, Row, InputGroup, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/AGILE-SOLUTIONS-1-1024x725-1 2.png'
import { useContext, useRef, useState, useEffect } from "react";
import Context from "../../Context/Context";
import './SignIn.css'
import axios from "axios";

const defaultValues = {
  mainColor: '#51B5C3',
  bgColor: '#FFFFFF',
  hoverColor: '#0991A4',
}

const SignIn = () => {
  const baseURL = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate();
  let { user , setUser } = useContext(Context);
  let rememberMe = useRef(null);
  const [formValues, setFormValues] = useState({
    email: '',
    pass: '',
    rememberMe: rememberMe,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
      rememberMe: rememberMe
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here (e.g., authentication)
    if (rememberMe.current.checked) {
      console.log('checked');
      localStorage.setItem('email', formValues.email);
    }
    console.log(formValues.rememberMe);
    console.log(formValues);

    // const url = 'http://192.168.0.106:5274/api/Product/GetAllProducts';
    axios.post('http://192.168.0.107:5274/api/Auth/Login', {
      email: formValues.email,
      password: formValues.pass,
      rememberMe: rememberMe.current.checked,

    }).then((res) => {
      console.log('response: ', res);
      localStorage.setItem('token', res.data.accessToken);
      const token = localStorage.getItem('token');
        try {
            const resp = axios.get(`${baseURL}User/GetUser`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            resp.then((resp)=>{
              console.log(resp); 
              setUser({
              firstName: resp.data.firstName,
              lastName: resp.data.lastName,
              email: resp.data.email,
              phoneNumber: resp.data.phoneNumber,
              companyName: resp.data.companyName,
            });
            localStorage.setItem('fullName', resp.data.firstName + ' ' + resp.data.lastName);
            }).catch(err=>{
              console.log(err);
            })
       
           
        } catch (error) {
            console.error('fetchData error: ', error);
        }
    


    }).catch(error => {
      // Handle error
      console.error('Error:', error);
    });

    // Redirect to home page after successful sign-in
    navigate('/home');
  };

  useEffect(() => {
    return () => {
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
              <input ref={rememberMe} name="rememberMe" onChange={handleInputChange} value={formValues.rememberMe} type="checkbox" className="m-2" />
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