import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img className='img-fluid' src='/assets/image-about.png' />
          </Col>
          <Col xs={12} md={6} className='about-details' >
            <h2>Look at 'dem deals!</h2>
            <b>Deals so hot you could light the devil ablaze</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget elementum magna. Curabitur libero lacus, condimentum non tortor eget, fringilla pretium nibh. Cras sit amet suscipit odio. Fusce sit amet elit nec massa dignissim tristique ut non turpis. Ut faucibus arcu a nunc condimentum interdum. Nunc convallis bibendum faucibus. Integer a leo in leo faucibus commodo nec eget sapien.</p>
          </Col>
          <button className="btn btn-custom">Check It Out</button>
        </Row>
      </Container>
    </div>
  )
}

export default AboutComponent
