/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlider.css'

function ImageSlider() {
  return (
    <div >
      <Carousel intervel={100}>
        <Carousel.Item >
        <img  className="carousel__image"src="./images/salebanner.jpg" width="100%" ></img>
        </Carousel.Item>
        <Carousel.Item>
        <img   className="carousel__image"src="./images/salebanner.jpg"  width="100%" ></img>
        </Carousel.Item>
        <Carousel.Item>
        <img   className="carousel__image"src="./images/salebanner.jpg"  width="100%"></img>
        </Carousel.Item>
    </Carousel> 
    </div>
  )
}

export default ImageSlider