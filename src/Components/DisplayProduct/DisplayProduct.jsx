import React, { useRef, useState, useEffect, useContext } from "react";
import "./displayProduct.css";
import { ThemeColorContext } from "../../Context/theme";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getAllProduct, getByCategory } from "./Api";
import { Link } from "react-router-dom";
const DisplayProduct = () => {
  const { theme } = useContext(ThemeColorContext);
  const [list, setList] = useState([]);
  const [options, setoptions] = useState(["all"]);
  const getCategoryForDropDown = (list) => {
    list.map((item) => {
      if (!options.includes(item.category)) {
        options.push(item.category);
      }
    });
    setoptions(options);
  };
  const getProducts = () => {
    getAllProduct(setList, getCategoryForDropDown);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const getListByCategory = (category) => {
    if (category == "all") getProducts();
    else getByCategory(category, setList);
  };
  const sortOptions = ["None", "SortByPrice", "SortByAlphabet"];
  const defaultOption = options[0];

  const sortByPrice = () => {
    list.sort((a, b) => {
      return a.price - b.price;
    });
    setList([...list]);
  };
  const sortByAlphabet = () => {
    list.sort((a, b) => {
      return a.price - b.price;
    });
    setList([...list]);
  };
  return (
    <div
      style={{ backgroundColor: theme.white }}
      className="displayProduct__parentContainer"
    >
      <div className="displayProducts__Filter">
        <div className="displayProducts__filter_SubContainer">
          <h4 style={{ marginRight: "8px", color: theme.black }}>
            Filter Products:
          </h4>
          <Dropdown
            options={options}
            onChange={(value) => {
              getListByCategory(value.value);
            }}
            value={defaultOption}
            placeholder={defaultOption}
          />
        </div>
        <div className="displayProducts__filter_SubContainer">
          <h4 style={{ marginRight: "8px", color: theme.black }}>
            Sort Products:
          </h4>
          <Dropdown
            options={sortOptions}
            onChange={(value) => {
              console.log(value);
              value.value === "SortByPrice"
                ? sortByPrice()
                : value.value === "SortByAlphabet"
                ? sortByAlphabet()
                : getProducts();
            }}
            value={sortOptions[0]}
            placeholder={sortOptions[0]}
          />
        </div>
      </div>

      <div className="mapListParent">
        <MapList list={list} />
      </div>
    </div>
  );
};

const MapList = ({ list }) => {
  const { theme } = useContext(ThemeColorContext);

  return list.map((item) => {
    return (
      <Link to="/ProductDetail" state={{ data: item }}>
        <div className="imageContainer">
          <img
            loading="lazy"
            src={item.image}
            style={{
              width: "100%",
              minWidth: "200px",
              minHeight: "200px",
              objectFit: "fill",
              height: "18vw",
            }}
          />
          <div
            style={{
              height: "6vh",
              overflow: "hidden",
              padding: "0.5vh",

              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: theme.black,
            }}
          >
            {item?.title}ggggggggggggggggggggggggggggggg
          </div>
        </div>
      </Link>
    );
  });
};

export default DisplayProduct;
