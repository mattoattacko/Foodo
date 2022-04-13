import React from 'react'
import { Container } from 'react-bootstrap';

function DownloadComponent() {
  return (
    <div className='download-container-bg'>
      <Container className='download-container'>
        <h3>Grab Yo Grub With YumCrumb!</h3>
        <h3>Download Our App</h3>
        <p>
        Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the YumCrumb! app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door.
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
