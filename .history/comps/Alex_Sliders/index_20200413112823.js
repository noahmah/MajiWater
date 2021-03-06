import React from "react";
import "../Alex_Sliders/slider.css";



var slider = document.querySelector("#myRange");
var output = document.querySelector("#valueSlider");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function () {
    var x = slide.value;
    var color = "linear-gradient(90deg, #7491B1 + x + '%', rgb(245, 13, 52) + x + '%')"
    slider.style.background = color;
})



const Slider = () => {
    <div>
        <div class="border">
            <input type="range" min="1" max="3" value="1" class="slider" id="myRange" />
            <p>Value: <span id="valueSlider"></span></p>
        </div>
    </div>
}
export default Slider;