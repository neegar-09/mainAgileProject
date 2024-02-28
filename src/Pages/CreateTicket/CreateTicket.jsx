import { Col, Container, Row, Button } from 'react-bootstrap'
import Header from '../../Components/Header'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const CreateTicket = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }


  return (
    <div className='p-sm-3 p-lg-5'>
      <Header title="Create Ticket" />
      <Container style={{ marginTop: "90px" }} className='bg-white p-5 rounded-5 mb-5'>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fw-bold'>1.Enter subscription or FQDN of the installation you are requesting support for ...*  </Form.Label>
                <Col sm={6}>
                  <Form.Control type="text" placeholder="S2KM-AO4J-TMXA-ZCJI" className='border-bottom bg-white' />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fw-bold'>2.Title/ Short description*</Form.Label>
                <Col sm={6}>
                  <Form.Control type="text" placeholder="Activate problem" className='border-bottom bg-white' />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='fw-bold'>3.Problem description*</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="agilesolutions@agile.az" />
              </Form.Group>
              <Row className='my-5'>
                <Col className='mb-3'>
                  <Button onClick={goBack} variant="danger" className=" rounded-5 px-lg-5 py-lg-3 fs-6 px-sm-4 py-sm-3 fw-bold border-0">Back</Button>
                </Col>
                <Col className=''>
                  <Button className=" rounded-5 px-lg-5 py-lg-3 fs-6 px-sm-4 py-sm-3 fw-bold border-0 bg-green">Send a request</Button>

                </Col>
              </Row>



            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CreateTicket