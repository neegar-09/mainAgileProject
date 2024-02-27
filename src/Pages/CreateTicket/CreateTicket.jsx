import { Col, Container, Row, Button } from 'react-bootstrap'
import Header from '../../Components/Header'
import Form from 'react-bootstrap/Form';

const CreateTicket = () => {
  return (
    <div style={{padding: "5rem"}}>
      <Header title="Create Ticket" />
      <Container style={{marginTop: "90px" }} className='bg-white p-5 rounded-5 '>
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
                <Col md={6}>
                  <Button variant="danger" className=" rounded-5 px-5 py-3 fs-5 fw-bold border-0">Back</Button>

                </Col>
                <Col md={6} className='d-flex justify-content-end'>
                  <Button className=" rounded-5 px-5 py-3 fs-5 fw-bold border-0 bg-green">Send a request</Button>

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