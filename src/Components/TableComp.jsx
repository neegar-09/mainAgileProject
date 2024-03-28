
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import Context from '../Context/Context'

const TableComp = () => {

    const navigate = useNavigate();
    let { licences } = useContext(Context)
    console.log(licences);
   

    return (
        <>
            <Container>
                <Row className='p-2 mb-1 '>
                    {
                        licences.map((item, index) => {
                            return (
                                <Row key={index}>
                                    <Col Col className='text-center p-0 border-right border-dark'>
                                        <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>{item.productName}</p>
                                    </Col>
                                    <Col Col className='text-center p-0 border-right border-dark'>
                                        <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>{item.userCount}</p>
                                    </Col>
                                    <Col Col className='text-center p-0 border-right border-dark'>
                                        <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>{item.expireDate}</p>
                                    </Col>
                                    <Col Col className='text-center p-0 border-right border-dark'>
                                        <p className='text-center m-0 bg-light shadow-sm p-2 rounded'>{item.licenseStatus}</p>
                                    </Col>
                                    <Col className='text-center p-0 bg-light shadow-sm rounded d-flex align-items-center justify-content-center'>
                                        <Button  className='text-center m-0 btn-blue rounded-5 p-0 px-4 py-1 border-0'>
                                            <Link to = {`/productDetail/${item.id}`}>Details</Link>
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    

                </Row >
            </Container >


        </>
    )
}

export default TableComp