import React from "react";
import "./BodyText.css";

const BodyText = ({ text, color, fontSize, fontStyle, fontWeight }) => (
  <p
    style={{
      color: color,
      fontSize: fontSize,
      fontStyle: fontStyle,
      fontWeight,
    }}
  >
    {text}
  </p>
);

BodyText.defaultProps = {
  text: "This is the default body text",
  color: "#204377",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "normal",
};

export default BodyText;
