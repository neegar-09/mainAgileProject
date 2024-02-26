import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'


const TableComp = () => {
    return (
        <>
         <Container>
            <Row className='p-2 mb-1 '>
                <Col sm={2} className='text-center p-0 border-right border-dark'>
                    <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>Dialer</p>
                </Col>
                <Col sm={2} className='text-center p-0 border-right border-dark'>
                    <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>25</p>
                </Col>
                <Col sm={2} className='text-center p-0 border-right border-dark'>
                    <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>29.09.2024</p>
                </Col>
                <Col sm={2} className='text-center p-0 border-right border-dark'>
                    <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>active</p>
                </Col>
                <Col sm={4} className='text-center p-0 bg-light shadow-sm rounded d-flex align-items-center justify-content-center'>
                    <Button className='text-center m-0 btn-blue rounded-5 p-0 px-4 py-1 border-0'> Details</Button>
                </Col>
            </Row>
            </Container>
            

        </>
    )
}

export default TableComp