
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap';
import CompanyBox from '../Components/CompanyBox'
import Box from '../Components/Box'
import { useState, useContext } from 'react';
import Context from '../Context/context';


const Home = () => {

    const { companies, setCompanies } = useContext(context)
    console.log(companies);

    return (
        <div style={{ height: '100vh' }}>
            <Header title="Home Page" />
            <Container style={{ marginTop: '120px' }}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <CompanyBox />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div style={{ textAlign: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '20px', marginBottom: '20px', height: '150px' }}>
                            <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Total Licenses</p>
                            <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{companies.totalLicenses}</p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div style={{ textAlign: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '20px', marginBottom: '20px', height: '150px' }}>
                            <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Active</p>
                            <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{companies.activeLicensesCount}</p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div style={{ textAlign: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '20px', marginBottom: '20px', height: '150px' }}>
                            <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Expired</p>
                            <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{companies.expiredLicensesCount}</p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div style={{ textAlign: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '20px', marginBottom: '20px', height: '150px' }}>
                            <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Locked</p>
                            <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{companies.lockedLicensesCount}</p>
                        </div>
                    </Col>




                </Row>
            </Container>
        </div>

    )
}

export default Home