import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

function ContactComponent() {
  return (
    <div className='contact-container-bg'>
      <Container className='contact-container'>
        <Row>
          <Col xs={12} md={6}>
            <h1>FOODO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget elementum magna. Curabitur libero lacus, condimentum non tortor eget, fringilla pretium nibh. Cras sit amet suscipit odio. Fusce sit amet elit nec massa dignissim tristique ut non turpis. Ut faucibus arcu a nunc condimentum interdum. Nunc convallis bibendum faucibus. Integer a leo in leo faucibus commodo nec eget sapien.</p>
            <div>
              <span className='fa fa-facebook-square'></span>
              <span className='fa fa-instagram'></span>
              <span className='fa fa-linkedin-square'></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Links</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Company</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactComponent;
