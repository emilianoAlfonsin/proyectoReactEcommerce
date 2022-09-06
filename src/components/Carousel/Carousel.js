import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselIndex = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img className='d-block w-100' src='https://via.placeholder.com/800x300?text=First+slide' alt=''/>
                    <Carousel.Caption>
                        <h2>Jugetes</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src='https://via.placeholder.com/800x300?text=Second+slide' alt=''/>
                    <Carousel.Caption>
                        <h2>Pañales</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src='https://via.placeholder.com/800x300?text=Third+slide' alt=''/>
                    <Carousel.Caption>
                        <h2>Alimentación</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
    }

export default CarouselIndex