import c from './assets/img/img/c++.png';
import cal from './assets/img/img/cal.jpg';
import r from './assets/img/img/React.jpg';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { render } from '@testing-library/react';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${c}`}
          alt="First slide"
          height={'600px'}
        />
        <Carousel.Caption>
          <h3>{props.data[1]?.title}</h3>
          <p>{props.data[1]?.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${r}`}
          alt="Second slide"
          height={'600px'}
        />

        <Carousel.Caption>
          <h3>{props.data[2]?.title}</h3>
          <p>{props.data[2]?.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${cal}`}
          alt="Third slide"
          height={'600px'}
        />

        <Carousel.Caption>
          <h3>{props.data[0]?.title}</h3>
          <p>
            {props.data[0]?.description}
              </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;