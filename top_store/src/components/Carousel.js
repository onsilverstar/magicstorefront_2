import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import './components.css';
import image4 from "./../Photos/image4.jpg"
import image5 from "./../Photos/image5.jpg"
import image6 from "./../Photos/image6.jpg"


class StoreCarousel extends Component {
    render() { return (
    <div className="sliderWrapper">
      <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={image5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    );
  } }
  
  export default StoreCarousel;