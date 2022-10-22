import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = ({ setCategory, setSelectPrice, setOrder }) => {
  const [listCategory, setListCategory] = useState();
  const [listSort, setListSort] = useState();

  //   Call API
  useEffect(() => {
    try {
      // Api category
      axios({
        method: "get",
        url: "http://localhost:3000/category",
      }).then(function (res) {
        setListCategory(res.data);
      });
      // Api sort selcecter
      axios({
        method: "get",
        url: "http://localhost:3000/sort-select",
      }).then(function (response) {
        setListSort(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   Set Category
  const hanleClick = (item) => {
    if (item === "all product") {
      setCategory();
    } else {
      setCategory(item);
    }
  };

  const handleSort = (e) => {
    console.log(e.target.value, "123");
    setSelectPrice("price");
    // setSelectPrice("")
    if (e.target.value === "Phân loại") {
      setOrder();
    } else if (e.target.value === "Giá từ thấp tới cao") {
      setOrder("asc");
    } else {
      setOrder("desc");
    }
  };

  return (
    <>
      <ul>
        {listCategory &&
          listCategory.map((item, index) => {
            return (
              <li key={index}>
                <span onClick={() => hanleClick(item)}>{item}</span>
              </li>
            );
          })}
      </ul>
      <select onChange={handleSort}>
        {listSort &&
          listSort.map((value, index) => {
            //xử lý value
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default Category;
