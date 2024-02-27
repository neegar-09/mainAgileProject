import { useState } from "react"
import BoxDetail from "../../Components/BoxDetail"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
const ProductDetail = () => {
  const [data, setData] = useState([
    {
      title: "Product",
      feature1: "type",
      feature2: "Subscription ID",
      info1: "Dialer",
      info2: "S2KM-AO4J-TMXA-ZCJI"
    },

    {
      title: "Users",
      feature1: "Total",
      feature2: "Active currently:",
      info1: "25",
      info2: "18"
    },

    {
      title: "Date",
      feature1: "Order",
      feature2: "Expiry",
      info1: "29.09.2022",
      info2: "29.09.2024"
    },

  ])
  return (
    <>
      <Container className="p-5">
        <Row>
          <BoxDetail data={data} />
          <Col md={4} className="mt-4">
            <Card className='rounded-4 p-3 border-0' >
              <Card.Body>
                <Card.Title className='text-center mb-2 fw-bold'>Status</Card.Title>
                <Card.Subtitle className="mb-2 fs-5 mb-3 text-center">Active</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* registration */}
        <Row>
          <Col md={12} className="mt-4">
            <Card className='rounded-4 p-3 border-0' >
              <Card.Body>
                <Card.Title className='text-center mb-2 fw-bold'>Registration</Card.Title>
                <Row>
                  <Col md={6}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">Company name : <span className='fw-normal'>PashaBank</span></Card.Subtitle>
                      <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">Email : <span className='fw-normal'>pashabank@pasha.az</span></Card.Subtitle>
                    </Card.Body>
                  </Col>
                  <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">Country : <span className='fw-normal'>Azerbaijan</span></Card.Subtitle>
                      <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">Phone Number : <span className='fw-normal'>+994(50)1234567</span></Card.Subtitle>
                    </Card.Body>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* back button */}
        <Row className="my-5">
          <Col md={12} className="d-flex justify-content-center">
          <Button variant="danger" className=" rounded-5 px-5 py-3 fs-5 fw-bold border-0">Back</Button>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ProductDetail