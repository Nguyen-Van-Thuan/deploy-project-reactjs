import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
// import "../slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Product = () => {
  // Setting Slider
  const settings = {
    dots: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <Slider {...settings}>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
