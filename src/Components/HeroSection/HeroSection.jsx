import React, { useEffect, useRef, useState, useContext } from "react";
import "./heroSection.css";
import { ThemeColorContext } from "../../Context/theme";
import { FaAngleRight } from "react-icons/fa";
import sectionImage from "../../Images/image1.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { theme, setTheme } = useContext(ThemeColorContext);
  // const [imageWidth, setImageWidth] = useState(null);
  // const targetRef = useRef();
  // useEffect(() => {
  //   setImageWidth(targetRef.current);
  // }, []);
  // const handleResize = () => {
  //   if (targetRef.current?.offsetWidth)
  //     setImageWidth(targetRef.current?.offsetWidth);
  // };

  // window.addEventListener("resize", handleResize);

  return (
    <div
      className="hero__parentContainer"
      style={{ backgroundColor: theme.white }}
    >
      <div
        // ref={targetRef}
        className="hero__box1"
        // style={{
        //   backgroundImage: `url(${sectionImage})`,
        //   backgroundSize: "contain",
        //   height: imageWidth ? imageWidth : "300px",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <img
          // style={{ height: targetRef.current.dimensions.width }}
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
