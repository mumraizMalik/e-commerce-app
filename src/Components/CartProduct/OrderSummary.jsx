import React, { useContext } from "react";
import "./orderSummary.css";
import Button from "../Button/Button";
import { ThemeColorContext } from "../../Context/theme";
const OrderSummary = () => {
  const { theme } = useContext(ThemeColorContext);
  return (
    <div
      className="orderSummary__parentContainer"
      style={{ border: `1px solid ${theme.gray}` }}
    >
      <div>Order Summary</div>
      <div className="orderSummary__row">
        <p>Subtotal:</p>
        <p>{`$ ${90.99}`}</p>
      </div>
      <div className="orderSummary__row">
        <p>Estimated Shipping:</p>
        <p>{`$ ${9.99}`}</p>
      </div>
      <div className="orderSummary__row">
        <p>Discount:</p>
        <p>{`$ ${9.99}`}</p>
      </div>
      <div className="orderSummary__row">
        <h5>Total:</h5>
        <h5>{`$ ${9.99}`}</h5>
      </div>
      <div className="orderSummary__checkOutButtonContainer ">
        <Button
          title={"Chechout"}
          buttonStyle={{ padding: "2px 16px 2px 16px" }}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
