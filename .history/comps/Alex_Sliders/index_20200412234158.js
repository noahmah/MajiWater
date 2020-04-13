import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => (
    <div>
        <div class="border">
            <span id="rangeValue">0</span>
            <input type="range" name="" value="0" min="0" max="1000" />
        </div>
    </div>
);

export default Slider;