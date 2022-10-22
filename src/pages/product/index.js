import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Category from "../Category";
import './product.css'

const Product = () => {
  const limit = 8;
  const [isLoading, setLoading] = useState(false);
  const [listData, setListData] = useState(); //Danh sách sản phẩm
  const [sumProduct, setSumProduct] = useState(); //Tổng số sản phẩm trong API
  const [page, setPages] = useState(1);
  const [category, setCategory] = useState()
  const [selectPrice, setSelectPrice] = useState()
  const [order, setOrder] = useState()

  useEffect(() => {
    setLoading(true);
    try {
      axios({
        method: "get",
        url: "http://localhost:3000/product",
        params: {
          _page: page,
          _limit: limit,
          category: category, //category
          _sort: selectPrice,
          _order: order
        },
      }).then(function (response) {
        setListData(response.data);
        setSumProduct(response.headers.get("X-Total-Count"));
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [page, category, selectPrice, order]);

  // console.log(listData);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="most-popular">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Most Popular</em> Right Now
                    </h4>
                  </div>
                  <div className="category-filter">
                    <Category setCategory={setCategory} setSelectPrice={setSelectPrice} setOrder={setOrder}/>
                  </div>
                  <div className="row">
                    {!isLoading &&
                      listData &&
                      listData.map((item, index) => {
                        // console.log(item, "item");
                        return (
                          <div className="col-lg-3 col-sm-6" key={index}>
                            <div className="item">
                              <img
                                src={item.image}
                                alt=""
                                style={{ height: "250px" }}
                              />
                              <h4>
                                {item.category}
                                <br />
                                <span>Price: {item.price} $</span>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>{" "}
                                  {item.rating.rate}
                                </li>
                                <li>
                                  <i className="fa fa-download"></i>{" "}
                                  {item.rating.count}
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    {isLoading && (
                      <Spinner animation="border" variant="success" />
                    )}
                    <div className="col-lg-12">
                      <div className="main-button">
                        <Pagination
                          sumProduct={sumProduct}
                          limit={limit}
                          setPages={setPages}
                        />
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
