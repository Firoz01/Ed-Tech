import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="img-size">
        <img
          className="d-block w-100 banner-img"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/294/890/small/digital-education-web-banner-design-teacher-on-monitor-to-explain-the-graph-online-education-e-learning-digital-education-platform-concept-header-or-footer-banner-free-vector.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/products">
            <Button className="banner-btn" variant="outline-secondary">
              Explore Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src="https://previews.123rf.com/images/varijanta/varijanta1603/varijanta160300059/54344031-flat-line-sito-web-design-di-banner-di-e-learning-formazione-on-line-illustrazione-vettoriale-modern.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Button className="banner-btn" variant="outline-secondary">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src="https://t3.ftcdn.net/jpg/04/00/77/64/360_F_400776431_5JxdDYRr1mn9yISiUFMPcLtLp3zt6NA1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button className="banner-btn" variant="outline-secondary">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
