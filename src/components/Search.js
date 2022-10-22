import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [valueInput, setValueInput] = useState();
  const [listSearch, setListSearch] = useState();

  const handleInput = (event) => {
    setValueInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(valueInput, "valueInput");
    axios({
      method: "get",
      url: `http://localhost:3000/product`,
      params: {
        q: valueInput,
      },
    }).then(function (res) {
      setListSearch(res.data);
    });
  };

  console.log(listSearch, "listSearch");

  return (
    <form id="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Something"
        id="searchText"
        name="searchKeyword"
        onChange={handleInput}
      />
      <i className="fa fa-search"></i>

      <ul class="wrap-search">
        {listSearch &&
          listSearch.map((item, index) => {
            return (
              <li key={index}>
                <Link to="">
                  <img src={item.image} />
                  <div className="box-contents">
                    <h3>{item.title}</h3>
                    <p className="price">{item.price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </form>
  );
};

export default Search;
