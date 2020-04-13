import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => (
    <div>
        <div class="border">
            <input type="range" min="1" max="3" value="1" class="slider" id="myRange" />
            <p>Value: <span id="value"></span></p>
        </div>
    </div>
);

var slider = document.querySelector("#myRange").value;
var output = document.querySelector("#value").value;

output.innerHTML = slider;



export default Slider;