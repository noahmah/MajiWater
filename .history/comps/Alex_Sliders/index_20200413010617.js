import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => (
    <div>
        <div class="border">
            <input type="range" min="1" max="3" class="slider" id="myRange" />
            <p>Value: <span id="value"></span></p>
        </div>
    </div>
);

var slider = document.querySelector("#myRange");
var output = document.querySelector("#value");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


export default Slider;