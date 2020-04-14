import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => (
    <div>
        <div class="border">
            <input type="range" min="1" max="3" value="2" class="slider" id="myRange" />
        </div>
    </div>
);

export default Slider;