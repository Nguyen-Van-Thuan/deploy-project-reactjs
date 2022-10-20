import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Category = ({ setCategory }) => {
  const [listCategory, setListCategory] = useState()

  useEffect(() => {
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3000/category',
      }).then(function (response) {
        setListCategory(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }, [])
  const handleClick = (item) => {
    setCategory(item)
  }

  return (
    <div className="category-product">
      <ul>
        <li>
          {listCategory && listCategory.map((item, index) => {
            return (
              <span key={index}
                onClick={() => handleClick(item)}
              >
                {item}
              </span>
            )
          })}
        </li>
      </ul>

    </div>
  )
}

export default Category