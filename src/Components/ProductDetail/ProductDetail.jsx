import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./productDetail.css";
import { ThemeColorContext } from "../../Context/theme";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import {
  decrementCart,
  incrementCart,
  addCartProduct,
  decrementCartProduct,
} from "../../features/cartSlice";

import { useSelector } from "react-redux";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state?.data;
  const { theme } = useContext(ThemeColorContext);
  const cartProduct = useSelector((state) => state.cartProduct);
  const options2 = ["XS", "S", "M", "L", "XL"];
  const defaultOption2 = options2[0];

  const dispatch = useDispatch();
  const handelIncrement = (item) => {
    dispatch(incrementCart());
    dispatch(addCartProduct(item));
  };
  const handelDecrement = (item) => {
    dispatch(decrementCart());
    dispatch(decrementCartProduct(item));
  };
  const thisIteminCart = () => {
    const product = cartProduct.find((item) => data.id == item.id);
    return product?.noOfItems ? product.noOfItems : 0;
  };
  return (
    <div
      className="detail__parentContainer"
      style={{ backgroundColor: theme.white }}
    >
      <div className="detail__box1">
        <img
          className="detail__box1__Image"
          src={data?.image}
          alt="Product_Image"
        />
      </div>
      <div className="detail__box2">
        <h4 style={{ fontSize: 40, color: theme.black, margin: "0px" }}>
          {data?.title}
        </h4>
        <p style={{ color: theme.black }}>{data?.description}</p>
        <div className="row">
          <span style={{ fontSize: 24, color: theme.black }}>Colors</span>
          <div
            className="detail__Cirule onClick"
            style={{
              borderColor: "white",
              backgroundColor: "black",
              border: `1px solid ${theme.black}`,
            }}
          ></div>
          <div
            className="detail__Cirule onClick"
            style={{
              borderColor: "white",
              backgroundColor: "red",
              border: `1px solid ${theme.black}`,
            }}
          ></div>
          <div
            className="detail__Cirule onClick"
            style={{
              borderColor: "white",
              backgroundColor: "blue",
              border: `1px solid ${theme.black}`,
            }}
          ></div>
          <span style={{ fontSize: 24, color: theme.black, marginLeft: "3vw" }}>
            Sizes
          </span>

          <Dropdown
            options={options2}
            onChange={(value) => {}}
            value={defaultOption2}
            placeholder={defaultOption2}
          />
        </div>
        <p style={{ fontSize: 32, color: theme.black }}>{`$ ${data?.price}`}</p>
        <div className="row" style={{}}>
          <button
            onClick={() => handelDecrement(data)}
            className="onClick button"
            style={{
              fontSize: 36,
              color: theme.black,
              textAlign: "center",
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            -
          </button>
          <button
            style={{
              border: `1px solid ${theme.black}`,
              paddingLeft: "12px",
              paddingRight: "12px",
              borderRadius: "8px",
              marginLeft: "1vw",
              color: theme.black,
            }}
          >
            {thisIteminCart()}
          </button>
          <span
            onClick={() => handelIncrement(data)}
            className="onClick button"
            style={{
              fontSize: 36,
              color: theme.black,
              marginLeft: "1vw",
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            +
          </span>
        </div>
        <p style={{ color: theme.black }}>Rating: {data?.rating.rate}/5</p>
      </div>
    </div>
  );
};

export default ProductDetail;
