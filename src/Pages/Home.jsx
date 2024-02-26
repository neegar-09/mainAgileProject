import React from 'react'
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap';
import CompanyBox from '../Components/CompanyBox'
import Box from '../Components/Box'

const Home = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Header title="Home Page"/>
            <Container style={{marginTop: '120px'}}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <CompanyBox />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Box title='Total Licenses' value='4'/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Box title='Active' value='2'/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Box title='Expired' value='1'/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Box title='Locked' value='1'/>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Home