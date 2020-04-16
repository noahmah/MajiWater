import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => {
    <div>
        <div class="border">
            <input type="range" min="1" max="3" class="slider" id="myRange" />
            <p>Value: <span id="valueSlider"></span></p>
        </div>
    </div>


    var slider = document.querySelector("#myRange");
    var output = document.querySelector("#value");

    export default Slider;