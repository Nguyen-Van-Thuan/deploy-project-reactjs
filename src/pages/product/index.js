import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Category from "./Category";
import "./product.css";

const Product = () => {
  // Khai báo Sate
  const [isLoading, setLoading] = useState(false)
  const [listProduct, setListProduct] = useState()
  const [count, setCount] = useState()
  const [pageParams, setPageParams] = useState(0)
  const [category, setCategory] = useState()

  const limit = 12

  // Call API
  useEffect(() => {
    setLoading(true)
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3000/product',
        params: {
          _page: pageParams,
          _limit: limit,
          category: category
        }
      }).then(function (response) {
        setListProduct(response.data);
        setCount(response.headers.get('X-Total-Count')); //Tổng số sản phẩm
        setLoading(false)
      })
    } catch (error) {
      console.log(error)
    }
  }, [pageParams, category])

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
                  <Category setCategory={setCategory} />
                  <div className="row">
                    {(!isLoading && listProduct) && listProduct.map((item, index) => {
                      return (
                        <div className="col-12 col-sm-6 col-lg-4" key={index}>
                          <div className="item">
                            <img src={item.image} alt="" style={{ height: "350px" }} />
                            <h4>{item.category}<br /><span>Price: {item.price} $</span></h4>
                            <div>
                              <span><i className="fa fa-star"></i> {item.rating.rate}</span>
                              <span><i className="fa fa-download"></i> {item.rating.count}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    {isLoading && (<Spinner animation="border" variant="light" />)}
                    <div className="col-lg-12">
                      <div className="pagination-main">
                        <Pagination pageCount={count} setPageParams={setPageParams} limit={limit} />
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
