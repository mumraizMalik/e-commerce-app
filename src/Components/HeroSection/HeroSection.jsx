import React, { useEffect, useRef, useState, useContext } from "react";
import "./heroSection.css";
import { ThemeColorContext } from "../../Context/theme";
import { FaAngleRight } from "react-icons/fa";
import sectionImage from "../../Images/image1.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { theme } = useContext(ThemeColorContext);

  return (
    <div
      className="hero__parentContainer"
      style={{ backgroundColor: theme.white }}
    >
      <div className="hero__box1">
        <img
          className="hero__image"
          src={sectionImage}
          alt="Model Image With Product"
        />
      </div>
      <div className="hero__box2">
        <h1 style={{ fontSize: 50, color: theme.black }}>SUMMER SALES</h1>
        <p style={{ color: theme.black }}>
          DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS
        </p>
        <Link
          to="products"
          style={{ color: theme.black, borderColor: theme.white }}
          className="hero__ShopNowButton"
        >
          Shop Now <FaAngleRight style={{ color: theme.black }} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
