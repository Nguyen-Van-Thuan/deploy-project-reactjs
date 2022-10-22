import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = ({ setCategory }) => {
  const [listCategory, setListCategory] = useState();

  //   Call API
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:3000/category",
      }).then(function (res) {
        setListCategory(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   Set Category
  const hanleClick = (item) => {
    setCategory(item, "item");
  }
  return (
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
  );
};

export default Category;
