import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './HomeCarousel.css'
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function HomeCarousel({ data}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-box-parent" >
      <div className="carousel-parent-text">
      <Badge className="badge" bg="dark" >Location</Badge>
      <Badge className="badge" bg="dark" >
      <FontAwesomeIcon icon={faHeart} style={{color: "#f5f5f5",}} />
      </Badge>
     
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="carousel-box"
      >
        {data.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={image} alt="property" />
            </Carousel.Item>
            
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
