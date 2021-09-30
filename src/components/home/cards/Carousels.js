import React from 'react'
import {Carousel} from 'react-bootstrap'
function Carousels() {
    return (
        <>
             <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block "
      src="https://imgcdn1.gempundit.com/media/wysiwyg/banners/september-birthstone-web-banner-210901.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block "
      src="https://imgcdn1.gempundit.com/media/wysiwyg/banners/free-recommendation-web-210824.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://imgcdn1.gempundit.com/media/wysiwyg/banners/gemstone-to-jewelry-banner-web-210812.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Carousels
