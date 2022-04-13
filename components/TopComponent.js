import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

function TopComponent() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className='section-top'>
            <Col xs={12} md={6} className='section-top-left'>
              <img className="img-fluid" src='./assets/mobileEdit.png' />
            </Col>
            <Col xs={12} md={6} className='section-top-right shadow' >
              <div className="plate-img-container"></div>
              <h6>What you want, when you want it</h6>
              {/* <h2>West Coast Creatives LLC</h2> */}
              <h1>YumCrumb!</h1>
              <p>Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more. From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Japan.
              </p>
              <button className="btn btn-custom">Download the App!</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TopComponent;
