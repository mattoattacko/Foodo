import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img className='img-fluid' src='/assets/image-aboutEdit.png' />
          </Col>
          <Col xs={12} md={6} className='about-details' >
            <div>
              <h2>Look at 'dem deals!</h2>
              <b>Deals so hot you could light the devil ablaze</b>
              <br />
              <p>YumCrumb! helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, restaurant name or menu item. We'll filter your results accordingly. When you find what you're looking for, you can place your order online or by phone, free of charge. Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</p>
              <button className="btn btn-custom">Check It Out</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutComponent
