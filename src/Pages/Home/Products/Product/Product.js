import { Button } from "bootstrap";
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
	const { name, price, image, description, offer } = product;
	console.log(product);
  return (
    <Col sx="12" md="6" lg="4">
      <div class="product-card">
        <div class="badge">New</div>
        <div class="product-tumb">
          <img src={image} alt="" />
        </div>
        <div class="product-details">
          <span class="product-catagory">Latest Courses</span>
          <h4>
            <a href="">{name}</a>
          </h4>
          <p>{description}</p>
          <div class="product-bottom-details">
            <div class="product-price">
              <small>{price}</small>
              {offer}
            </div>
            <div class="product-links">
              <a href="">
                <i class="fa fa-heart"></i>
              </a>
              <a href="">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
          <button type="button" class="btn btn-danger mt-3">
            Enroll Now
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Product;
