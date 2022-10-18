import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

const Product = () => {
  // Khai báo Sate
  const [isLoading, setLoading] = useState(false)
  const [listProduct, setListProduct] = useState()

  // Call API
  useEffect(() => {
    setLoading(true)
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3000/product',
      }).then(function (response) {
        setListProduct(response.data);
        setLoading(false)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  // API chưa tải xong
  if (isLoading) return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content" style={{ textAlign: "center" }}>
            < Spinner animation="border" variant="light" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4><em>Most Popular</em> Right Now</h4>
                  </div>
                  <div className="row">
                    {listProduct && listProduct.map(item => {
                      console.log(item, "item");
                      return (
                        <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                          <div className="item">
                            <img src={item.image} alt="" style={{ height: "350px" }} />
                            <h4>{item.title}<br /><span>Price: {item.price} $</span></h4>
                            <div>
                              <span><i className="fa fa-star"></i> {item.rating.rate}</span>
                              <span><i className="fa fa-download"></i> {item.rating.count}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    <div className="col-lg-12">
                      <div className="main-button">
                        <Link to="browse">Discover Popular</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
