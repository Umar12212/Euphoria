import React from 'react'
import './styles/style.scss'
import carusel from './images/carusel.jpg'
import { Carousel } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const buttonStyle = {
    appearance: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  };
  return (
    <>
      <div className="image__T-shirt">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div className="carousel__inner-position">
                <h5 className='carousel__inner-position-text'>T-shirt / Tops</h5>
                <h1 className='carousel__inner-position-title'>Summer Value Pack</h1>
                <h4 className='carousel__inner-position-title4'>cool / colorful / comfy</h4>
                <button style={buttonStyle} className='carousel__inner-position-button'><p> Shop Now </p></button>
              </div>
              <img src={carusel} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={carusel} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header