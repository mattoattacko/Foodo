import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

function ContactComponent() {
  return (
    <div className='contact-container-bg'>
      <Container className='contact-container'>
        <Row>
          <Col xs={12} md={6}>
            <h1>YumCrumb!</h1>
            <p>
            YumCrumb! helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, restaurant name or menu item. We'll filter your results accordingly. When you find what you're looking for, you can place your order online or by phone, free of charge. Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</p>
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
