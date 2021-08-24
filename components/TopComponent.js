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
              <img className="img-fluid" src='./assets/mobile.png' />
            </Col>
            <Col xs={12} md={6} className='section-top-right shadow' >
              <div className="plate-img-container"></div>
              <h6>FOODO</h6>
              <h2>West Coast Creatives LLC</h2>
              <h1>FOODO</h1>
              <p>Have you heard the tale of Darth Matto the wise? Somebody once told me the world is gonna roll me
                I ain't the sharpest tool in the shed
                She was looking kind of dumb with her finger and her thumb
                In the shape of an "L" on her forehead.
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
