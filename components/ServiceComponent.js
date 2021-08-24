import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <img className='img-fluid service-img' src='/assets/image-one.png' /> 
            <h2>Check Out These Offers!</h2>
            <p>Do you want pizza? We've got access to hundreds of pizza shops. Thousands even. Someone should stop the pizza takeover oh my god the tomatos are here please send help! Thats my purse I dont know you!</p>
          </Col>
          <Col xs={12} md={4}>
            <img className='img-fluid service-img' src='/assets/image-two.png' /> 
            <h2>Quick Delivery</h2>
            <p>Do you think other resturants are fast? Maybe! But No one is as fast as FOODO! Thats my purse I dont know you</p>
          </Col>
          <Col xs={12} md={4}>
            <img className='img-fluid service-img' src='/assets/image-three.png' /> 
            <h2>The Best Food</h2>
            <p>Tired of eating cereal three times a day? Let FOODO do the work for you when finding new meal options. Thats my purse I dont know you</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceComponent
