import React from "react";

const Button = ({ title, buttonStyle, onClick }) => {
  let myButtonStyle = {
    backgroundColor: "transparent",
    margin: "0px",
  };
  myButtonStyle = { ...myButtonStyle, ...buttonStyle };

  return (
    <button className="onClick" onClick={onClick} style={myButtonStyle}>
      {title}
    </button>
  );
};

export default Button;
