import React, { useContext, useState } from "react";
import "./cartProduct.css";
import { ThemeColorContext } from "../../Context/theme";
import Button from "../Button/Button";
import OrderSummary from "./OrderSummary";
import { useDispatch } from "react-redux";
import {
  decrementCart,
  incrementCart,
  addCartProduct,
  decrementCartProduct,
} from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartProduct = () => {
  const { theme } = useContext(ThemeColorContext);

  const cartProduct = useSelector((state) => state.cartProduct);

  const dispatch = useDispatch();
  const handelIncrement = (item) => {
    dispatch(incrementCart());
    dispatch(addCartProduct(item));
  };
  const handelDecrement = (item) => {
    dispatch(decrementCart());
    dispatch(decrementCartProduct(item));
  };
  const mapList = () => {
    return cartProduct.map((item) => {
      return (
        <div className="cartProduct__productConatiner">
          <div className="cartProduct__productImage">
            <img
              loading="eager"
              src={item?.image}
              style={{ height: "150px" }}
            />
          </div>
          <div className="cartProduct__productDetail ml-10">
            {/* ProductTitle */}
            <div className="row ">
              <h5>Product: </h5>
              <p className="ml-10">{item.title}</p>
            </div>

            <div className="row spaceBetween">
              <div className="row">
                <h5>ID: </h5>
                <p className="ml-10">{item.id}</p>
              </div>
              <div className="row" style={{}}>
                <button
                  onClick={() => handelDecrement(item)}
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
                  {item.noOfItems}
                </button>
                <span
                  onClick={() => handelIncrement(item)}
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
            </div>

            <div className="circle"></div>
          </div>
          {/* EmptyContainer  */}
          <div style={{ flex: 1 }}></div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="cartProduct__topBar">
        <Link to={"/products"}>
          <Button
            title={"Continue Shoping"}
            buttonStyle={{
              color: theme.black,
              border: `1px solid ${theme.black}`,
            }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            title={"Shoping Blog"}
            buttonStyle={{ color: theme.black, border: "0px" }}
          />
          <Button
            title={"Your Wishlist"}
            buttonStyle={{ color: theme.black, border: "0px" }}
          />
        </div>

        <Button
          title={"checkout Now"}
          buttonStyle={{
            color: theme.black,
            border: `1px solid ${theme.black}`,
          }}
        />
      </div>
      <div>
        {/* ProductContainer */}
        <div className="flexRow mt-10 wrap">
          <div className="cartProduct__mapProduct">{mapList()}</div>
          <div className="cartProduct__orderSummaryContainer">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
