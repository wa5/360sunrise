import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../img/2.jpg';
import img2 from '../../../img/3.jpeg'
import img3 from '../../../img/4.jpg'
export interface ICarouselProps{};

const  Carousel1:React.FC<ICarouselProps>=(props)=>{
    return (<>
    <Carousel fade>
  <Carousel.Item>
    <img
    height="300px"
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="300px"
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="300px"
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>);
};

export default Carousel1;