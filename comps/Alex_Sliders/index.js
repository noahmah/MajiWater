import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => {
  return (
    <div>
      <div className="progBarCont">
        <input type="range" min="1" max="3" class="slider" id="myRange" />
        <div className="lines">
          <div id="line"></div>
          <div id="line"></div>
          <div id="line"></div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
