import { useContext, useEffect, useState } from "react"
import BoxDetail from "../../Components/BoxDetail"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
import Header from "../../Components/Header"
import './ProductDetail.css';
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import Context from "../../Context/Context";


const ProductDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const { id } = useParams()
  const baseURL = import.meta.env.VITE_BASE_URL
  let {productDetail , setProductDetail} = useContext(Context)
  let{user , setUser} = useContext(Context)
  console.log(user);
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchProductDetail()
  }, []);

  const fetchProductDetail = async () => {
    try {
        const response = await axios.get(`${baseURL}Licenses/GetByIdLicenses?LicensesId=${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        console.log('response', response.data);
        setProductDetail(response.data)
    } catch (error) {
        console.error('fetchData error: ', error);
    }
}

 const fetchUser = async ()=>{
  
 }
  return (
    <>
      <Header title='License Details' />
      <Container className="p-5" style={{ marginTop: '120px' }}>
        <Row>
          <BoxDetail/>
          <Col md={4}>
            <Card style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' }} className='rounded-4 p-3 border-0' >
              <Card.Body>
                <Card.Title className='text-center mb-2 fw-bold'>Status</Card.Title>
                <Card.Subtitle className="mb-2 fs-5 mb-3 text-center">Active</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* registration */}
        <Row>
          <Col md={12}>
            <Card className='rounded-4 p-3 border-0' style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' }} >
              <Card.Body>
                <Card.Title className='text-center mb-2 fw-bold'>Registration</Card.Title>
                <Row>
                  <Col md={6} >
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Subtitle className="mb-2 fw-bold fs-5 mb-3">Company name : <span className='fw-normal'>{user.companyName}</span></Card.Subtitle>
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
            <Button onClick={goBack} variant="danger" className=" rounded-5 px-5 py-3 fs-5 fw-bold border-0">Back</Button>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ProductDetail