
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap"

const BoxDetail = ({ data }) => {
  return (
    <>
      {
        data.map(card => (
          <Col md={4} key={card.title}>
            <Card style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)'}} className='rounded-4 p-3 border-0' >
              <Card.Body>
                <Card.Title className='text-center mb-2 fw-bold'>{card.title}</Card.Title>
                <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">{card.feature1} <span className='fw-normal'>{card.info1}</span></Card.Subtitle>
                <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">{card.feature2} <span className='fw-normal'>{card.info2}</span></Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

        ))
      }

    </>


  )
}

export default BoxDetail

