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
            <p>You want pizza? We've got access to hundreds of pizza shops. Thousands even. Someone should stop the pizza takeover oh my god the tomatos are here please send help!</p>
          </Col>
          <Col xs={12} md={4}>
            <img className='img-fluid service-img' src='/assets/image-two.png' /> 
            <h2>Quick Delivery</h2>
            <p>Do you think other restaurants are fast? Maybe! But No one is as fast as YumCrumb!</p>
          </Col>
          <Col xs={12} md={4}>
            <img className='img-fluid service-img' src='/assets/image-three.png' /> 
            <h2>The Best Food</h2>
            <p>Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceComponent
