import Container from 'react-bootstrap/Container';
import "./SignUp.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/AGILE-SOLUTIONS-1-1024x725-1 2.png'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate();

 const goToSignIn = () => {
    navigate('/signin');
  }

  return (
    <>
      <div className='p-5'>
        <Container className='bg-white rounded-5'>
          <Row>
            <Col lg={4} md={12} className='section-left rounded-bottom-start-5 p-lg-5'>
              <Col className='mt-5'>
                <h1 className='text-white py-4 text-center'>Welcome</h1>
                <p className='text-white lead py-4 text-center'>You already have an account? Login with your personal info.</p>
                <div className="d-flex justify-content-center my-2">
                  <Col sm={7}>
                    <Button onClick={goToSignIn} variant="light" className='btn-signin text-white w-100 fs-5 shadow mb-5'>Sign In</Button>
                  </Col>
                </div>
              </Col>

            </Col>
            <Col lg={8} md={12}>
              <Row>
                <Col md={9} sm={12} className='d-flex flex-column align-items-center'>
                  <h1 className='sec-right-text text-center my-5'>Create account</h1>
                  <Col md={9} sm={12} >
                    <Form>
                      <Form.Group className="mb-4  position-relative" controlId="exampleForm.ControlInput1">
                        <FaUser className='position-absolute svg' />
                        <Form.Control type="text" placeholder="First name" className='p-3 ps-5' />
                      </Form.Group>

                      <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput2">
                        <FaUser className='position-absolute svg' />
                        <Form.Control type="text" placeholder="Last name" className='p-3 ps-5' />
                      </Form.Group>

                      <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput3">
                        <MdEmail className='position-absolute svg' />
                        <Form.Control type="email" placeholder="Email" className='p-3 ps-5' />
                      </Form.Group>

                      <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput4">
                        <FaBuilding className='position-absolute svg' />
                        <Form.Control type="text" placeholder="Company name" className='p-3 ps-5' />
                      </Form.Group>

                      <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput5">
                        <FaPhone className='position-absolute svg' />
                        <Form.Control type="number" placeholder="+994(_ _)_ _ _ _ _ _ _" className='p-3 ps-5' />
                      </Form.Group>

                      <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput6">
                        <IoMdLock className='position-absolute svg' />
                        <Form.Control type="password" placeholder="Password" className='p-3 ps-5' />
                      </Form.Group>

                      <Col sm={7} className='mx-auto'>
                        <Button variant="light" className='btn-signup text-white w-100 fs-5 shadow mb-5'>SIGN UP</Button>
                      </Col>
                    </Form>
                  </Col>

                </Col>
                <Col sm={3} className=''>
                  <img src={logo} alt="logo" className='' />
                </Col>
              </Row>


            </Col>
          </Row>
        </Container>
      </div>



    </>
  )

}

export default SignUp