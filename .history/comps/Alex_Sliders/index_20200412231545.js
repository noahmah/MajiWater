import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => (
    <div>
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        <input type="range" min="1" max="100" value="50" />
    </div>
);

export default Slider;