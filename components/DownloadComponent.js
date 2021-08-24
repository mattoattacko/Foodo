import React from 'react'
import { Container } from 'react-bootstrap';

function DownloadComponent() {
  return (
    <div className='download-container-bg'>
      <Container className='download-container'>
        <h3>Grab Yo Grub With FOODO</h3>
        <h3>Download Our App</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget elementum magna. Curabitur libero lacus, condimentum non tortor eget, fringilla pretium nibh. Cras sit amet suscipit odio. Fusce sit amet elit nec massa dignissim tristique ut non turpis. Ut faucibus arcu a nunc condimentum interdum. Nunc convallis bibendum faucibus. Integer a leo in leo faucibus commodo nec eget sapien.
        </p>
      </Container>
      <Container className='img-download'>
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          className="img-fluid"
        />
        <img
          src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1"
          className="img-fluid"
        />
      </Container>
    </div>
  )
}

export default DownloadComponent
