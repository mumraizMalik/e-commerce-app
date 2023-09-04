import React, { useContext, useEffect } from "react";
import "./navbar.css";
import { ThemeColorContext } from "../../Context/theme";
import { theme1, theme2, theme3 } from "../../Styles/Colors";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeColorContext);
  const cartValue = useSelector((state) => state.noOfProductInCart);
  const options = ["theme1", "theme2", "theme3"];
  const defaultOption = options[0];
  const options2 = ["En", "Fr"];
  const defaultOption2 = options2[0];
  return (
    <div className="parentContainer" style={{ backgroundColor: theme.white }}>
      <div className="box1">
        <Dropdown
          style={{ backgroundColor: "red" }}
          options={options}
          onChange={(value) => {
            value.value === "theme1"
              ? setTheme(theme1)
              : value.value === "theme2"
              ? setTheme(theme2)
              : value.value === "theme3"
              ? setTheme(theme3)
              : console.log(value.value);
          }}
          value={defaultOption}
          placeholder={defaultOption}
        />
        <Dropdown
          options={options2}
          onChange={(value) => {}}
          value={defaultOption2}
          placeholder={defaultOption2}
        />
      </div>
      <div className="box2">
        <h3 style={{ color: theme.black }}>MAMA</h3>
      </div>

      <ul className="box3">
        <li style={{ color: theme.black, marginRight: "16px" }}>
          <a>Register</a>
        </li>
        <li style={{ color: theme.black, marginRight: "16px" }}>
          <a>SignIn</a>
        </li>
        <li>
          <Link to="/cart" className="row">
            <FaShoppingCart style={{ color: theme.black }} />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -15,
                  fontSize: 12,
                  color: theme.black,
                }}
              >
                {cartValue}
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
